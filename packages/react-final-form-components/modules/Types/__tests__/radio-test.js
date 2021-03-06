import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Form from "../../Provider/Form";
import React from "react";
import Radio from "../Radio";

const flushPromises = () => new Promise(setImmediate);
const field = () => (
  <Radio
    columns={2}
    name={"field"}
    placeholder={"a nice placeholder"}
    help={"What was your mothers maiden name?"}
  >
    <option value={"1"}>choice 1</option>
    <option value={"2"}>choice 2</option>
    <option value={"3"}>choice 3</option>
    <option value={"4"}>choice 4</option>
  </Radio>
);

const fieldWithFilter = () => (
  <Radio
    filter
    name={"field"}
    placeholder={"a nice placeholder"}
    help={"What was your mothers maiden name?"}
  >
    <option value={"1"}>choice 1</option>
    <option value={"2"}>choice 2</option>
    <span>Doe eens iets geks erbij</span>
    <option value={"3"}>choice 3</option>
    <option value={"4"}>
      <strong>choice 1</strong>
    </option>
  </Radio>
);

describe("BS3 radio type", () => {
  it("should render input text", () => {
    const tree = renderer.create(
      <Form onSubmit={() => {}} initialValues={{ field: "" }}>
        {field()}
      </Form>
    );
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it("should return one choices", async () => {
    const callback = jest.fn();

    const component = mount(
      <Form onSubmit={callback} initialValues={{ field: [] }}>
        {field()}
      </Form>
    );

    const inputs = component.find("input");
    expect(inputs).toHaveLength(4);

    inputs.at(0).simulate("change", {
      target: { name: "field", value: "1", checked: true }
    });
    await flushPromises();
    inputs.at(1).simulate("change", {
      target: { name: "field", value: "2", checked: true }
    });
    await flushPromises();
    inputs.at(2).simulate("change", {
      target: { name: "field", value: "3", checked: true }
    });
    await flushPromises();

    const helpBlock = component.find(".help-block");
    expect(helpBlock.text()).toEqual("What was your mothers maiden name?");

    component.find("form").simulate("submit");
    expect(callback).toHaveBeenCalledTimes(1);

    expect(callback).toHaveBeenCalledWith(
      {
        field: "3"
      },
      expect.any(Object),
      expect.any(Function)
    );
  });

  it("should filter the options list", async () => {
    const callback = jest.fn();

    const component = mount(
      <Form onSubmit={callback} initialValues={{ field: [] }}>
        {fieldWithFilter()}
      </Form>
    );

    let inputs;
    inputs = component.find("input");
    expect(inputs).toHaveLength(5);

    inputs.at(1).simulate("change", {
      target: { name: "field", value: "1", checked: true }
    });
    await flushPromises();
    inputs.at(2).simulate("change", {
      target: { name: "field", value: "2", checked: true }
    });
    await flushPromises();
    inputs.at(3).simulate("change", {
      target: { name: "field", value: "3", checked: true }
    });
    await flushPromises();
    inputs.at(3).simulate("change", {
      target: { name: "field", value: "3", checked: false }
    });
    await flushPromises();
    // Filter the list
    inputs.at(0).simulate("change", { target: { value: "choice 1" } });
    inputs = component.find("input");
    expect(inputs).toHaveLength(3);

    // Reset the list
    const button = component.find("button");
    button.at(0).simulate("click");
    inputs = component.find("input");
    expect(inputs).toHaveLength(5);

    // Filter the list unknow keyword
    inputs.at(0).simulate("change", { target: { value: "key" } });
    inputs = component.find("input");
    expect(inputs).toHaveLength(1);

    const helpBlock = component.find(".help-block");
    expect(helpBlock.text()).toEqual("What was your mothers maiden name?");

    component.find("form").simulate("submit");
    expect(callback).toHaveBeenCalledTimes(1);

    expect(callback).toHaveBeenCalledWith(
      {
        field: "3"
      },
      expect.any(Object),
      expect.any(Function)
    );
  });

  it("should return boolean with ONE option", () => {
    const callback = jest.fn();
    const component = mount(
      <Form onSubmit={callback}>
        <Radio
          name={"field"}
          placeholder={"a nice placeholder"}
          help={"What was your mothers maiden name?"}
        >
          <span>I agree with the terms</span>
        </Radio>
      </Form>
    );

    const inputs = component.find("input");
    expect(inputs).toHaveLength(1);

    inputs.at(0).simulate("change", {
      target: { name: "field", value: "1", checked: true }
    });
    component.find("form").simulate("submit");
    expect(callback).toHaveBeenCalledWith(
      {
        field: true
      },
      expect.any(Object),
      expect.any(Function)
    );
  });

  it("should return boolean with NO options", () => {
    const callback = jest.fn();

    const component = mount(
      <Form onSubmit={callback}>
        <Radio
          name={"field"}
          placeholder={"a nice placeholder"}
          help={"What was your mothers maiden name?"}
        ></Radio>
      </Form>
    );

    const inputs = component.find("input");
    expect(inputs).toHaveLength(1);

    inputs.at(0).simulate("change", {
      target: { name: "field", value: "1", checked: true }
    });
    component.find("form").simulate("submit");
    expect(callback).toHaveBeenCalledWith(
      {
        field: true
      },
      expect.any(Object),
      expect.any(Function)
    );
  });

  it("should return no duplicate value", () => {
    const callback = jest.fn();

    const component = mount(
      <Form onSubmit={callback}>
        <Radio
          name={"field"}
          placeholder={"a nice placeholder"}
          help={"What was your mothers maiden name?"}
        >
          <option value={1}>Value 1</option>
          <option value={2}>Value 2</option>
        </Radio>
      </Form>
    );

    const inputs = component.find("input");
    expect(inputs).toHaveLength(2);

    inputs.at(0).simulate("change", {
      target: { name: "field", value: "1", checked: true }
    });
    // Some browser bug sends check event twice
    inputs.at(0).simulate("change", {
      target: { name: "field", value: "1", checked: true }
    });

    component.find("form").simulate("submit");
    expect(callback).toHaveBeenCalledWith(
      {
        field: 1
      },
      expect.any(Object),
      expect.any(Function)
    );
  });
});

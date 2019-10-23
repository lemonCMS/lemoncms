import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Form from "../../Provider/Form";
import React from "react";
import Checkbox from "../Checkbox";

const field = () => (
  <Checkbox
    columns={2}
    name={"field"}
    placeholder={"a nice placeholder"}
    help={"What was your mothers maiden name?"}
  >
    <option value={"1"}>choice 1</option>
    <option value={"2"}>choice 2</option>
    <option value={"3"}>choice 3</option>
    <option value={"4"}>choice 4</option>
  </Checkbox>
);

const fieldWithFilter = () => (
  <Checkbox
    filter
    name={"field"}
    placeholder={"a nice placeholder"}
    help={"What was your mothers maiden name?"}
  >
    <option value={"1"}>choice 1</option>
    <option value={"2"}>choice 2</option>
    <span>Doe eens iets geks erbij</span>
    <option value={"3"}>choice 3</option>
    <option value={"4"}>choice 4</option>
  </Checkbox>
);

describe("BS3 checkbox type", () => {
  it("should render input text", () => {
    const tree = renderer.create(
      <Form onSubmit={() => {}} initialValues={{ field: "username 0091" }}>
        {field()}
      </Form>
    );
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it("should return array with two choices", () => {
    const callback = jest.fn();

    const component = mount(
      <Form onSubmit={callback} initialValues={{ field: [] }}>
        {field()}
      </Form>
    );

    const inputs = component.find("input");
    expect(inputs).toHaveLength(4);

    inputs
      .at(0)
      .simulate("change", {
        target: { name: "field", value: "1", checked: true }
      });
    inputs
      .at(1)
      .simulate("change", {
        target: { name: "field", value: "2", checked: true }
      });
    inputs
      .at(2)
      .simulate("change", {
        target: { name: "field", value: "3", checked: true }
      });
    inputs
      .at(2)
      .simulate("change", {
        target: { name: "field", value: "3", checked: false }
      });

    const helpBlock = component.find(".help-block");
    expect(helpBlock.text()).toEqual("What was your mothers maiden name?");

    component.find("form").simulate("submit");
    expect(callback).toHaveBeenCalledTimes(1);

    expect(callback).toHaveBeenCalledWith(
      {
        field: ["1", "2"]
      },
      expect.any(Object),
      expect.any(Function)
    );
  });

  it("should filter the options list", () => {
    const callback = jest.fn();

    const component = mount(
      <Form onSubmit={callback} initialValues={{ field: [] }}>
        {fieldWithFilter()}
      </Form>
    );

    let inputs;
    inputs = component.find("input");
    expect(inputs).toHaveLength(5);

    inputs
      .at(1)
      .simulate("change", {
        target: { name: "field", value: "1", checked: true }
      });
    inputs
      .at(2)
      .simulate("change", {
        target: { name: "field", value: "2", checked: true }
      });
    inputs
      .at(3)
      .simulate("change", {
        target: { name: "field", value: "3", checked: true }
      });
    inputs
      .at(4)
      .simulate("change", {
        target: { name: "field", value: "3", checked: false }
      });

    // Filter the list
    inputs.at(0).simulate("change", { target: { value: "choice 1" } });
    inputs = component.find("input");
    expect(inputs).toHaveLength(2);

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
        field: ["1", "2"]
      },
      expect.any(Object),
      expect.any(Function)
    );
  });

  it("should return boolean with ONE option", () => {
    const callback = jest.fn();
    const component = mount(
      <Form onSubmit={callback}>
        <Checkbox
          name={"field"}
          placeholder={"a nice placeholder"}
          help={"What was your mothers maiden name?"}
        >
          <span>I agree with the terms</span>
        </Checkbox>
      </Form>
    );

    const inputs = component.find("input");
    expect(inputs).toHaveLength(1);

    inputs
      .at(0)
      .simulate("change", {
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

    inputs
      .at(0)
      .simulate("change", {
        target: { name: "field", value: "1", checked: false }
      });
    component.find("form").simulate("submit");
    expect(callback).toHaveBeenCalledWith(
      {},
      expect.any(Object),
      expect.any(Function)
    );
  });

  it("should return boolean with NO options", () => {
    const callback = jest.fn();

    const component = mount(
      <Form onSubmit={callback}>
        <Checkbox
          name={"field"}
          placeholder={"a nice placeholder"}
          help={"What was your mothers maiden name?"}
        ></Checkbox>
      </Form>
    );

    const inputs = component.find("input");
    expect(inputs).toHaveLength(1);

    inputs
      .at(0)
      .simulate("change", {
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

    inputs
      .at(0)
      .simulate("change", {
        target: { name: "field", value: "1", checked: false }
      });
    component.find("form").simulate("submit");
    expect(callback).toHaveBeenCalledWith(
      {},
      expect.any(Object),
      expect.any(Function)
    );
  });

  it("should return no duplicate value", () => {
    const callback = jest.fn();

    const component = mount(
      <Form onSubmit={callback}>
        <Checkbox
          name={"field"}
          placeholder={"a nice placeholder"}
          help={"What was your mothers maiden name?"}
        >
          <option value={1}>Value 1</option>
          <option value={2}>Value 2</option>
        </Checkbox>
      </Form>
    );

    const inputs = component.find("input");
    expect(inputs).toHaveLength(2);

    inputs
      .at(0)
      .simulate("change", {
        target: { name: "field", value: "1", checked: true }
      });
    // Some browser bug sends check event twice
    inputs
      .at(0)
      .simulate("change", {
        target: { name: "field", value: "1", checked: true }
      });

    component.find("form").simulate("submit");
    expect(callback).toHaveBeenCalledWith(
      {
        field: [1]
      },
      expect.any(Object),
      expect.any(Function)
    );
  });
});

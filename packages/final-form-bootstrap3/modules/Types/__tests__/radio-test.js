import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Form from "../../Provider/Form";
import React from "react";
import Radio from "../Radio";

const field = () => (
  <Radio
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

describe("BS3 radiobutton", () => {
  it("should render", () => {
    const tree = renderer.create(
      <Form onSubmit={() => {}} initialValues={{ field: "1" }}>
        {field()}
      </Form>
    );
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it("should return single value", () => {
    const callback = jest.fn();

    const component = mount(<Form onSubmit={callback}>{field()}</Form>);

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

    const helpBlock = component.find(".help-block");
    expect(helpBlock.text()).toEqual("What was your mothers maiden name?");

    component.find("form").simulate("submit");
    expect(callback).toHaveBeenCalledWith(
      {
        field: "3"
      },
      expect.any(Object),
      expect.any(Function)
    );
  });
});

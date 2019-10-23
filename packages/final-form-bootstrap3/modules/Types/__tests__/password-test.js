import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Form from "../../Provider/Form";
import Password from "../Password";
import React from "react";

describe("BS3 Password type", () => {
  it("should render input password", () => {
    const tree = renderer.create(
      <Form
        onSubmit={() => {}}
        validate={() => ({ password: "Oepsie daisy" })}
        initialValues={{ password: "password 0091" }}
      >
        <Password
          name={"password"}
          placeholder={"a nice placeholder"}
          help={"What was your mothers maiden name?"}
        />
      </Form>
    );
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it("should render input password enzyme", () => {
    const callback = jest.fn();
    callback.mockReturnValueOnce({ password: "password 0091" });
    const component = mount(
      <Form
        onSubmit={() => {}}
        validate={callback}
        initialValues={{ password: "password 0091" }}
      >
        <Password
          name={"password"}
          placeholder={"a nice placeholder"}
          help={"What was your mothers maiden name?"}
        />
        <button type={"submit"}>submit</button>
      </Form>
    );

    const input = component.find("input");
    expect(input).toBeDefined();

    const { value, name } = input.props();
    expect(value).toEqual("password 0091");
    expect(name).toEqual("password");

    /**
     * Help block is set
     */
    const helpBlock = component.find(".help-block");
    expect(helpBlock.text()).toEqual("What was your mothers maiden name?");

    /**
     * Test that error class will be set
     */
    expect(component.find(".has-error").length).toEqual(0);
    component.find("button").simulate("submit");
    expect(callback).toHaveBeenCalled();
    expect(component.find(".has-error").length).toEqual(1);
  });
});

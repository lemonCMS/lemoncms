import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Form from "../../../Provider/Form";
import Text from "../Text";
import React from "react";

describe("BS3 Text type", () => {
  it("should render input text", () => {
    const tree = renderer.create(
      <Form onSubmit={() => {}} initialValues={{ field: "username 0091" }}>
        <Text
          name={"field"}
          placeholder={"a nice placeholder"}
          help={"What was your mothers maiden name?"}
        />
      </Form>
    );
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it("should enzyme", () => {
    const component = mount(
      <Form onSubmit={() => {}} initialValues={{ username: "username 0091" }}>
        <Text
          name={"username"}
          placeholder={"a nice placeholder"}
          help={"What was your mothers maiden name?"}
        />
      </Form>
    );

    const input = component.find("input");
    expect(input).toBeDefined();
    const { value, name } = input.props();
    expect(value).toEqual("username 0091");
    expect(name).toEqual("username");
    const helpBlock = component.find(".help-block");

    expect(helpBlock.text()).toEqual("What was your mothers maiden name?");
  });
});

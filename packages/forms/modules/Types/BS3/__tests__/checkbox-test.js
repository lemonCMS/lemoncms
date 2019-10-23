import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Form from "../../../Provider/Form";
import Text from "../Text";
import React from "react";
import Checkbox from "../Checkbox";

describe("BS3 checkbox type", () => {
  it("should render input text", () => {
    const tree = renderer.create(
      <Form onSubmit={() => {}} initialValues={{ field: "username 0091" }}>
        <Checkbox
          name={"field"}
          placeholder={"a nice placeholder"}
          help={"What was your mothers maiden name?"}
        >
          <option value={"1"}>choice 1</option>
          <option value={"2"}>choice 2</option>
          <option value={"3"}>choice 3</option>
          <option value={"4"}>choice 4</option>
        </Checkbox>
      </Form>
    );
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  // it("should enzyme", () => {
  //   const component = mount(
  //     <Form onSubmit={() => {}} initialValues={{ username: "username 0091" }}>
  //       <Text
  //         name={"username"}
  //         placeholder={"a nice placeholder"}
  //         help={"What was your mothers maiden name?"}
  //       />
  //     </Form>
  //   );
  //
  //   const input = component.find("input");
  //   expect(input).toBeDefined();
  //   const { value, name } = input.props();
  //   expect(value).toEqual("username 0091");
  //   expect(name).toEqual("username");
  //   const helpBlock = component.find(".help-block");
  //
  //   expect(helpBlock.text()).toEqual("What was your mothers maiden name?");
  // });
});

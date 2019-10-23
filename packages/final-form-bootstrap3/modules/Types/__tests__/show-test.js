import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Form from "../../Provider/Form";
import Show from "../Show";
import React from "react";

describe("BS3 Text type", () => {
  it("should render input text", () => {
    const tree = renderer.create(
      <Form onSubmit={() => {}} initialValues={{ field: "true" }}>
        <Show name="show" condition={({ field }) => field === "true"}>
          SHOW
        </Show>
      </Form>
    );
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it("should display SHOW", () => {
    const component = mount(
      <Form onSubmit={() => {}} initialValues={{ field: "true" }}>
        <Show name="show" condition={({ field }) => field === "true"}>
          SHOW
        </Show>
      </Form>
    );

    const div = component.find("div");
    expect(div).toBeDefined();
    expect(div.text()).toEqual("SHOW");
  });

  it("should not display SHOW", () => {
    const component = mount(
      <Form onSubmit={() => {}} initialValues={{ field: "false" }}>
        <Show name="show" condition={({ field }) => field === "true"}>
          SHOW
        </Show>
      </Form>
    );

    const div = component.find("div");
    expect(div).toBeDefined();
    expect(div.text()).toBeFalsy();
  });
});

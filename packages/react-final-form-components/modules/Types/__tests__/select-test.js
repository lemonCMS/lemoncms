import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Form from "../../Provider/Form";
import Select from "../Select";
import React from "react";
import Checkbox from "../Checkbox";

describe("BS3 selectbox", () => {
  it("should render snapshot", () => {
    const tree = renderer.create(
      <Form onSubmit={() => {}}>
        <Select name={"field"} label={"Kids"}>
          <option value={"hailey"}>Hailey</option>
          <option value={"aiden"}>Aiden</option>
          <option value={"mayson"}>Mayson</option>
        </Select>
      </Form>
    );
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it("should emit single value", () => {
    const submit = jest.fn();
    const component = mount(
      <Form onSubmit={submit}>
        <Select name={"field"} label={"Kids"}>
          <option value={"hailey"}>Hailey</option>
          <option value={"aiden"}>Aiden</option>
          <option value={"mayson"}>Mayson</option>
        </Select>
      </Form>
    );

    const option = component.find("option");
    expect(option).toHaveLength(3);
    expect(option.at(0).props()).toHaveProperty("value", "hailey");
    expect(option.at(1).props()).toHaveProperty("value", "aiden");
    expect(option.at(2).props()).toHaveProperty("value", "mayson");

    component
      .find("select")
      .simulate("change", { target: { name: "field", value: "aiden" } });
    component.find("form").simulate("submit");

    expect(submit).toHaveBeenCalledTimes(1);
    expect(submit).toHaveBeenCalledWith(
      { field: "aiden" },
      expect.any(Object),
      expect.any(Function)
    );
  });

  it("should emit multiple values", () => {
    const submit = jest.fn();
    const component = mount(
      <Form onSubmit={submit} initialValues={{ field: [] }}>
        <Select name={"field"} label={"Kids"} multiple>
          <option value={"hailey"}>Hailey</option>
          <option value={"aiden"}>Aiden</option>
          <option value={"mayson"}>Mayson</option>
        </Select>
      </Form>
    );

    const option = component.find("option");
    expect(option).toHaveLength(3);
    expect(option.at(0).props()).toHaveProperty("value", "hailey");
    expect(option.at(1).props()).toHaveProperty("value", "aiden");
    expect(option.at(2).props()).toHaveProperty("value", "mayson");

    component.find("select").simulate("change", {
      target: { name: "field", value: ["hailey", "mayson"] }
    });
    component.find("form").simulate("submit");

    expect(submit).toHaveBeenCalledTimes(1);
    expect(submit).toHaveBeenCalledWith(
      { field: ["hailey", "mayson"] },
      expect.any(Object),
      expect.any(Function)
    );
  });
});

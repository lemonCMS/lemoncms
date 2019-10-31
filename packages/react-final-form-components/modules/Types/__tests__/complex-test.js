import renderer from "react-test-renderer";
import Form from "../../Provider/Form";
import React from "react";
import Complex, { Header, Footer } from "../Complex";
import Text from "../Text";
const flushPromises = () => new Promise(setImmediate);

describe("BS3 complex type", () => {
  it("should render a complex", () => {
    const tree = renderer.create(
      <Form
        onSubmit={() => {}}
        initialValues={{ user: [{ firstname: "Hailey" }] }}
      >
        <Complex name={"user"}>
          {() => (
            <>
              <Text name={"firstname"} label={"firstname"} />
            </>
          )}
        </Complex>
      </Form>
    );
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it("should render a complex with header", () => {
    const tree = renderer.create(
      <Form
        onSubmit={() => {}}
        initialValues={{ user: [{ firstname: "Hailey" }] }}
      >
        <Complex name={"user"}>
          <Header>{() => <div>Header</div>}</Header>
          {() => (
            <>
              <Text name={"firstname"} label={"firstname"} />
            </>
          )}
        </Complex>
      </Form>
    );
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it("should render a complex with footer", () => {
    const tree = renderer.create(
      <Form
        onSubmit={() => {}}
        initialValues={{ user: [{ firstname: "Hailey" }] }}
      >
        <Complex name={"user"}>
          {() => (
            <>
              <Text name={"firstname"} label={"firstname"} />
            </>
          )}
          <Footer>{() => <div>Footer</div>}</Footer>
        </Complex>
      </Form>
    );
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it("should render a complex with header and footer", () => {
    const headerFunc = jest.fn().mockReturnValueOnce(<div>HEADER MOCK</div>);
    const footerFunc = jest.fn().mockReturnValueOnce(<div>FOOTER MOCK</div>);
    const contentFunc = jest.fn().mockReturnValueOnce(<div>Content MOCK</div>);

    const tree = renderer.create(
      <Form
        onSubmit={() => {}}
        initialValues={{ user: [{ firstname: "Hailey" }] }}
      >
        <Complex name={"user"}>
          <Header>{headerFunc}</Header>
          {contentFunc}
          <Footer>{footerFunc}</Footer>
        </Complex>
      </Form>
    );
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();

    expect(contentFunc).toHaveBeenCalledTimes(1);
    expect(contentFunc).toHaveBeenCalledWith({
      index: 0,
      name: "user[0]",
      insert: expect.any(Function),
      move: expect.any(Function),
      pop: expect.any(Function),
      push: expect.any(Function),
      remove: expect.any(Function),
      shift: expect.any(Function),
      swap: expect.any(Function),
      unshift: expect.any(Function),
      update: expect.any(Function)
    });

    expect(headerFunc).toHaveBeenCalledTimes(1);
    expect(headerFunc).toHaveBeenCalledWith({
      insert: expect.any(Function),
      move: expect.any(Function),
      pop: expect.any(Function),
      push: expect.any(Function),
      remove: expect.any(Function),
      shift: expect.any(Function),
      swap: expect.any(Function),
      unshift: expect.any(Function),
      update: expect.any(Function)
    });

    expect(footerFunc).toHaveBeenCalledTimes(1);
    expect(footerFunc).toHaveBeenCalledWith({
      insert: expect.any(Function),
      move: expect.any(Function),
      pop: expect.any(Function),
      push: expect.any(Function),
      remove: expect.any(Function),
      shift: expect.any(Function),
      swap: expect.any(Function),
      unshift: expect.any(Function),
      update: expect.any(Function)
    });
  });
});

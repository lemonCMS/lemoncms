import React from 'react';
import Form from '../Provider/Form';
import renderer from 'react-test-renderer';

beforeEach(() => {
  // Clear state
});

describe('Form provider', () => {

  it('should render with children', () => {
    const tree = renderer
      .create(
        <Form
          onSubmit={() => {}}
        >
          <div>child component</div>
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should render with debug', () => {
    const tree = renderer
      .create(
        <Form
          debug
          onSubmit={() => {}}
        >
          <div>child component</div>
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

});

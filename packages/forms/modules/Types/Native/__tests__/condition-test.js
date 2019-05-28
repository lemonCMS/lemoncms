import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../../../Provider/Form';
import Text from '../Text';
import Condition from '../Condition';

const classes = {
  formGroup: 'form-group row',
  formLabel: 'form-label col-sm-5 col',
  formControl: 'form-control col-sm-7 col',
  formError: 'small offset-sm-5',
  formText: 'small offset-sm-5 text-muted'
};

beforeEach(() => {
  // Clear state
});

describe('Condition', () => {

  it('should render with children `visible`', () => {
    const tree = renderer
      .create(
        <Form
          onSubmit={() => {}}
        >
          <Condition visible={() => true}>
            <Text
              name={"field2"}
              placeholder={"field2 placeholder"}
              {...classes}
            />
          </Condition>
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should render without children `visible`', () => {
    const tree = renderer
      .create(
        <Form
          onSubmit={() => {}}
        >
          <Condition visible={() => false}>
            <Text
              name={"field2"}
              placeholder={"field2 placeholder"}
              {...classes}
            />
          </Condition>
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should render with children `hidden`', () => {
    const tree = renderer
      .create(
        <Form
          onSubmit={() => {}}
        >
          <Condition hidden={() => false}>
            <Text
              name={"field2"}
              placeholder={"field2 placeholder"}
              {...classes}
            />
          </Condition>
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should render without children `hidden`', () => {
    const tree = renderer
      .create(
        <Form
          onSubmit={() => {}}
        >
          <Condition hidden={() => true}>
            <Text
              name={"field2"}
              placeholder={"field2 placeholder"}
              {...classes}
            />
          </Condition>
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });
});

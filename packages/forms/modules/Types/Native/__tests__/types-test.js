import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Form from '../../../Provider/Form';
import Text from '../Text';
import Checkbox from '../Checkbox';
// import DropZone from '../DropZone';
import Password from '../Password';
import Radio from '../Radio';
import Select from '../Select';
import Textarea from '../Textarea';

const classes = {
  formGroup: 'form-group row',
  formLabel: 'form-label col-sm-5 col',
  formControl: 'form-control col-sm-7 col',
  formError: 'small offset-sm-5',
  formText: 'small offset-sm-5 text-muted'
};

describe('Input type', () => {
  it('should render input text', () => {
    const tree = renderer
      .create(
        <Form
          onSubmit={() => {
          }}
        >
          <Text
            name={"field"}
            placeholder={"a nice placeholder"}
            {...classes}
          />
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should render input password', () => {
    const tree = renderer
      .create(
        <Form
          onSubmit={() => {
          }}
        >
          <Password
            name={"field"}
            placeholder={"a nice placeholder"}
            {...classes}
          />
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should render input textarea', () => {
    const tree = renderer
      .create(
        <Form
          onSubmit={() => {
          }}
        >
          <Textarea
            name={"field"}
            placeholder={"a nice placeholder"}
            {...classes}
          />
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should render input checkbox', () => {
    const tree = renderer
      .create(
        <Form
          onSubmit={() => {
          }}
        >
          <Checkbox
            name={"field"}
            placeholder={"a nice placeholder"}
            {...classes}
          >
            <option value={1}>value 1</option>
            <option value={2}>value 2</option>
            <option value={3}>value 3</option>
          </Checkbox>
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should render input select', () => {
    const tree = renderer
      .create(
        <Form
          onSubmit={() => {
          }}
          initialValues={{
            field: 3
          }}
        >
          <Select
            name={"field"}
            placeholder={"a nice placeholder"}
            {...classes}
          >
            <option value={1}>value 1</option>
            <option value={2}>value 2</option>
            <option value={3}>value 3</option>
          </Select>
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should render input select with selected option', () => {
    const tree = renderer
      .create(
        <Form
          onSubmit={() => {
          }}
          initialValues={{
            field: 3
          }}
        >
          <Select
            name={"field"}
            placeholder={"a nice placeholder"}
            {...classes}
          >
            <option value={1}>value 1</option>
            <option value={2}>value 2</option>
            <option value={3}>value 3</option>
          </Select>
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should render input radio', () => {
    const tree = renderer
      .create(
        <Form
          onSubmit={() => {
          }}
        >
          <Radio
            name={"field"}
            placeholder={"a nice placeholder"}
            {...classes}
          >
            <option value={1}>value 1</option>
            <option value={2}>value 2</option>
            <option value={3}>value 3</option>
          </Radio>
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should render input radio with checked value', () => {
    const tree = renderer
      .create(
        <Form
          onSubmit={() => {
          }}
          initialValues={{
            field: 3
          }}
        >
          <Radio
            name={"field"}
            placeholder={"a nice placeholder"}
            {...classes}
          >
            <option value={1}>value 1</option>
            <option value={2}>value 2</option>
            <option value={3}>value 3</option>
          </Radio>
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should render input radio with checked value `string`', () => {
    const tree = renderer
      .create(
        <Form
          onSubmit={() => {
          }}
          initialValues={{
            field: '2'
          }}
        >
          <Radio
            name={"field"}
            placeholder={"a nice placeholder"}
            {...classes}
          >
            <option value={1}>value 1</option>
            <option value={2}>value 2</option>
            <option value={3}>value 3</option>
          </Radio>
        </Form>);
    const output = tree.toJSON();
    expect(output).toMatchSnapshot();
  });

  it('should render input radio with simulated click', () => {
    const validate = jest.fn();
    const onSubmit = jest.fn();
    const component = mount(
      <Form
        onSubmit={onSubmit}
        validate={validate}
      >
        <Radio
          name={"field"}
          placeholder={"a nice placeholder"}
          {...classes}
        >
          <option value={1}>value 1</option>
          <option value={2}>value 2</option>
          <option value={3}>value 3</option>
        </Radio>
      </Form>);
    expect(component.find('input')).toHaveLength(3);
    expect(component.find('input[checked=true]')).toHaveLength(0);
    const radioInputs = component.find('input');
    radioInputs.map(input => {
      input.simulate('change');
      expect(component.find('input[checked=true]')).toHaveLength(1);
    });
    expect(validate).toHaveBeenCalledWith({ "field": 3 });
    component.simulate('submit');
    expect(onSubmit).toHaveBeenCalledWith({ "field": 3 }, expect.any(Object), expect.any(Function));
  });

  it('should render input checkbox with simulated click single value', () => {
    const validate = jest.fn();
    const onSubmit = jest.fn();
    const component = mount(
      <Form
        onSubmit={onSubmit}
        validate={validate}
      >
        <Checkbox
          name={"checkbox"}
          placeholder={"a nice placeholder"}
          {...classes}
        >
          <option value={1}>value 1</option>
          <option value={2}>value 2</option>
          <option value={3}>value 3</option>
        </Checkbox>
      </Form>);
    expect(component.find('input')).toHaveLength(3);
    expect(component.find('input[checked=true]')).toHaveLength(0);
    const checkboxes = component.find('input');
    checkboxes.map(input => {
      input.simulate('change', { target: { checked: true } });
      expect(component.find('input[checked=true]')).toHaveLength(1);
    });

    expect(validate).toHaveBeenCalledWith({ "checkbox": 3 });
    component.simulate('submit');
    expect(onSubmit).toHaveBeenCalledWith({ "checkbox": 3 }, expect.any(Object), expect.any(Function));

  });

  it('should render input checkbox with simulated click multiple values', () => {
    const validate = jest.fn();
    const onSubmit = jest.fn();
    const component = mount(
      <Form
        onSubmit={onSubmit}
        validate={validate}
      >
        <Checkbox
          multiple
          name={"checkbox"}
          placeholder={"a nice placeholder"}
          {...classes}
        >
          <option value={1}>value 1</option>
          <option value={2}>value 2</option>
          <option value={3}>value 3</option>
        </Checkbox>
      </Form>);
    expect(component.find('input')).toHaveLength(3);
    expect(component.find('input[checked=true]')).toHaveLength(0);
    const checkboxes = component.find('input');
    let cnt = 0;
    checkboxes.map(checkbox => {
      checkbox.simulate('change', { target: { checked: true } });
      expect(component.find('input[checked=true]')).toHaveLength(++cnt);
    });

    expect(validate).toHaveBeenCalledWith({ "checkbox": [1, 2, 3] });
    component.simulate('submit');
    expect(onSubmit).toHaveBeenCalledWith({ "checkbox": [1, 2, 3] }, expect.any(Object), expect.any(Function));
    checkboxes.first().simulate('change', { target: { checked: false } });
    expect(validate).toHaveBeenCalledWith({ "checkbox": [2, 3] });
    component.simulate('submit');
    expect(onSubmit).toHaveBeenCalledWith({ "checkbox": [2, 3] }, expect.any(Object), expect.any(Function));

  });
});

import React from 'react';
import ReactDOM from 'react-dom';
// import { act } from 'react-dom/test-utils';
import { act } from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import Form from '../../../Provider/Form';
import Message from '../Message';
import Text from '../Text';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


describe('Show message', () => {
  it('error', () => {
    const submit = jest.fn();
    submit.mockReturnValueOnce({ username: 'invalid' });

    const component = mount(<Form onSubmit={submit} initialValues={{ username: 'raymond' }}>
      <Text type={'text'} name={'username'} />
      <Message type={'success'}>This success message should show</Message>
      <Message type={'error'}>This error message should show</Message>
      <button type={'submit'}>do it</button>
    </Form>);

    expect(component.find('button')).toHaveLength(1)
    component.simulate('submit');

    process.nextTick(() => {
      expect(submit).toHaveBeenCalledTimes(1);
      expect(component.find('div.message-success')).toHaveLength(0);
      expect(component.find('div.message-error')).toHaveLength(1);
    });
  });

  it('success', () => {
    const submit = jest.fn();
    submit.mockReturnValueOnce();

    const component = mount(<Form onSubmit={submit} initialValues={{ username: 'raymond' }}>
      <Text type={'text'} name={'username'} />
      <Message type={'success'}>This success message should show</Message>
      <Message type={'error'}>This error message should show</Message>
      <button type={'submit'}>do it</button>
    </Form>);

    expect(component.find('button')).toHaveLength(1)
    component.simulate('submit');

    process.nextTick(() => {
      expect(submit).toHaveBeenCalledTimes(1);
      expect(component.find('div.message-success')).toHaveLength(1);
      expect(component.find('div.message-error')).toHaveLength(0);
    });
  });
});

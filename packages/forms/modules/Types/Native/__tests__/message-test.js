import React from 'react';
import ReactDOM from 'react-dom';
// import { act } from 'react-dom/test-utils';
import renderer, {act} from 'react-test-renderer';
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

describe('Message', () => {

  it('should display success a message', () => {
    const submit = jest.fn();
    submit.mockReturnValueOnce({});
    submit.mockReturnValueOnce({username: 'invalid'});

    const Component = () => <Form onSubmit={submit} initialValues={{ username: 'raymond' }}>
      <Text type={'text'} name={'username'} />
      <Message type={'success'}>This success message should show</Message>
      <Message type={'error'}>This error message should show</Message>
      <button type={'submit'}>do it</button>
    </Form>;

    act(() => {
      ReactDOM.render(<Component />, container);
    });

    const button = container.querySelector('button');

    // Run success message
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(submit).toHaveBeenCalledTimes(1);
    expect(submit).toHaveBeenCalledWith({username: 'raymond'}, expect.any(Object), expect.any(Function));
    expect(container.querySelector('div[class="message-success"]')).toBeTruthy();
    expect(container.querySelector('div[class="message-error"]')).toBeFalsy();

    // Run error message
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(submit).toHaveBeenCalledTimes(2);
    expect(submit).toHaveBeenCalledWith({username: 'raymond'}, expect.any(Object), expect.any(Function));
    expect(container.querySelector('div[class="message-success"]')).toBeFalsy();
    expect(container.querySelector('div[class="message-error"]')).toBeTruthy();
  });
});

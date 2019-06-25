import React from 'react';
import ReactDOM from 'react-dom';
import {
  act,
  Simulate
} from 'react-dom/test-utils';
import Form from '../../../Provider/Form';
import DropZone from '../DropZone';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('DropZone', () => {

  it('render', () => {
    const file = new File(['(⌐□_□)'], 'chucknorris.png', {
      type: 'text/csv',
      size: 1024
    });
    act(() => {
      const submit = jest.fn();

      const Component = () => <Form onSubmit={submit}>
      <DropZone placeholder={'dropzone'} name={'dropzone'} endPoint={{ path: '/api/upload' }} />
      <button type={'submit'}>do it</button>
    </Form>;

      ReactDOM.render(<Component />, container);
    });
    act(() => {
    const dropzone = container.querySelector('section');
    expect(dropzone).toBeTruthy();
    });
    act(() => {
    const fileInput = container.querySelector('input[type=file]');
    expect(fileInput).toBeTruthy();

    // input.files is a read-only property
    // so this is not allowed
    // input.files = [file]

    // But DOM properties are reconfigurable
    // I got this while reading through a related JSDOM Github issue
    // https://github.com/jsdom/jsdom/issues/1272#issuecomment-150670691
    act(() => {
      const cOU = global.URL.createObjectURL = jest.fn();
      cOU.mockReturnValueOnce('none');

      Object.defineProperty(fileInput, 'files', {
        value: [file],
      });
    });
    act(() => {
      Simulate.change(fileInput);
    });


    });
    // console.log(document.body.innerHTML);

  });
});

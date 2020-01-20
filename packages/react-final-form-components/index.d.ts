/// <reference types="node" />

import React from "react";

type ColRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface bootStrapSizes {
  xs?: ColRange;
  sm?: ColRange;
  md?: ColRange;
  lg?: ColRange;
}

interface DefaultInputProps {
  label: string;
  mandatory?: boolean;
  placeholder?: string;
  help?: string;
  addOn?: string;
  addOnBefore?: string;
  disabled?: () => boolean;
  name: string;
  readOnly?: boolean;
  children?: Element<any> | ReactElement<any>;
  layout?: {
    label?: bootStrapSizes;
    field?: bootStrapSizes;
  };
}

interface InputProps extends DefaultInputProps {
  type: string;
}

interface CheckboxProps extends DefaultInputProps {
  columns?: number;
}

interface FormProps {
  validate?: (values: any) => {};
  onSubmit: (values: any) => Promise;
  className?: string;
  initialValues?: {
    [propName: string]: any;
  };
  layout?: {
    label?: bootStrapSizes;
    field?: bootStrapSizes;
  };
}

interface Message {
  children: Element<any> | ReactElement<any>;
}

interface CustomInputProps extends DefaultInputProps {
  constrol?: bool;
}

interface ShowProps {
  condition: (values: any) => boolean;
  children: ReactChild;
}

interface ConsumerInterface<T> {
  (Component: React.ComponentType<T>): T;
}

interface ContextInterface<T, U> {
  (config?: T): {
    (Component: React.ComponentType<U>): U;
  };
}

declare module "react-final-form-components" {
  import React from "react";

  export const Input: React.FunctionComponent<InputProps>;
  export const Password: React.FunctionComponent<DefaultInputProps>;
  export const Error: React.FunctionComponent<Message>;
  export const Success: React.FunctionComponent<Message>;
  export const Form: React.FunctionComponent<FormProps>;
  export const Custom: React.FunctionComponent<CustomInputProps>;
  export const DropZone: React.FunctionComponent<DefaultInputProps>;
  export const Checkbox: React.FunctionComponent<CheckboxProps>;
  export const Radio: React.FunctionComponent<CheckboxProps>;
  export const Select: React.FunctionComponent<DefaultInputProps>;
  export const Show: React.FunctionComponent<ShowProps>;
  export const Textarea: React.FunctionComponent<TextareaProps>;
  export const consumer: ConsumerInterface<T>;
  export const context: ContextInterface<T, U>;
}

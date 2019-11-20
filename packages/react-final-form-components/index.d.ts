/// <reference types="node" />

type ColRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface bootStrapSizes {
  xs?: ColRange;
  sm?: ColRange;
  md?: ColRange;
  lg?: ColRange;
}

interface DefaultInputProps {
  label: string;
  placeholder?: string;
  help?: string;
  disabled?: () => boolean;
  name: string;
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
  columns: number;
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
  children: React.ReactElement;
}

declare module "react-final-form-components" {
  import React from "react";

  export const Input: React.FunctionComponent<InputProps>;
  export const Password: React.FunctionComponent<DefaultInputProps>;
  export const Error: React.FunctionComponent<Message>;
  export const Success: React.FunctionComponent<Message>;
  export const Form: React.FunctionComponent<FormProps>;
  export const Custom: React.FunctionComponent<DefaultInputProps>;
  export const DropZone: React.FunctionComponent<DefaultInputProps>;
  export const Checkbox: React.FunctionComponent<CheckboxProps>;
  export const Radio: React.FunctionComponent<CheckboxProps>;
  export const Select: React.FunctionComponent<DefaultInputProps>;
  export const Show: React.FunctionComponent<ShowProps>;
  export const Textarea: React.FunctionComponent<TextareaProps>;
}

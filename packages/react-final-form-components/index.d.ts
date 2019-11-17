/// <reference types="node" />

import { Textarea } from "react-final-form-components";

interface ShowProps {
  name: string;
  condition: (values: object) => boolean;
  children?: React.ReactElement;
}

interface DefaultInputProps {
  label: string;
  placeholder?: string;
  help?: string;
  name: string;
  disabled: (values: object) => boolean;
  children?: React.ReactElement;
}

interface TextareaProps extends DefaultProps {
  cols?: number;
  rows?: number;
}

interface InputProps extends DefaultInputProps {
  type: string;
}

type ColRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface bootStrapSizes {
  xs?: ColRange;
  sm?: ColRange;
  md?: ColRange;
  lg?: ColRange;
}

interface FormProps {
  validate?: (values: any) => boolean;
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

declare module "react-final-form-components" {
  import React from "react";

  export const Input: React.FunctionComponent<InputProps>;
  export const Password: React.FunctionComponent<DefaultInputProps>;
  export const Error: React.FunctionComponent<DefaultInputProps>;
  export const Success: React.FunctionComponent<DefaultInputProps>;
  export const Form: React.FunctionComponent<FormProps>;
  export const Custom: React.FunctionComponent<DefaultInputProps>;
  export const DropZone: React.FunctionComponent<DefaultInputProps>;
  export const Checkbox: React.FunctionComponent<DefaultInputProps>;
  export const Radio: React.FunctionComponent<DefaultInputProps>;
  export const Select: React.FunctionComponent<DefaultInputProps>;
  export const Show: React.FunctionComponent<ShowProps>;
  export const Textarea: React.FunctionComponent<TextareaProps>;
}

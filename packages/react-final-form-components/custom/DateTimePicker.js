import React from "react";
import DateTimePickerAlias from "react-datetime-picker";
import Custom from "../modules/Types/Custom";

export default function DateTime(props) {
  return (
    <Custom {...props}>{input => <DateTimePickerAlias {...input} />}</Custom>
  );
}

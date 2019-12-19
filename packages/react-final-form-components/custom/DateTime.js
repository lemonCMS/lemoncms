import React from "react";
import Dt from "react-datetime";
import Custom from "../modules/Types/Custom";

export default function DateTime(props) {
  return (
    <Custom {...props} control={false}>
      {({ input }) => <Dt {...input} />}
    </Custom>
  );
}

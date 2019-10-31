import React from "react";
import AppContext from "../Context/AppContext";

export default function Context(Component) {
  const TmpClass = props => {
    return (
      <AppContext.Consumer>
        {context => <Component context={context} {...props} />}
      </AppContext.Consumer>
    );
  };

  return TmpClass;
}

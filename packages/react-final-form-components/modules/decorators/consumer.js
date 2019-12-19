import React from "react";
import AppContext from "../Context/AppContext";

export default Component => {
  return props => {
    return (
      <AppContext.Consumer>
        {context => <Component context={context} {...props} />}
      </AppContext.Consumer>
    );
  };
};

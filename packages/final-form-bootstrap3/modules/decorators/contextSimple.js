import React from "react";
import PropTypes from "prop-types";
import AppContext from "../Context/AppContext";

export default function Context(conf) {
  return Component => {
    const TmpClass = props => {
      return (
        <AppContext.Consumer>
          {context => <Component {...props} context={context} />}
        </AppContext.Consumer>
      );
    };

    TmpClass.propTypes = {
      name: PropTypes.string.isRequired
    };

    return TmpClass;
  };
}

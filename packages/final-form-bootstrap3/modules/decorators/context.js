import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import AppContext from "../Context/AppContext";

export default function Context(conf) {
  return Component => {
    const TmpClass = props => {
      const fieldProps = {};
      if (conf && typeof conf.type !== "undefined") {
        fieldProps.type = conf.type;
      }

      return (
        <AppContext.Consumer>
          {context => (
            <Field
              name={props.name}
              render={({ input, meta }) => {
                const { type, ...allOther } = input;
                return (
                  <Component
                    input={allOther}
                    meta={meta}
                    context={context}
                    {...props}
                  />
                );
              }}
              {...fieldProps}
            />
          )}
        </AppContext.Consumer>
      );
    };

    TmpClass.propTypes = {
      name: PropTypes.string.isRequired
    };

    return TmpClass;
  };
}

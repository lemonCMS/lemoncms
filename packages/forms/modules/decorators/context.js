import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import AppContext from '../Context/AppContext';

export default function Context(Component) {
  const TmpClass = props => {
    return (
      <AppContext.Consumer>
        {context => (
          <Field
            name={props.name}
            render={({ input, meta }) => {
              const {type, ...allOther} = input;
              return (<Component input={allOther} meta={meta} context={context} {...props} />);
            }}
          />
        )}
      </AppContext.Consumer>
    );
  };

  TmpClass.propTypes = {
    name: PropTypes.string.isRequired
  };

  return TmpClass;
}

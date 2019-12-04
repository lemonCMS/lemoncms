import _extends from "@babel/runtime/helpers/esm/extends";
import React, { createContext, Component } from "react";
import PropTypes from "prop-types";
import { FormSpy, Form as Form$1, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import ReactDOMServer from "react-dom/server";
import memoize from "memoize-one";
import CheckboxAlias from "react-bootstrap/lib/Checkbox";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Clearfix,
  Alert
} from "react-bootstrap";
import InputGroup from "react-bootstrap/lib/InputGroup";
import ReactDropzone from "react-dropzone";
import RadioAlias from "react-bootstrap/lib/Radio";

const AppContext = createContext({});

class ContextWrapper extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.checkCondition = this.checkCondition.bind(this);
    this.getStatus = this.getStatus.bind(this);
    this.values = {};
  }

  getStatus() {
    const {
      dirty,
      dirtySinceLastSubmit,
      error,
      errors,
      invalid,
      pristine,
      submitError,
      submitErrors,
      submitFailed,
      submitSucceeded,
      submitting,
      valid,
      validating
    } = this.props;
    return {
      dirty,
      dirtySinceLastSubmit,
      error,
      errors,
      invalid,
      pristine,
      submitError,
      submitErrors,
      submitFailed,
      submitSucceeded,
      submitting,
      valid,
      validating
    };
  }

  checkCondition(args) {
    const { values } = this.props;
    return args(values);
  }

  render() {
    const { debug, children, listen, layout } = this.props;

    if (debug) {
      return React.createElement(
        AppContext.Provider,
        {
          value: {
            checkCondition: this.checkCondition,
            isStatic: this.props.static,
            // eslint-disable-line react/destructuring-assignment
            debug,
            layout,
            status: this.getStatus()
          }
        },
        children,
        React.createElement(
          FormSpy,
          {
            subscription: {
              values: true
            }
          },
          ({ values }) => {
            if (listen && typeof listen === 'function"') {
              listen(values);
            }

            return React.createElement(
              "pre",
              null,
              JSON.stringify(values, 0, 2)
            );
          }
        )
      );
    }

    return React.createElement(
      AppContext.Provider,
      {
        value: {
          checkCondition: this.checkCondition,
          isStatic: this.props.static,
          // eslint-disable-line react/destructuring-assignment
          debug,
          layout,
          status: this.getStatus()
        }
      },
      children,
      listen &&
        typeof listen === "function" &&
        React.createElement(FormSpy, {
          subscription: {
            values: true
          },
          onChange: props => {
            listen(props.values);
          }
        })
    );
  }
}
/* eslint react/require-default-props: 0 */

ContextWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  static: PropTypes.bool,
  // eslint-disable-line quote-props
  values: PropTypes.oneOfType([PropTypes.object]),
  debug: PropTypes.bool,
  dirty: PropTypes.bool,
  dirtySinceLastSubmit: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.object]),
  error: PropTypes.string,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  submitErrors: PropTypes.oneOfType([PropTypes.object]),
  submitFailed: PropTypes.bool,
  submitSucceeded: PropTypes.bool,
  submitting: PropTypes.bool,
  valid: PropTypes.bool,
  validating: PropTypes.bool,
  listen: PropTypes.func
};
ContextWrapper.defaultProps = {
  static: false,
  // eslint-disable-line quote-props
  debug: false
};

const Form = props => {
  const {
    children,
    className,
    debug,
    readOnly,
    listen,
    layout,
    ...formProps
  } = props;
  return React.createElement(
    Form$1,
    _extends({}, formProps, {
      mutators: { ...arrayMutators },
      render: ({ handleSubmit, ...rest }) => {
        return React.createElement(
          ContextWrapper,
          _extends({}, rest, {
            debug: debug,
            listen: listen,
            readOnly: readOnly,
            layout: layout
          }),
          React.createElement(
            "form",
            {
              onSubmit: handleSubmit,
              className: className
            },
            children
          )
        );
      }
    })
  );
};

Form.propTypes = {
  className: PropTypes.string,
  validate: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  debug: PropTypes.bool,
  readOnly: PropTypes.bool,
  listen: PropTypes.func,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  }),
  initialValues: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.object,
      PropTypes.bool
    ])
  )
};
Form.defaultProps = {
  className: "",
  validate: () => {},
  listen: () => {},
  debug: false,
  readOnly: false,
  initialValues: {},
  layout: {
    label: {
      sm: 4
    },
    field: {
      sm: 8
    }
  }
};

function Context(conf) {
  return Component => {
    const TmpClass = props => {
      const fieldProps = {};

      if (conf && typeof conf.type !== "undefined") {
        fieldProps.type = conf.type;
      }

      return React.createElement(AppContext.Consumer, null, context =>
        React.createElement(
          Field,
          _extends(
            {
              name: props.name,
              render: ({ input, meta }) => {
                const { type, ...allOther } = input;
                return React.createElement(
                  Component,
                  _extends(
                    {
                      input: allOther,
                      meta: meta,
                      context: context
                    },
                    props
                  )
                );
              }
            },
            fieldProps
          )
        )
      );
    };

    TmpClass.propTypes = {
      name: PropTypes.string.isRequired
    };
    return TmpClass;
  };
}

function fieldGroup(Component) {
  const WrappedComponent = props => {
    const {
      label,
      addOn,
      help,
      disabled,
      layout: inputLayout,
      context: { checkCondition, layout: contextLayout },
      meta: { submitError, submitFailed, invalid, error }
    } = props;
    const computedInvalid = submitFailed && invalid;
    const isDisabled = disabled && checkCondition(disabled);
    const layout = { ...contextLayout, ...inputLayout };

    const getComponent = () => {
      if (addOn === null) {
        return React.createElement(
          Component,
          _extends({}, props, {
            computedInvalid: computedInvalid,
            isDisabled: isDisabled
          })
        );
      }

      return React.createElement(
        InputGroup,
        null,
        React.createElement(
          Component,
          _extends({}, props, {
            computedInvalid: computedInvalid,
            isDisabled: isDisabled
          })
        ),
        typeof addOn === "string" &&
          React.createElement(InputGroup.addOn, null, addOn),
        typeof addOn !== "string" && addOn
      );
    };

    return React.createElement(
      FormGroup,
      {
        validationState: computedInvalid ? "error" : null
      },
      label &&
        React.createElement(
          Col,
          _extends(
            {
              componentClass: ControlLabel
            },
            layout.label
          ),
          label
        ),
      React.createElement(
        Col,
        layout.field,
        getComponent(),
        React.createElement(FormControl.Feedback, null),
        !computedInvalid && help && React.createElement(HelpBlock, null, help),
        computedInvalid && error && React.createElement(HelpBlock, null, error),
        computedInvalid &&
          submitError &&
          React.createElement(HelpBlock, null, submitError)
      ),
      React.createElement(Clearfix, null)
    );
  };

  WrappedComponent.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    addOn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    help: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.func,
    formGroup: PropTypes.string,
    formLabel: PropTypes.string,
    formError: PropTypes.string,
    formText: PropTypes.string,
    layout: PropTypes.shape({
      label: PropTypes.object,
      field: PropTypes.object
    }),
    meta: PropTypes.shape({
      submitFailed: PropTypes.bool.isRequired,
      invalid: PropTypes.bool.isRequired,
      error: PropTypes.string
    }).isRequired,
    context: PropTypes.shape({
      checkCondition: PropTypes.func,
      layout: PropTypes.shape({
        label: PropTypes.object,
        field: PropTypes.object
      })
    }).isRequired
  };
  WrappedComponent.defaultProps = {
    label: null,
    addOn: null,
    text: null,
    type: null,
    formGroup: null,
    formLabel: null,
    formError: null,
    formText: null,
    disabled: null,
    layout: {
      label: {
        sm: 4
      },
      field: {
        sm: 8
      }
    },
    context: {
      layout: {
        label: {
          sm: 4
        },
        field: {
          sm: 8
        }
      }
    }
  };
  return WrappedComponent;
}

const Filter = ({
  handleChange,
  placeholderFilter,
  filterText,
  clearFilterText,
  isDisabled
}) => {
  return React.createElement(
    "div",
    {
      className: "input-group"
    },
    React.createElement("input", {
      placeholder: placeholderFilter,
      className: "form-control",
      type: "text",
      onChange: handleChange,
      value: filterText,
      disabled: isDisabled
    }),
    React.createElement(
      "span",
      {
        className: "input-group-btn"
      },
      React.createElement(
        "button",
        {
          disabled: !filterText || isDisabled,
          className: "btn btn-default",
          type: "button",
          onClick: clearFilterText
        },
        "x"
      )
    )
  );
};

Filter.propTypes = {
  filterText: PropTypes.string.isRequired,
  placeholderFilter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  clearFilterText: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
};

class Checkbox extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      values: [],
      filterText: ""
    };

    this.emit = (event, checkboxValue, single = false) => {
      const {
        input: { onChange, value }
      } = this.props;

      if (single) {
        // Single checkbox
        if (event.target.checked) {
          // Set the value from the checkbox
          onChange(checkboxValue);
          return;
        } // Remove value

        onChange("");
        return;
      }

      const clone = [...value].filter(filter => filter); // make a shallow clone
      // Multiple checkboxes

      if (event.target.checked) {
        // See if item is already in the value array, if so ignore it.
        if (clone.indexOf(checkboxValue) > -1) {
          return;
        } // Value does not exist, set it

        clone.push(checkboxValue);
        onChange(clone);
        return true;
      } // Remove value
      // If it does not exist, ignore it

      if (clone.indexOf(checkboxValue) === -1) {
        return;
      } // the value exists and need te be removed.

      clone.splice(clone.indexOf(checkboxValue), 1);
      onChange(clone);
    };

    this.filtered = memoize((list, filterText) => {
      return list.filter(item => {
        if (!filterText && item.type !== "option") {
          return true;
        }

        if (typeof item.props.children === "string") {
          return (
            item.props &&
            item.type === "option" &&
            item.props.children.includes(filterText)
          );
        }

        return ReactDOMServer.renderToString(item.props.children).includes(
          filterText
        );
      });
    });

    this.handleChange = event => {
      this.setState({
        filterText: event.target.value
      });
    };

    this.clearFilterText = event => {
      this.setState({
        filterText: ""
      });
    };

    this.createCheckBoxes = children => {
      const { columns, filter, input, isDisabled } = this.props;

      if (
        children &&
        Array.isArray(children) &&
        React.isValidElement(children[0]) &&
        children[0].type === "option"
      ) {
        const list = children.map(option => {
          if (option.type !== "option") {
            return option;
          }

          const { value, children } = option.props;
          return React.createElement(
            CheckboxAlias,
            {
              key: value,
              disabled: isDisabled,
              checked: input.value.indexOf(value) > -1,
              onChange: event => {
                this.emit(event, value);
              }
            },
            children
          );
        });

        if (columns === 1) {
          return list;
        }

        const itemsPerColumn = Math.ceil(list.length / columns); // create new array of length with undefined values

        const cols = Array.apply(null, Array(columns)).map(() => {});
        const display = cols.map((col, index) => {
          const start = index * itemsPerColumn;
          const end = start + itemsPerColumn;
          return React.createElement(
            Col,
            {
              sm: Math.round(12 / columns),
              key: index
            },
            list.slice(start, end)
          );
        });
        return React.createElement(Row, null, display);
      } // Filtered returned nothing

      if (filter) {
        return React.createElement("div", null, "No results");
      }

      return React.createElement(
        CheckboxAlias,
        {
          checked: input.value,
          disabled: isDisabled,
          onChange: event => {
            this.emit(event, true, true);
          }
        },
        children
      );
    };
  }

  componentDidMount() {
    const {
      input: { value }
    } = this.props;

    if (typeof value !== "undefined") {
      this.setState({
        values: value
      });
    }
  }

  render() {
    const { filter, placeholderFilter, children, isDisabled } = this.props;
    const { filterText } = this.state;

    if (filter) {
      const filteredList = this.filtered(children, this.state.filterText);
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(Filter, {
          isDisabled: isDisabled,
          filterText: filterText,
          clearFilterText: this.clearFilterText,
          handleChange: this.handleChange,
          placeholderFilter: placeholderFilter
        }),
        this.createCheckBoxes(filteredList)
      );
    }

    return React.createElement(
      React.Fragment,
      null,
      this.createCheckBoxes(children)
    );
  }
}

Checkbox.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.array
    ])
  }),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    PropTypes.element
  ]),
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  placeholderFilter: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  columns: PropTypes.number,
  filter: PropTypes.bool,
  computedInvalid: PropTypes.bool.isRequired,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};
Checkbox.defaultProps = {
  input: {},
  children: [],
  label: null,
  help: null,
  columns: 1,
  filter: false,
  placeholderFilter: "Filter",
  disabled: null,
  isDisabled: false,
  layout: null
};
var Checkbox$1 = Context()(fieldGroup(Checkbox));

const Custom = props => {
  const { control, input, isDisabled, children } = props;

  if (control) {
    return React.createElement(
      FormControl,
      _extends({}, input, {
        componentClass: children,
        disabled: isDisabled
      })
    );
  }

  return children(input, isDisabled);
};

Custom.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.any
  }),
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  children: PropTypes.func,
  control: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};
Custom.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null,
  control: true,
  disabled: null,
  isDisabled: false,
  layout: null
};
var Custom$1 = Context()(fieldGroup(Custom));

class FileUpload extends React.Component {
  constructor(...args) {
    super(...args);
    this.progressElem = null;
    this.state = {
      hasError: null,
      isUploading: false
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true
    };
  }

  componentWillUnmount() {
    const { preview } = this.state;

    if (typeof preview === "string") {
      URL.revokeObjectURL(preview);
    }
  }

  componentDidMount() {
    const { file } = this.props;

    if (file.type.includes("image/")) {
      this.setState({
        preview: URL.createObjectURL(file)
      });
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error(errorInfo);
  }

  fileSize(bytes, si) {
    const thresh = si ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
      return bytes + " B";
    }

    const units = si
      ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
      : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    let u = -1;

    do {
      bytes /= thresh;
      ++u;
    } while (Math.abs(bytes) >= thresh && u < units.length - 1);

    return bytes.toFixed(1) + " " + units[u];
  }

  render() {
    const { file, removeFromStack } = this.props;
    const { hasError, preview } = this.state;

    if (hasError) {
      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          {
            colSpan: 4
          },
          React.createElement(
            "div",
            {
              className: "file-upload-error"
            },
            "There was an error, try again or contact the site owner."
          )
        )
      );
    }

    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        {
          className: "file-upload-name"
        },
        typeof preview === "string" &&
          React.createElement("img", {
            src: preview,
            alt: file.name,
            className: "img-thumbnail",
            style: {
              maxWidth: "80px"
            }
          })
      ),
      React.createElement(
        "td",
        null,
        file.name,
        "(",
        this.fileSize(file.size),
        ")"
      ),
      React.createElement(
        "td",
        {
          className: "file-upload-delete"
        },
        React.createElement(
          "button",
          {
            className: "file-upload-delete-button",
            type: "button",
            onClick: () => {
              removeFromStack(file);
            }
          },
          "x"
        )
      )
    );
  }
}

FileUpload.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  endPoint: PropTypes.shape({
    path: PropTypes.string.isRequired,
    headers: PropTypes.shape({})
  }),
  removeFromStack: PropTypes.func.isRequired
};
FileUpload.defaultProps = {
  endPoint: {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }
};

class Dropzone extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      queue: [],
      formData: [],
      upload: false
    };

    this.toBase64 = file =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = error => reject(error);
      });

    this.filesFromClient = files => {
      files.forEach(file => {
        this.toBase64(file).then(data => {
          this.addData(file, data);
        });
      });
    };

    this.removeFromStack = fileToDelete => {
      const { queue, formData } = this.state;
      const {
        input: { onChange }
      } = this.props;
      const filtered = queue.filter(file => file.name !== fileToDelete.name);
      const filteredFormData = formData.filter(
        file => file.name !== fileToDelete.name
      );
      onChange(filteredFormData);
      this.setState({
        queue: filtered,
        formData: filteredFormData
      });
    };

    this.displayFiles = () => {
      const { queue, upload } = this.state;
      const { endPoint, autoUpload } = this.props;

      if (queue.length === 0) {
        return null;
      }

      const list = queue.map((file, index) =>
        React.createElement(FileUpload, {
          key: `${file.name}`,
          file: file,
          removeFromStack: this.removeFromStack,
          endPoint: endPoint,
          upload: autoUpload || upload
        })
      );
      return React.createElement(
        "table",
        {
          className: "table"
        },
        React.createElement("tbody", null, list)
      );
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { queue } = this.state;
    return queue !== nextState.queue;
  }

  addData(file, data) {
    const {
      input: { onChange }
    } = this.props;
    const { formData, queue } = this.state;
    const { name, type, size } = file;
    const tmpQueue = [...queue];
    const tmpFormData = [...formData];
    tmpFormData.push({
      name,
      type,
      size,
      data
    });
    tmpQueue.push(file);
    this.setState(
      {
        queue: tmpQueue,
        formData: tmpFormData
      },
      () => {
        onChange(tmpFormData);
      }
    );
  }

  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        ReactDropzone,
        {
          onDrop: this.filesFromClient
        },
        ({ getRootProps, getInputProps }) =>
          React.createElement(
            "section",
            {
              className: "file-upload-dropzone"
            },
            React.createElement(
              "div",
              getRootProps(),
              React.createElement("input", getInputProps()),
              React.createElement(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary"
                },
                "select files..."
              )
            )
          )
      ),
      this.displayFiles()
    );
  }
}

Dropzone.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};
Dropzone.defaultProps = {
  input: {},
  placeholder: null,
  formControl: null,
  disabled: null,
  isDisabled: false,
  layout: null
};
var Dropzone$1 = Context()(fieldGroup(Dropzone));

const Password = props => {
  const { input, isDisabled } = props;
  return React.createElement(
    FormControl,
    _extends({}, input, {
      type: "password",
      disabled: isDisabled
    })
  );
};

Password.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number
    ])
  }),
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};
Password.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null,
  disabled: null,
  isDisabled: false,
  layout: null
};
var Password$1 = Context()(fieldGroup(Password));

class Radio extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      values: [],
      filterText: ""
    };

    this.emit = (event, radioValue) => {
      const {
        input: { onChange }
      } = this.props;
      onChange(radioValue);
    };

    this.filtered = memoize((list, filterText) => {
      return list.filter(item => {
        if (!filterText || item.type !== "option") {
          return true;
        }

        if (typeof item.props.children === "string") {
          return (
            item.props &&
            item.type === "option" &&
            item.props.children.includes(filterText)
          );
        }

        return ReactDOMServer.renderToString(item.props.children).includes(
          filterText
        );
      });
    });

    this.handleChange = event => {
      this.setState({
        filterText: event.target.value
      });
    };

    this.clearFilterText = event => {
      this.setState({
        filterText: ""
      });
    };

    this.createRadios = children => {
      const { columns, filter, input, isDisabled } = this.props;

      if (
        children &&
        Array.isArray(children) &&
        React.isValidElement(children[0]) &&
        children[0].type === "option"
      ) {
        const list = children.map(option => {
          if (option.type !== "option") {
            return option;
          }

          const { value, children } = option.props;
          return React.createElement(
            RadioAlias,
            {
              key: value,
              disabled: isDisabled,
              checked: input.value === value,
              onChange: event => {
                this.emit(event, value);
              }
            },
            children
          );
        });

        if (columns === 1) {
          return list;
        }

        const itemsPerColumn = Math.ceil(list.length / columns); // create new array of length with undefined values

        const cols = Array.apply(null, Array(columns)).map(() => {});
        const display = cols.map((col, index) => {
          const start = index * itemsPerColumn;
          const end = start + itemsPerColumn;
          return React.createElement(
            Col,
            {
              sm: Math.round(12 / columns),
              key: index
            },
            list.slice(start, end)
          );
        });
        return React.createElement(Row, null, display);
      } // Filtered returned nothing

      if (filter) {
        return React.createElement("div", null, "No results");
      }

      return React.createElement(
        RadioAlias,
        {
          checked: input.value,
          disabled: isDisabled,
          onChange: event => {
            this.emit(event, true, true);
          }
        },
        children
      );
    };
  }

  componentDidMount() {
    const {
      input: { value }
    } = this.props;

    if (typeof value !== "undefined") {
      this.setState({
        values: value
      });
    }
  }

  render() {
    const { filter, placeholderFilter, children, isDisabled } = this.props;
    const { filterText } = this.state;

    if (filter) {
      const filteredList = this.filtered(children, this.state.filterText);
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(Filter, {
          filterText: filterText,
          clearFilterText: this.clearFilterText,
          handleChange: this.handleChange,
          placeholderFilter: placeholderFilter,
          isDisabled: isDisabled
        }),
        this.createRadios(filteredList)
      );
    }

    return React.createElement(
      React.Fragment,
      null,
      this.createRadios(children)
    );
  }
}

Radio.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.array
    ])
  }),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    PropTypes.element
  ]),
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  placeholderFilter: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  columns: PropTypes.number,
  filter: PropTypes.bool,
  computedInvalid: PropTypes.bool.isRequired,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};
Radio.defaultProps = {
  input: {},
  children: [],
  label: null,
  help: null,
  columns: 1,
  filter: false,
  placeholderFilter: "Filter",
  disabled: null,
  isDisabled: false,
  layout: null
};
var Radio$1 = Context()(fieldGroup(Radio));

const Select = props => {
  const { input, children, isDisabled, multiple } = props;
  return React.createElement(
    FormControl,
    _extends({}, input, {
      componentClass: "select",
      disabled: isDisabled,
      multiple: multiple
    }),
    children
  );
};

Select.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.array
    ])
  }),
  children: PropTypes.node.isRequired,
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  multiple: PropTypes.bool,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};
Select.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null,
  multiple: false,
  disabled: null,
  isDisabled: false,
  layout: null
};
var Select$1 = Context({
  type: "select"
})(fieldGroup(Select));

const Show = ({ condition, children, context: { checkCondition } }) => {
  if (condition && typeof condition === "function") {
    if (checkCondition(condition) !== true) {
      return null;
    }

    return children;
  }
};

Show.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
  hidden: PropTypes.func,
  condition: PropTypes.func
};
var Show$1 = Context()(Show);

const Input = props => {
  const { input, type, isDisabled, placeholder, readonly } = props;
  return React.createElement(
    FormControl,
    _extends({}, input, {
      type: type,
      disabled: isDisabled,
      placeholder: placeholder,
      readonly: readonly
    })
  );
};

Input.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number
    ])
  }),
  disabled: PropTypes.func,
  readonly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  addOn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  type: PropTypes.oneOf([
    "text",
    "email",
    "date",
    "datetime-local",
    "checkbox"
  ]),
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};
Input.defaultProps = {
  input: {},
  label: null,
  help: null,
  addOn: null,
  placeholder: null,
  type: "text",
  disabled: null,
  readonly: false,
  isDisabled: false,
  layout: null
};
var Input$1 = Context()(fieldGroup(Input));

function Context$1(Component) {
  const TmpClass = props => {
    return React.createElement(AppContext.Consumer, null, context =>
      React.createElement(
        Component,
        _extends(
          {
            context: context
          },
          props
        )
      )
    );
  };

  return TmpClass;
}

const Error = props => {
  const {
    children,
    context: {
      status: { submitFailed, submitError, error }
    }
  } = props;

  if (!submitFailed) {
    return null;
  }

  return React.createElement(
    Alert,
    {
      bsStyle: "danger"
    },
    children,
    React.createElement("div", null, error, submitError)
  );
};

var _Error = Context$1(Error);

const Success = props => {
  const {
    children,
    context: {
      status: { submitSucceeded }
    }
  } = props;

  if (!submitSucceeded) {
    return null;
  }

  return React.createElement(
    Alert,
    {
      bsStyle: "success"
    },
    children
  );
};

var Success$1 = Context$1(Success);

const Textarea = props => {
  const { input, type, isDisabled, rows, cols } = props;
  return React.createElement(
    FormControl,
    _extends(
      {
        componentClass: "textarea"
      },
      input,
      {
        type: type,
        rows: rows,
        cols: cols,
        disabled: isDisabled
      }
    )
  );
};

Textarea.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number
    ])
  }),
  rows: PropTypes.number,
  cols: PropTypes.number,
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  addOn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};
Textarea.defaultProps = {
  input: {},
  label: null,
  help: null,
  addOn: null,
  rows: null,
  cols: null,
  placeholder: null,
  type: "text",
  disabled: null,
  isDisabled: false,
  layout: null
};
var Textarea$1 = Context()(fieldGroup(Textarea));

export {
  Checkbox$1 as Checkbox,
  Custom$1 as Custom,
  Dropzone$1 as Dropzone,
  _Error as Error,
  Form,
  Input$1 as Input,
  Password$1 as Password,
  Radio$1 as Radio,
  Select$1 as Select,
  Show$1 as Show,
  Success$1 as Success,
  Textarea$1 as Textarea
};
//# sourceMappingURL=react-final-form-components.js.map

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var React = require("react");
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require("prop-types"));
var reactFinalForm = require("react-final-form");
var arrayMutators = _interopDefault(require("final-form-arrays"));
var ReactDOMServer = _interopDefault(require("react-dom/server"));
var memoize = _interopDefault(require("memoize-one"));
var CheckboxAlias = _interopDefault(require("react-bootstrap/lib/Checkbox"));
var Col = _interopDefault(require("react-bootstrap/lib/Col"));
var Row = _interopDefault(require("react-bootstrap/lib/Row"));
var reactBootstrap = require("react-bootstrap");
var InputGroup = _interopDefault(require("react-bootstrap/lib/InputGroup"));
var Dropzone = _interopDefault(require("react-dropzone"));
var RadioAlias = _interopDefault(require("react-bootstrap/lib/Radio"));

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

const AppContext = React.createContext({});

class ContextWrapper extends React__default.Component {
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
      return React__default.createElement(
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
        React__default.createElement(
          reactFinalForm.FormSpy,
          {
            subscription: {
              values: true
            }
          },
          ({ values }) => {
            if (listen && typeof listen === 'function"') {
              listen(values);
            }

            return React__default.createElement(
              "pre",
              null,
              JSON.stringify(values, 0, 2)
            );
          }
        )
      );
    }

    return React__default.createElement(
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
        React__default.createElement(reactFinalForm.FormSpy, {
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
  error: PropTypes.bool,
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
  return React__default.createElement(
    reactFinalForm.Form,
    _extends({}, formProps, {
      mutators: { ...arrayMutators },
      render: ({ handleSubmit, ...rest }) => {
        return React__default.createElement(
          ContextWrapper,
          _extends({}, rest, {
            debug: debug,
            listen: listen,
            readOnly: readOnly,
            layout: layout
          }),
          React__default.createElement(
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

      return React__default.createElement(AppContext.Consumer, null, context =>
        React__default.createElement(
          reactFinalForm.Field,
          _extends(
            {
              name: props.name,
              render: ({ input, meta }) => {
                const { type, ...allOther } = input;
                return React__default.createElement(
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
      addon,
      help,
      disabled,
      context: { checkCondition, layout },
      meta: { submitError, submitFailed, invalid, error }
    } = props;
    const computedInvalid = submitFailed && invalid;
    const isDisabled = disabled && checkCondition(disabled);

    const getComponent = () => {
      if (addon === null) {
        return React__default.createElement(
          Component,
          _extends({}, props, {
            computedInvalid: computedInvalid,
            isDisabled: isDisabled
          })
        );
      }

      return React__default.createElement(
        InputGroup,
        null,
        React__default.createElement(
          Component,
          _extends({}, props, {
            computedInvalid: computedInvalid,
            isDisabled: isDisabled
          })
        ),
        typeof addon === "string" &&
          React__default.createElement(InputGroup.Addon, null, addon),
        typeof addon !== "string" && addon
      );
    };

    return React__default.createElement(
      reactBootstrap.FormGroup,
      {
        validationState: computedInvalid ? "error" : null
      },
      label &&
        React__default.createElement(
          Col,
          _extends(
            {
              componentClass: reactBootstrap.ControlLabel
            },
            layout.label
          ),
          label
        ),
      React__default.createElement(
        Col,
        layout.field,
        getComponent(),
        React__default.createElement(reactBootstrap.FormControl.Feedback, null),
        !computedInvalid &&
          help &&
          React__default.createElement(reactBootstrap.HelpBlock, null, help),
        computedInvalid &&
          error &&
          React__default.createElement(reactBootstrap.HelpBlock, null, error),
        computedInvalid &&
          submitError &&
          React__default.createElement(
            reactBootstrap.HelpBlock,
            null,
            submitError
          )
      ),
      React__default.createElement(reactBootstrap.Clearfix, null)
    );
  };

  WrappedComponent.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    addon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    help: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.func,
    formGroup: PropTypes.string,
    formLabel: PropTypes.string,
    formError: PropTypes.string,
    formText: PropTypes.string,
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
    addon: null,
    text: null,
    type: null,
    formGroup: null,
    formLabel: null,
    formError: null,
    formText: null,
    disabled: null,
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
  return React__default.createElement(
    "div",
    {
      className: "input-group"
    },
    React__default.createElement("input", {
      placeholder: placeholderFilter,
      className: "form-control",
      type: "text",
      onChange: handleChange,
      value: filterText,
      disabled: isDisabled
    }),
    React__default.createElement(
      "span",
      {
        className: "input-group-btn"
      },
      React__default.createElement(
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

class Checkbox extends React.Component {
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
        React__default.isValidElement(children[0]) &&
        children[0].type === "option"
      ) {
        const list = children.map(option => {
          if (option.type !== "option") {
            return option;
          }

          const { value, children } = option.props;
          return React__default.createElement(
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
          return React__default.createElement(
            Col,
            {
              sm: Math.round(12 / columns),
              key: index
            },
            list.slice(start, end)
          );
        });
        return React__default.createElement(Row, null, display);
      } // Filtered returned nothing

      if (filter) {
        return React__default.createElement("div", null, "No results");
      }

      return React__default.createElement(
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
      return React__default.createElement(
        React__default.Fragment,
        null,
        React__default.createElement(Filter, {
          isDisabled: isDisabled,
          filterText: filterText,
          clearFilterText: this.clearFilterText,
          handleChange: this.handleChange,
          placeholderFilter: placeholderFilter
        }),
        this.createCheckBoxes(filteredList)
      );
    }

    return React__default.createElement(
      React__default.Fragment,
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
  computedInvalid: PropTypes.bool.isRequired
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
  isDisabled: false
};
var Checkbox$1 = Context()(fieldGroup(Checkbox));

const Custom = props => {
  const { control, input, isDisabled, children } = props;

  if (control) {
    return React__default.createElement(
      reactBootstrap.FormControl,
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
  computedInvalid: PropTypes.bool.isRequired
};
Custom.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null,
  control: true,
  disabled: null,
  isDisabled: false
};
var Custom$1 = Context()(fieldGroup(Custom));

class FileUpload extends React__default.Component {
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
      return React__default.createElement(
        "tr",
        null,
        React__default.createElement(
          "td",
          {
            colSpan: 4
          },
          React__default.createElement(
            "div",
            {
              className: "file-upload-error"
            },
            "There was an error, try again or contact the site owner."
          )
        )
      );
    }

    return React__default.createElement(
      "tr",
      null,
      React__default.createElement(
        "td",
        {
          className: "file-upload-name"
        },
        typeof preview === "string" &&
          React__default.createElement("img", {
            src: preview,
            alt: file.name,
            className: "img-thumbnail",
            style: {
              maxWidth: "80px"
            }
          })
      ),
      React__default.createElement(
        "td",
        null,
        file.name,
        "(",
        this.fileSize(file.size),
        ")"
      ),
      React__default.createElement(
        "td",
        {
          className: "file-upload-delete"
        },
        React__default.createElement(
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
  removeFromStack: PropTypes.func.isRequired,
  addOnStack: PropTypes.func.isRequired
};
FileUpload.defaultProps = {
  endPoint: {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }
};

class DropZone extends React__default.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      queue: [],
      upload: false
    };

    this.filesFromClient = files => {
      const { queue } = this.state;
      const {
        input: { onChange }
      } = this.props;
      const tmpQueue = [...queue];
      files.forEach(file => {
        // file.preview = URL.createObjectURL(file);
        tmpQueue.push(file);
      });
      this.setState({
        queue: tmpQueue
      });
      onChange(tmpQueue);
    };

    this.removeFromStack = fileToDelete => {
      const { queue } = this.state;
      const { input } = this.props;
      const filtered = queue.filter(file => file.name !== fileToDelete.name);
      input.onChange(filtered);
      this.setState({
        queue: filtered
      });
    };

    this.displayFiles = () => {
      const { queue, upload } = this.state;
      const { endPoint, autoUpload } = this.props;

      if (queue.length === 0) {
        return null;
      }

      const list = queue.map((file, index) =>
        React__default.createElement(FileUpload, {
          key: `${file.name}-${index}`,
          file: file,
          removeFromStack: this.removeFromStack,
          endPoint: endPoint,
          upload: autoUpload || upload
        })
      );
      return React__default.createElement(
        "table",
        {
          className: "table"
        },
        React__default.createElement("tbody", null, list)
      );
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { queue } = this.state;
    return queue !== nextState.queue;
  }

  render() {
    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement(
        Dropzone,
        {
          onDrop: this.filesFromClient
        },
        ({ getRootProps, getInputProps }) =>
          React__default.createElement(
            "section",
            {
              className: "file-upload-dropzone"
            },
            React__default.createElement(
              "div",
              getRootProps(),
              React__default.createElement("input", getInputProps()),
              React__default.createElement(
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

DropZone.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  endPoint: PropTypes.shape({
    path: PropTypes.string.isRequired,
    headers: PropTypes.shape({})
  }).isRequired,
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};
DropZone.defaultProps = {
  input: {},
  placeholder: null,
  formControl: null,
  autoUpload: false,
  disabled: null,
  isDisabled: false
};
var DropZone$1 = Context()(fieldGroup(DropZone));

const Password = props => {
  const { input, isDisabled } = props;
  return React__default.createElement(
    reactBootstrap.FormControl,
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
  computedInvalid: PropTypes.bool.isRequired
};
Password.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null,
  disabled: null,
  isDisabled: false
};
var Password$1 = Context()(fieldGroup(Password));

class Radio extends React.Component {
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
        React__default.isValidElement(children[0]) &&
        children[0].type === "option"
      ) {
        const list = children.map(option => {
          if (option.type !== "option") {
            return option;
          }

          const { value, children } = option.props;
          return React__default.createElement(
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
          return React__default.createElement(
            Col,
            {
              sm: Math.round(12 / columns),
              key: index
            },
            list.slice(start, end)
          );
        });
        return React__default.createElement(Row, null, display);
      } // Filtered returned nothing

      if (filter) {
        return React__default.createElement("div", null, "No results");
      }

      return React__default.createElement(
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
      return React__default.createElement(
        React__default.Fragment,
        null,
        React__default.createElement(Filter, {
          filterText: filterText,
          clearFilterText: this.clearFilterText,
          handleChange: this.handleChange,
          placeholderFilter: placeholderFilter,
          isDisabled: isDisabled
        }),
        this.createRadios(filteredList)
      );
    }

    return React__default.createElement(
      React__default.Fragment,
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
  computedInvalid: PropTypes.bool.isRequired
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
  isDisabled: false
};
var Radio$1 = Context()(fieldGroup(Radio));

const Select = props => {
  const { input, children, isDisabled, multiple } = props;
  return React__default.createElement(
    reactBootstrap.FormControl,
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  multiple: PropTypes.bool
};
Select.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null,
  multiple: false,
  disabled: null,
  isDisabled: false
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
  const { input, type, isDisabled } = props;
  return React__default.createElement(
    reactBootstrap.FormControl,
    _extends({}, input, {
      type: type,
      disabled: isDisabled
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
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  addon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["text", "email", "date", "datetime-local", "checkbox"])
};
Input.defaultProps = {
  input: {},
  label: null,
  help: null,
  addon: null,
  placeholder: null,
  type: "text",
  disabled: null,
  isDisabled: false
};
var Input$1 = Context()(fieldGroup(Input));

function Context$1(Component) {
  const TmpClass = props => {
    return React__default.createElement(AppContext.Consumer, null, context =>
      React__default.createElement(
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
      status: { submitFailed, submitError }
    }
  } = props;

  if (!submitFailed) {
    return null;
  }

  return React__default.createElement(
    reactBootstrap.Alert,
    {
      bsStyle: "danger"
    },
    children,
    React__default.createElement("div", null, submitError)
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

  return React__default.createElement(
    reactBootstrap.Alert,
    {
      bsStyle: "success"
    },
    children
  );
};

var Success$1 = Context$1(Success);

exports.Checkbox = Checkbox$1;
exports.Custom = Custom$1;
exports.DropZone = DropZone$1;
exports.Error = _Error;
exports.Form = Form;
exports.Input = Input$1;
exports.Password = Password$1;
exports.Radio = Radio$1;
exports.Select = Select$1;
exports.Show = Show$1;
exports.Success = Success$1;

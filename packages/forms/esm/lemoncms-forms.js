import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { createContext } from "react";
import PropTypes from "prop-types";
import { FormSpy, Form as Form$1, Field } from "react-final-form";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _isFunction from "lodash/isFunction";
import classNames from "classnames";
import Dropzone from "react-dropzone";
import axios from "axios";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap-v3";

var AppContext = createContext({});

var ContextWrapper =
  /*#__PURE__*/
  (function(_React$Component) {
    _inheritsLoose(ContextWrapper, _React$Component);

    function ContextWrapper(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      _this.checkCondition = _this.checkCondition.bind(
        _assertThisInitialized(_this)
      );
      _this.getStatus = _this.getStatus.bind(_assertThisInitialized(_this));
      _this.values = {};
      return _this;
    }

    var _proto = ContextWrapper.prototype;

    _proto.getStatus = function getStatus() {
      var _this$props = this.props,
        dirty = _this$props.dirty,
        dirtySinceLastSubmit = _this$props.dirtySinceLastSubmit,
        error = _this$props.error,
        errors = _this$props.errors,
        invalid = _this$props.invalid,
        pristine = _this$props.pristine,
        submitError = _this$props.submitError,
        submitErrors = _this$props.submitErrors,
        submitFailed = _this$props.submitFailed,
        submitSucceeded = _this$props.submitSucceeded,
        submitting = _this$props.submitting,
        valid = _this$props.valid,
        validating = _this$props.validating;
      return {
        dirty: dirty,
        dirtySinceLastSubmit: dirtySinceLastSubmit,
        error: error,
        errors: errors,
        invalid: invalid,
        pristine: pristine,
        submitError: submitError,
        submitErrors: submitErrors,
        submitFailed: submitFailed,
        submitSucceeded: submitSucceeded,
        submitting: submitting,
        valid: valid,
        validating: validating
      };
    };

    _proto.checkCondition = function checkCondition(args) {
      var values = this.props.values;
      return args(values);
    };

    _proto.render = function render() {
      var _this$props2 = this.props,
        debug = _this$props2.debug,
        children = _this$props2.children,
        listen = _this$props2.listen;

      if (debug) {
        return React.createElement(
          AppContext.Provider,
          {
            value: {
              checkCondition: this.checkCondition,
              isStatic: this.props.static,
              // eslint-disable-line react/destructuring-assignment
              debug: debug,
              status: this.getStatus()
            }
          },
          children
        );
      }

      return React.createElement(
        AppContext.Provider,
        {
          value: {
            checkCondition: this.checkCondition,
            isStatic: this.props.static,
            // eslint-disable-line react/destructuring-assignment
            debug: debug,
            status: this.getStatus()
          }
        },
        children,
        listen &&
          _isFunction(listen) &&
          React.createElement(FormSpy, {
            subscription: {
              values: true
            },
            onChange: function onChange(props) {
              listen(props.values);
            }
          })
      );
    };

    return ContextWrapper;
  })(React.Component);
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
  submitError: PropTypes.bool,
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

var Form = function Form(props) {
  var children = props.children,
    className = props.className,
    debug = props.debug,
    listen = props.listen,
    formProps = _objectWithoutPropertiesLoose(props, [
      "children",
      "className",
      "debug",
      "listen"
    ]);

  return React.createElement(
    Form$1,
    _extends({}, formProps, {
      render: function render(_ref) {
        var handleSubmit = _ref.handleSubmit,
          rest = _objectWithoutPropertiesLoose(_ref, ["handleSubmit"]);

        return React.createElement(
          ContextWrapper,
          _extends({}, rest, {
            debug: debug,
            listen: listen
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
  listen: PropTypes.func,
  initialValues: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.object
    ])
  )
};
Form.defaultProps = {
  className: "",
  validate: function validate() {},
  listen: function listen() {},
  debug: false,
  initialValues: {}
};

function Context(Component) {
  var TmpClass = function TmpClass(props) {
    return React.createElement(AppContext.Consumer, null, function(context) {
      return React.createElement(Field, {
        name: props.name,
        render: function render(_ref) {
          var input = _ref.input,
            meta = _ref.meta;

          var type = input.type,
            allOther = _objectWithoutPropertiesLoose(input, ["type"]);

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
      });
    });
  };

  TmpClass.propTypes = {
    name: PropTypes.string.isRequired
  };
  return TmpClass;
}

function Context$1(Component) {
  var TmpClass = function TmpClass(props) {
    var label = props.label,
      name = props.name,
      text = props.text,
      disabled = props.disabled,
      formGroup = props.formGroup,
      formLabel = props.formLabel,
      formError = props.formError,
      formText = props.formText,
      checkCondition = props.context.checkCondition,
      _props$meta = props.meta,
      submitFailed = _props$meta.submitFailed,
      invalid = _props$meta.invalid,
      error = _props$meta.error;
    var computedInvalid = submitFailed && invalid;
    var isDisabled = disabled && checkCondition(disabled);
    var showText =
      !computedInvalid &&
      text &&
      React.createElement(
        "div",
        {
          className: classNames("ffc-help", formText)
        },
        text
      );
    var showError =
      computedInvalid &&
      error &&
      React.createElement(
        "div",
        {
          className: classNames("ffc-error", formError)
        },
        error
      );
    return React.createElement(
      "div",
      {
        className: classNames(
          "ffc-field",
          {
            "text-danger": computedInvalid
          },
          formGroup
        )
      },
      label &&
        React.createElement(
          "label",
          {
            htmlFor: name,
            className: classNames("ffc-label", formLabel)
          },
          label
        ),
      React.createElement(
        Component,
        _extends({}, props, {
          computedInvalid: computedInvalid,
          isDisabled: isDisabled
        })
      ),
      showText,
      showError
    );
  };

  TmpClass.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    text: PropTypes.string,
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
      checkCondition: PropTypes.func
    }).isRequired
  };
  TmpClass.defaultProps = {
    label: null,
    text: null,
    formGroup: null,
    formLabel: null,
    formError: null,
    formText: null,
    disabled: null
  };
  return TmpClass;
}

var Checkbox = function Checkbox(props) {
  var input = props.input,
    isDisabled = props.isDisabled,
    multiple = props.multiple,
    children = props.children,
    formControl = props.formControl,
    computedInvalid = props.computedInvalid;
  var radioList = Array.isArray(children) ? children : [children];

  var _onChange = function onChange(event, key, option) {
    if (multiple) {
      var newValue = (input.value instanceof Array
        ? input.value
        : [input.value]
      ).filter(Boolean);

      if (event.target.checked) {
        newValue.push(option.props.value);
      } else {
        newValue.splice(newValue.indexOf(option.props.value), 1);
      }

      return input.onChange(newValue);
    }

    return input.onChange(event.target.checked ? option.props.value : false);
  };

  var list = radioList.map(function(option, key) {
    var name = multiple ? input.name + "[" + key + "]" : input.name;
    var value = (Array.isArray(input.value)
      ? input.value
      : [input.value]
    ).filter(function(val) {
      return String(val);
    });
    var checked = value.indexOf(option.props.value) !== -1;
    return React.createElement(
      "div",
      {
        className: "form-check",
        key: option.props.value
      },
      React.createElement("input", {
        type: "checkbox",
        name: name,
        disabled: isDisabled,
        id: input.name + "_" + key,
        value: option.props.value,
        className: classNames("form-check-label"),
        checked: checked,
        onChange: function onChange(event) {
          return _onChange(event, key, option);
        }
      }),
      " ",
      React.createElement(
        "label",
        {
          htmlFor: input.name + "_" + key,
          className: classNames("form-check-label")
        },
        option.props.children
      )
    );
  });
  return React.createElement(
    "div",
    {
      className: classNames(
        "ffc-input",
        {
          "is-invalid": computedInvalid
        },
        formControl
      )
    },
    list
  );
};

Checkbox.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  formControl: PropTypes.string,
  multiple: PropTypes.bool,
  isDisabled: PropTypes.bool,
  computedInvalid: PropTypes.bool.isRequired
};
Checkbox.defaultProps = {
  input: {},
  formControl: null,
  multiple: false,
  isDisabled: false
};
var Checkbox$1 = Context(Context$1(Checkbox));

var Condition = function Condition(props) {
  var context = props.context,
    children = props.children,
    hidden = props.hidden,
    visible = props.visible;

  if (hidden && context.checkCondition(hidden)) {
    return null;
  }

  if (visible && !context.checkCondition(visible)) {
    return null;
  }

  return children;
};

Condition.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  context: PropTypes.shape({
    checkCondition: PropTypes.func
  }).isRequired,
  hidden: PropTypes.func,
  visible: PropTypes.func
};
Condition.defaultProps = {
  hidden: null,
  visible: null
};
var Condition$1 = function(props) {
  return React.createElement(AppContext.Consumer, null, function(context) {
    return React.createElement(
      Condition,
      _extends(
        {
          context: context
        },
        props
      )
    );
  });
};

var FileUpload =
  /*#__PURE__*/
  (function(_React$Component) {
    _inheritsLoose(FileUpload, _React$Component);

    function FileUpload() {
      var _this;

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this =
        _React$Component.call.apply(_React$Component, [this].concat(args)) ||
        this;
      _this.progressElem = null;
      _this.state = {
        error: null
      };
      return _this;
    }

    var _proto = FileUpload.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
        file = _this$props.file,
        addOnStack = _this$props.addOnStack,
        endPoint = _this$props.endPoint;
      var progress = 0;
      var formData = new FormData();
      formData.append("upload", file);
      axios
        .post(endPoint.path, formData, {
          headers: endPoint.headers,
          onUploadProgress: function onUploadProgress(progressEvent) {
            var percentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            progress = [percentage, "%"].join("");
            _this2.progressElem.style.width = progress;

            if (percentage === 100) {
              _this2.progressElem.innerHTML = "done";
            } else {
              _this2.progressElem.innerHTML = progress;
            }
          }
        })
        .then(function() {
          addOnStack(file);
        })
        .catch(function(error) {
          _this2.setState({
            error: error
          });
        });
    };

    _proto.render = function render() {
      var _this3 = this;

      var _this$props2 = this.props,
        file = _this$props2.file,
        removeFromStack = _this$props2.removeFromStack;
      var error = this.state.error;

      if (error) {
        return React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            {
              colSpan: 3
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
          file.preview &&
            React.createElement("img", {
              src: file.preview,
              alt: file.name,
              className: "img-thumbnail",
              style: {
                maxWidth: "80px"
              }
            })
        ),
        React.createElement(
          "td",
          {
            className: "file-upload-progress"
          },
          React.createElement(
            "div",
            {
              className: "progress"
            },
            React.createElement(
              "div",
              {
                ref: function ref(elem) {
                  _this3.progressElem = elem;
                },
                className: "progress-bar",
                role: "progressbar",
                style: {
                  width: "0%"
                },
                "aria-valuenow": "0",
                "aria-valuemin": "0",
                "aria-valuemax": "100"
              },
              "0%"
            )
          )
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
              onClick: function onClick() {
                removeFromStack(file);
              }
            },
            "x"
          )
        )
      );
    };

    return FileUpload;
  })(React.Component);

FileUpload.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired
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

var DropZone =
  /*#__PURE__*/
  (function(_React$Component) {
    _inheritsLoose(DropZone, _React$Component);

    function DropZone() {
      var _this;

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this =
        _React$Component.call.apply(_React$Component, [this].concat(args)) ||
        this;
      _this.state = {
        queue: []
      };
      _this.stack = [];

      _this.filesFromClient = function(files) {
        var queue = _this.state.queue;
        var tmpQueue = [].concat(queue);
        files.forEach(function(file) {
          file.preview = URL.createObjectURL(file);
          tmpQueue.push(file);
        });

        _this.setState({
          queue: tmpQueue
        });
      };

      _this.addOnStack = function(file) {
        var input = _this.props.input;
        var name = file.name,
          size = file.size,
          type = file.type,
          lastModified = file.lastModified;

        _this.stack.push({
          name: name,
          size: size,
          type: type,
          lastModified: lastModified
        });

        input.onChange(_this.stack);
      };

      _this.removeFromStack = function(fileToDelete) {
        var queue = _this.state.queue;
        var input = _this.props.input;
        var filtered = queue.filter(function(file) {
          return file.name !== fileToDelete.name;
        });

        var stackFiltered = _this.stack.filter(function(file) {
          return file.name !== fileToDelete.name;
        });

        _this.stack = stackFiltered;
        input.onChange(stackFiltered);

        _this.setState({
          queue: filtered
        });
      };

      _this.displayFiles = function() {
        var queue = _this.state.queue;
        var endPoint = _this.props.endPoint;

        if (queue.length === 0) {
          return null;
        }

        var list = queue.map(function(file) {
          return React.createElement(FileUpload, {
            key: file.name,
            file: file,
            addOnStack: _this.addOnStack,
            removeFromStack: _this.removeFromStack,
            endPoint: endPoint
          });
        });
        return React.createElement(
          "table",
          {
            className: "table"
          },
          React.createElement("tbody", null, list)
        );
      };

      return _this;
    }

    var _proto = DropZone.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate(
      nextProps,
      nextState
    ) {
      var queue = this.state.queue;
      return queue !== nextState.queue;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      var queue = this.state.queue;
      queue.forEach(function(file) {
        URL.createObjectURL(file);
      });
    };

    _proto.render = function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          Dropzone,
          {
            onDrop: this.filesFromClient
          },
          function(_ref) {
            var getRootProps = _ref.getRootProps,
              getInputProps = _ref.getInputProps;
            return React.createElement(
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
            );
          }
        ),
        this.displayFiles()
      );
    };

    return DropZone;
  })(React.Component);

DropZone.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  endPoint: PropTypes.shape({
    path: PropTypes.string.isRequired,
    headers: PropTypes.shape({})
  }).isRequired,
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};
DropZone.defaultProps = {
  input: {},
  placeholder: null,
  formControl: null
};
var DropZone$1 = Context(Context$1(DropZone));

var Password = function Password(props) {
  var input = props.input,
    placeholder = props.placeholder,
    formControl = props.formControl,
    computedInvalid = props.computedInvalid;
  return React.createElement(
    "input",
    _extends(
      {
        type: "password",
        placeholder: placeholder,
        className: classNames(
          "ffc-input",
          {
            "is-invalid": computedInvalid
          },
          formControl
        )
      },
      input
    )
  );
};

Password.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};
Password.defaultProps = {
  input: {},
  placeholder: null,
  formControl: null
};
var Password$1 = Context(Context$1(Password));

var Radio = function Radio(props) {
  var input = props.input,
    children = props.children,
    formControl = props.formControl,
    computedInvalid = props.computedInvalid;
  var radioList = Array.isArray(children) ? children : [children];

  var _onChange = function onChange(event, key, option) {
    input.onChange(option.props.value);
  };

  var list = radioList.map(function(option, key) {
    return React.createElement(
      "div",
      {
        className: "form-check",
        key: option.props.value
      },
      React.createElement("input", {
        type: "radio",
        name: "" + input.name,
        id: input.name + "_" + key,
        value: option.props.value,
        className: classNames("form-check-label"),
        onChange: function onChange(event) {
          return _onChange(event, key, option);
        },
        checked: String(input.value) === String(option.props.value)
      }),
      " ",
      React.createElement(
        "label",
        {
          htmlFor: input.name + "_" + key,
          className: classNames("form-check-label")
        },
        option.props.children
      )
    );
  });
  return React.createElement(
    "div",
    {
      className: classNames(
        "ffc-input",
        {
          "is-invalid": computedInvalid
        },
        formControl
      )
    },
    list
  );
};

Radio.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};
Radio.defaultProps = {
  input: {},
  formControl: null
};
var Radio$1 = Context(Context$1(Radio));

var Select = function Select(props) {
  var input = props.input,
    children = props.children,
    placeholder = props.placeholder,
    formControl = props.formControl,
    computedInvalid = props.computedInvalid;

  var value = input.value,
    rest = _objectWithoutPropertiesLoose(input, ["value"]);

  var options = Array.isArray(children) ? children : [children];
  var list = options.map(function(option, key) {
    return React.createElement(
      "option",
      {
        key: key,
        value: option.props.value,
        selected: String(input.value) === String(option.props.value)
      },
      option.props.children
    );
  });
  return React.createElement(
    "select",
    _extends(
      {
        placeholder: placeholder,
        className: classNames(
          "ffc-input",
          {
            "is-invalid": computedInvalid
          },
          formControl
        )
      },
      rest
    ),
    list
  );
};

Select.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  placeholder: PropTypes.string,
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};
Select.defaultProps = {
  input: {},
  placeholder: null,
  formControl: null
};
var Select$1 = Context(Context$1(Select));

var Text = function Text(props) {
  var input = props.input,
    placeholder = props.placeholder,
    formControl = props.formControl,
    computedInvalid = props.computedInvalid;
  return React.createElement(
    "input",
    _extends(
      {
        type: "text",
        placeholder: placeholder,
        className: classNames(
          "ffc-input",
          {
            "is-invalid": computedInvalid
          },
          formControl
        )
      },
      input
    )
  );
};

Text.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};
Text.defaultProps = {
  input: {},
  placeholder: null,
  formControl: null
};
var Text$1 = Context(Context$1(Text));

var Textarea = function Textarea(props) {
  var input = props.input,
    placeholder = props.placeholder,
    formControl = props.formControl,
    computedInvalid = props.computedInvalid,
    rows = props.rows;

  var value = input.value,
    rest = _objectWithoutPropertiesLoose(input, ["value"]);

  return React.createElement(
    "textarea",
    _extends(
      {
        placeholder: placeholder,
        className: classNames(
          "ffc-input",
          {
            "is-invalid": computedInvalid
          },
          formControl
        ),
        rows: rows
      },
      rest
    )
  );
};

Textarea.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  rows: PropTypes.number
};
Textarea.defaultProps = {
  input: {},
  placeholder: null,
  formControl: null,
  rows: 10
};
var Textarea$1 = Context(Context$1(Textarea));

function fieldGroup(Component) {
  var FieldGroup = function FieldGroup(props) {
    var label = props.label,
      help = props.help,
      disabled = props.disabled,
      checkCondition = props.context.checkCondition,
      _props$meta = props.meta,
      submitFailed = _props$meta.submitFailed,
      invalid = _props$meta.invalid,
      error = _props$meta.error;
    var computedInvalid = submitFailed && invalid;
    var isDisabled = disabled && checkCondition(disabled);
    return React.createElement(
      FormGroup,
      {
        validationState: computedInvalid ? "error" : null
      },
      label && React.createElement(ControlLabel, null, label),
      React.createElement(
        Component,
        _extends({}, props, {
          computedInvalid: computedInvalid,
          isDisabled: isDisabled
        })
      ),
      React.createElement(FormControl.Feedback, null),
      !computedInvalid && help && React.createElement(HelpBlock, null, help),
      computedInvalid && error && React.createElement(HelpBlock, null, error)
    );
  };

  FieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
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
      checkCondition: PropTypes.func
    }).isRequired
  };
  FieldGroup.defaultProps = {
    label: null,
    text: null,
    type: null,
    formGroup: null,
    formLabel: null,
    formError: null,
    formText: null,
    disabled: null
  };
  return FieldGroup;
}

var Text$2 = function Text(props) {
  var input = props.input,
    type = props.type;
  return React.createElement(
    FormControl,
    _extends({}, input, {
      type: type
    })
  );
};

Text$2.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["text", "email", "date", "datetime-local", "checkbox"])
};
Text$2.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null,
  type: "text"
};
var Text$3 = Context(fieldGroup(Text$2));

var Password$2 = function Password(props) {
  var input = props.input;
  return React.createElement(
    FormControl,
    _extends({}, input, {
      type: "password"
    })
  );
};

Password$2.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};
Password$2.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null
};
var Password$3 = Context(fieldGroup(Password$2));

var Checkbox$2 = function Checkbox(props) {
  var input = props.input;
  return React.createElement(
    FormControl,
    _extends({}, input, {
      type: "password"
    })
  );
};

Checkbox$2.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};
Checkbox$2.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null
};
var Checkbox$3 = Context(fieldGroup(Checkbox$2));

export {
  Checkbox$1 as Checkbox,
  Checkbox$3 as CheckboxBs3,
  Condition$1 as Condition,
  DropZone$1 as DropZone,
  Form,
  Password$3 as PassWordBs3,
  Password$1 as Password,
  Radio$1 as Radio,
  Select$1 as Select,
  Text$1 as Text,
  Text$3 as TextBs3,
  Textarea$1 as Textarea
};

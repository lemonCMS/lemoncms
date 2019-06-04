'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactFinalForm = require('react-final-form');
var _isFunction = _interopDefault(require('lodash/isFunction'));
var classNames = _interopDefault(require('classnames'));
var axios = _interopDefault(require('axios'));
var Dropzone = _interopDefault(require('react-dropzone'));

function _extends() {
  _extends = Object.assign || function (target) {
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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var AppContext = React.createContext({});

var ContextWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ContextWrapper, _React$Component);

  function ContextWrapper(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.checkCondition = _this.checkCondition.bind(_assertThisInitialized(_this));
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
      return React__default.createElement(AppContext.Provider, {
        value: {
          checkCondition: this.checkCondition,
          isStatic: this.props.static,
          // eslint-disable-line react/destructuring-assignment
          debug: debug,
          status: this.getStatus()
        }
      }, children);
    }

    return React__default.createElement(AppContext.Provider, {
      value: {
        checkCondition: this.checkCondition,
        isStatic: this.props.static,
        // eslint-disable-line react/destructuring-assignment
        debug: debug,
        status: this.getStatus()
      }
    }, children, listen && _isFunction(listen) && React__default.createElement(reactFinalForm.FormSpy, {
      subscription: {
        values: true
      },
      onChange: function onChange(props) {
        listen(props.values);
      }
    }));
  };

  return ContextWrapper;
}(React__default.Component);
/* eslint react/require-default-props: 0 */


ContextWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  'static': PropTypes.bool,
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
  'static': false,
  // eslint-disable-line quote-props
  debug: false
};

var Form = function Form(props) {
  var children = props.children,
      className = props.className,
      formProps = _objectWithoutPropertiesLoose(props, ["children", "className"]);

  return React__default.createElement(reactFinalForm.Form, _extends({}, formProps, {
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit,
          rest = _objectWithoutPropertiesLoose(_ref, ["handleSubmit"]);

      return React__default.createElement(ContextWrapper, rest, React__default.createElement("form", {
        onSubmit: handleSubmit,
        className: className
      }, children));
    }
  }));
};

Form.propTypes = {
  className: PropTypes.string,
  validate: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};
Form.defaultProps = {
  className: '',
  validate: function validate() {}
};

function Context(Component) {
  var TmpClass = function TmpClass(props) {
    return React__default.createElement(AppContext.Consumer, null, function (context) {
      return React__default.createElement(reactFinalForm.Field, {
        name: props.name,
        render: function render(_ref) {
          var input = _ref.input,
              meta = _ref.meta;
          return React__default.createElement(Component, _extends({
            input: input,
            meta: meta,
            context: context
          }, props));
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
    var showText = !computedInvalid && text && React__default.createElement("div", {
      className: classNames('ffc-help', formText)
    }, text);
    var showError = computedInvalid && error && React__default.createElement("div", {
      className: classNames('ffc-erro', formError)
    }, error);
    return React__default.createElement("div", {
      className: classNames('ffc-field', {
        'text-danger': computedInvalid
      }, formGroup)
    }, label && React__default.createElement("label", {
      htmlFor: name,
      className: classNames('ffc-label', formLabel)
    }, label), React__default.createElement(Component, _extends({}, props, {
      computedInvalid: computedInvalid,
      isDisabled: isDisabled
    })), showText, showError);
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
      var newValue = (input.value instanceof Array ? input.value : [input.value]).filter(Boolean);

      if (event.target.checked) {
        newValue.push(option.props.value);
      } else {
        newValue.splice(newValue.indexOf(option.props.value), 1);
      }

      return input.onChange(newValue);
    }

    return input.onChange(event.target.checked ? option.props.value : false);
  };

  var list = radioList.map(function (option, key) {
    var name = multiple ? input.name + "[" + key + "]" : input.name;
    var value = (Array.isArray(input.value) ? input.value : [input.value]).filter(function (val) {
      return String(val);
    });
    var checked = value.indexOf(option.props.value) !== -1;
    return React__default.createElement("div", {
      className: "form-check",
      key: option.props.value
    }, React__default.createElement("input", {
      type: "checkbox",
      name: name,
      disabled: isDisabled,
      id: input.name + "_" + key,
      value: option.props.value,
      className: classNames('form-check-label'),
      checked: checked,
      onChange: function onChange(event) {
        return _onChange(event, key, option);
      }
    }), ' ', React__default.createElement("label", {
      htmlFor: input.name + "_" + key,
      className: classNames('form-check-label')
    }, option.props.children));
  });
  return React__default.createElement("div", {
    className: classNames('ffc-input', {
      'is-invalid': computedInvalid
    }, formControl)
  }, list);
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
var Condition$1 = (function (props) {
  return React__default.createElement(AppContext.Consumer, null, function (context) {
    return React__default.createElement(Condition, _extends({
      context: context
    }, props));
  });
});

var FileUpload =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FileUpload, _React$Component);

  function FileUpload() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
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
    formData.append('upload', file);
    axios.post(endPoint.path, formData, {
      headers: endPoint.headers,
      onUploadProgress: function onUploadProgress(progressEvent) {
        var percentage = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        progress = [percentage, '%'].join('');
        _this2.progressElem.style.width = progress;

        if (percentage === 100) {
          _this2.progressElem.innerHTML = 'done';
        } else {
          _this2.progressElem.innerHTML = progress;
        }
      }
    }).then(function () {
      addOnStack(file);
    }).catch(function (error) {
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
      return React__default.createElement("tr", null, React__default.createElement("td", {
        colSpan: 3
      }, React__default.createElement("div", {
        className: "file-upload-error"
      }, "There was an error, try again or contact the site owner.")));
    }

    return React__default.createElement("tr", null, React__default.createElement("td", {
      className: "file-upload-name"
    }, file.preview && React__default.createElement("img", {
      src: file.preview,
      alt: file.name,
      className: "img-thumbnail",
      style: {
        maxWidth: '80px'
      }
    })), React__default.createElement("td", {
      className: "file-upload-progress"
    }, React__default.createElement("div", {
      className: "progress"
    }, React__default.createElement("div", {
      ref: function ref(elem) {
        _this3.progressElem = elem;
      },
      className: "progress-bar",
      role: "progressbar",
      style: {
        width: '0%'
      },
      "aria-valuenow": "0",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, "0%"))), React__default.createElement("td", {
      className: "file-upload-delete"
    }, React__default.createElement("button", {
      className: "file-upload-delete-button",
      type: "button",
      onClick: function onClick() {
        removeFromStack(file);
      }
    }, "x")));
  };

  return FileUpload;
}(React__default.Component);

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
      'Content-Type': 'multipart/form-data'
    }
  }
};

var DropZone =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropZone, _React$Component);

  function DropZone() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      queue: []
    };
    _this.stack = [];

    _this.filesFromClient = function (files) {
      var queue = _this.state.queue;
      var tmpQueue = [].concat(queue);
      files.forEach(function (file) {
        file.preview = URL.createObjectURL(file);
        tmpQueue.push(file);
      });

      _this.setState({
        queue: tmpQueue
      });
    };

    _this.addOnStack = function (file) {
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

    _this.removeFromStack = function (fileToDelete) {
      var queue = _this.state.queue;
      var input = _this.props.input;
      var filtered = queue.filter(function (file) {
        return file.name !== fileToDelete.name;
      });

      var stackFiltered = _this.stack.filter(function (file) {
        return file.name !== fileToDelete.name;
      });

      _this.stack = stackFiltered;
      input.onChange(stackFiltered);

      _this.setState({
        queue: filtered
      });
    };

    _this.displayFiles = function () {
      var queue = _this.state.queue;
      var endPoint = _this.props.endPoint;

      if (queue.length === 0) {
        return null;
      }

      var list = queue.map(function (file) {
        return React__default.createElement(FileUpload, {
          key: file.name,
          file: file,
          addOnStack: _this.addOnStack,
          removeFromStack: _this.removeFromStack,
          endPoint: endPoint
        });
      });
      return React__default.createElement("table", {
        className: "table"
      }, React__default.createElement("tbody", null, list));
    };

    return _this;
  }

  var _proto = DropZone.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    var queue = this.state.queue;
    return queue !== nextState.queue;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var queue = this.state.queue;
    queue.forEach(function (file) {
      URL.createObjectURL(file);
    });
  };

  _proto.render = function render() {
    return React__default.createElement(React__default.Fragment, null, React__default.createElement(Dropzone, {
      onDrop: this.filesFromClient
    }, function (_ref) {
      var getRootProps = _ref.getRootProps,
          getInputProps = _ref.getInputProps;
      return React__default.createElement("section", {
        className: "file-upload-dropzone"
      }, React__default.createElement("div", getRootProps(), React__default.createElement("input", getInputProps()), React__default.createElement("button", {
        type: "button",
        className: "btn btn-primary"
      }, "select files...")));
    }), this.displayFiles());
  };

  return DropZone;
}(React__default.Component);

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
  return React__default.createElement("input", _extends({
    type: "password",
    placeholder: placeholder,
    className: classNames('ffc-input', {
      'is-invalid': computedInvalid
    }, formControl)
  }, input));
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

  var list = radioList.map(function (option, key) {
    return React__default.createElement("div", {
      className: "form-check",
      key: option.props.value
    }, React__default.createElement("input", {
      type: "radio",
      name: "" + input.name,
      id: input.name + "_" + key,
      value: option.props.value,
      className: classNames('form-check-label'),
      onChange: function onChange(event) {
        return _onChange(event, key, option);
      }
    }), ' ', React__default.createElement("label", {
      htmlFor: input.name + "_" + key,
      className: classNames('form-check-label')
    }, option.props.children));
  });
  return React__default.createElement("div", {
    className: classNames('ffc-input', {
      'is-invalid': computedInvalid
    }, formControl)
  }, list);
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
  return React__default.createElement("select", _extends({
    placeholder: placeholder,
    className: classNames('ffc-input', {
      'is-invalid': computedInvalid
    }, formControl)
  }, input), children);
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
  return React__default.createElement("input", _extends({
    type: "text",
    placeholder: placeholder,
    className: classNames('ffc-input', {
      'is-invalid': computedInvalid
    }, formControl)
  }, input));
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
  return React__default.createElement("textarea", _extends({
    placeholder: placeholder,
    className: classNames('ffc-input', {
      'is-invalid': computedInvalid
    }, formControl),
    rows: rows
  }, input));
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

exports.Form = Form;
exports.Checkbox = Checkbox$1;
exports.Condition = Condition$1;
exports.Password = Password$1;
exports.Radio = Radio$1;
exports.Select = Select$1;
exports.Text = Text$1;
exports.Textarea = Textarea$1;
exports.DropZone = DropZone$1;

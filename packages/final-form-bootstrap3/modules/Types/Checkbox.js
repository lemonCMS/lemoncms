import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import PropTypes from "prop-types";
import memoize from "memoize-one";
import CheckboxAlias from "react-bootstrap/lib/Checkbox";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";
import Filter from "./components/Filter";

class Checkbox extends Component {
  state = {
    values: [],
    filterText: ""
  };

  componentDidMount() {
    const {
      input: { value }
    } = this.props;

    if (typeof value !== "undefined") {
      this.setState({ values: value });
    }
  }

  emit = (event, checkboxValue, single = false) => {
    const {
      input: { onChange, value }
    } = this.props;

    if (single) {
      // Single checkbox
      if (event.target.checked) {
        // Set the value from the checkbox
        onChange(checkboxValue);
        return;
      }

      // Remove value
      onChange("");
      return;
    }

    const clone = [...value].filter(filter => filter); // make a shallow clone
    // Multiple checkboxes
    if (event.target.checked) {
      // See if item is already in the value array, if so ignore it.
      if (clone.indexOf(checkboxValue) > -1) {
        return;
      }

      // Value does not exist, set it
      clone.push(checkboxValue);
      onChange(clone);
      return true;
    }

    // Remove value
    // If it does not exist, ignore it
    if (clone.indexOf(checkboxValue) === -1) {
      return;
    }

    // the value exists and need te be removed.
    clone.splice(clone.indexOf(checkboxValue), 1);
    onChange(clone);
  };

  filtered = memoize((list, filterText) => {
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

  handleChange = event => {
    this.setState({ filterText: event.target.value });
  };

  clearFilterText = event => {
    this.setState({ filterText: "" });
  };

  createCheckBoxes = children => {
    const { columns, filter, input } = this.props;
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

        return (
          <CheckboxAlias
            key={value}
            checked={input.value.indexOf(value) > -1}
            onChange={event => {
              this.emit(event, value);
            }}
          >
            {children}
          </CheckboxAlias>
        );
      });

      if (columns === 1) {
        return list;
      }

      const itemsPerColumn = Math.ceil(list.length / columns);
      // create new array of length with undefined values
      const cols = Array.apply(null, Array(columns)).map(() => {});
      const display = cols.map((col, index) => {
        const start = index * itemsPerColumn;
        const end = start + itemsPerColumn;
        return (
          <Col md={Math.round(12 / columns)} key={index}>
            {list.slice(start, end)}
          </Col>
        );
      });

      return <Row>{display}</Row>;
    }

    // Filtered returned nothing
    if (filter) {
      return <div>No results</div>;
    }

    return (
      <CheckboxAlias
        checked={input.value}
        onChange={event => {
          this.emit(event, true, true);
        }}
      >
        {children}
      </CheckboxAlias>
    );
  };

  render() {
    const { filter, placeholderFilter, children } = this.props;
    const { filterText } = this.state;
    if (filter) {
      const filteredList = this.filtered(children, this.state.filterText);
      return (
        <>
          <Filter
            filterText={filterText}
            clearFilterText={this.clearFilterText}
            handleChange={this.handleChange}
            placeholderFilter={placeholderFilter}
          />
          {this.createCheckBoxes(filteredList)}
        </>
      );
    }

    return <>{this.createCheckBoxes(children)}</>;
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
  placeholderFilter: "Filter"
};

export default context()(fieldGroup(Checkbox));

import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import PropTypes from "prop-types";
import memoize from "memoize-one";
import RadioAlias from "react-bootstrap/lib/Radio";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";
import Filter from "./components/Filter";

class Radio extends Component {
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

  emit = (event, radioValue) => {
    const {
      input: { onChange }
    } = this.props;
    onChange(radioValue);
  };

  filtered = memoize((list, filterText) => {
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

  handleChange = event => {
    this.setState({ filterText: event.target.value });
  };

  clearFilterText = event => {
    this.setState({ filterText: "" });
  };

  createRadios = children => {
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
        return (
          <RadioAlias
            key={value}
            disabled={isDisabled}
            checked={input.value === value}
            onChange={event => {
              this.emit(event, value);
            }}
          >
            {children}
          </RadioAlias>
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
          <Col sm={Math.round(12 / columns)} key={index}>
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
      <RadioAlias
        checked={input.value}
        disabled={isDisabled}
        onChange={event => {
          this.emit(event, true, true);
        }}
      >
        {children}
      </RadioAlias>
    );
  };

  render() {
    const { filter, placeholderFilter, children, isDisabled } = this.props;
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
            isDisabled={isDisabled}
          />
          {this.createRadios(filteredList)}
        </>
      );
    }

    return <>{this.createRadios(children)}</>;
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
  mandatory: PropTypes.bool,
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
  mandatory: false,
  layout: null
};

export default context()(fieldGroup(Radio));

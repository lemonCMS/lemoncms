import React from "react";
import PropTypes from "prop-types";

const Filter = ({
  handleChange,
  placeholderFilter,
  filterText,
  clearFilterText,
  isDisabled
}) => {
  return (
    <div className="input-group">
      <input
        placeholder={placeholderFilter}
        className={"form-control"}
        type={"text"}
        onChange={handleChange}
        value={filterText}
        disabled={isDisabled}
      />
      <span className="input-group-btn">
        <button
          disabled={!filterText || isDisabled}
          className="btn btn-default"
          type={"button"}
          onClick={clearFilterText}
        >
          x
        </button>
      </span>
    </div>
  );
};

Filter.propTypes = {
  filterText: PropTypes.string.isRequired,
  placeholderFilter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  clearFilterText: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
};

export default Filter;

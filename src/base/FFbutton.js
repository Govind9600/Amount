import React from "react";
import PropTypes from "prop-types";

const FFbutton = ({ Field, className, onClickHandler }) => {
  return (
    <input
      id={Field.FieldValue}
      className={`${className || "button"}`}
      disabled={Field?.Disabled}
      onClick={onClickHandler}
      value={Field.FieldValue}
      type="button"
    ></input>
  );
};

FFbutton.propTypes = {
  Field: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  onClickHandler: PropTypes.func,
};

FFbutton.defaultProps = {
  Field: {},
  className: "",
  onClickHandler: () => null,
};

export default FFbutton;

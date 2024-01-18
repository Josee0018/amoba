import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { text, onClick, isDisabled, customClassName, textCustomClass } = props;

  return (
    <button
      type="button"
      className={`${customClassName} border p-2 px-10 py-3 justify-center rounded-lg`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <span className={textCustomClass}>{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  customClassName: PropTypes.string,
  textCustomClass: PropTypes.string,
};

Button.defaultProps = {
  text: "",
  onClick: null,
  isDisabled: false,
  customClassName: "",
  textCustomClass: "",
};

export default Button;

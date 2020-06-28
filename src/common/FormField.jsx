import React from "react";
import Error from "./Error";

import "./FormField.css";

const FormField = ({
  mask,
  disabled,
  label,
  value,
  error,
  placeholder,
  onChange,
}) => {
  const handleOnChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="form-field">
      <label className="form-field__label">{label}</label>
      <input
        type={mask ? "password" : "text"}
        className="form-field__input"
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
        disabled={disabled}
      ></input>
      <Error error={error}></Error>
    </div>
  );
};

export default FormField;

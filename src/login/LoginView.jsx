import React, { useState, useEffect } from "react";
import ValidationUtils from "../common/utils";

import Error from "../common/Error";
import Success from "../common/Success";
import Loader from "../common/Loader";
import FormField from "../common/FormField";

import "./LoginView.css";

function LoginView({ isLoading, isLoggedIn, error, onSubmit }) {
  const [username, setUsername] = useState({ value: "", error: " " });
  const [password, setPassword] = useState({ value: "", error: " " });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const validationState = !username.error && !password.error;
    setIsFormValid(validationState);
  }, [username, password]);

  const handleUsernameChange = (value) => {
    setUsername({ value, error: ValidationUtils.validateUsername(value) });
  };

  const handlePasswordChange = (value) => {
    setPassword({ value, error: ValidationUtils.validatePassword(value) });
  };

  const handleOnSubmit = () => {
    if (isFormValid) {
      onSubmit(username.value, password.value);
    }
  };

  const shouldDisableSubmit = isLoading || !isFormValid;

  return (
    <div className="login-view">
      <img src={require("../assets/img/logo.png")} alt=""></img>
      <FormField
        disabled={isLoading}
        error={username.error}
        value={username.value}
        label={"Username"}
        placeholder={"Enter username"}
        onChange={handleUsernameChange}
      ></FormField>
      <FormField
        mask
        disabled={isLoading}
        error={password.error}
        value={password.value}
        label={"Password"}
        placeholder={"Enter password"}
        onChange={handlePasswordChange}
      ></FormField>
      <button
        className={`login-view__btn ${shouldDisableSubmit && "disabled"}`}
        onClick={handleOnSubmit}
        disabled={shouldDisableSubmit}
      >
        Login
      </button>
      {isLoading ? <Loader></Loader> : null}
      {error ? <Error error={error}></Error> : null}
      {isLoggedIn ? <Success message={"Login Successful"}></Success> : null}
    </div>
  );
}

export default LoginView;

import React, { useState } from "react";

import { doLogin } from "../api/login";
import LoginView from "./LoginView";

function LoginContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (username, password) => {
    setIsLoading(true);
    setError(null);

    doLogin(username, password)
      .then((response) => {
        setIsLoggedIn(response);
        setError(null);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setIsLoading(false);
        resetForm();
      });
  };

  const resetForm = () => {
    setTimeout(() => {
      setError(null);
      setIsLoggedIn(false);
    }, 2000);
  };

  return (
    <LoginView
      isLoading={isLoading}
      isLoggedIn={isLoggedIn}
      error={error}
      onSubmit={handleSubmit}
    ></LoginView>
  );
}

export default LoginContainer;

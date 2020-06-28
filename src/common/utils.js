const ValidationUtils = (function () {
  const noSpaceRegex = /^\S+$/;

  const isEmpty = (value) => {
    return !value;
  };

  const validateUsername = (value) => {
    let error = null;
    if (isEmpty(value)) {
      error = "cannot be empty";
    } else if (!noSpaceRegex.test(value)) {
      error = "cannot contain spaces";
    }
    return error;
  };

  const validatePassword = (value) => {
    let error = null;
    if (isEmpty(value)) {
      error = "cannot be empty";
    } else if (value.length > 0 && value.length < 8) {
      error = "minimum 8 characters";
    }
    return error;
  };

  return {
    validateUsername,
    validatePassword,
  };
})();

export default ValidationUtils;

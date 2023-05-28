import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../../store/authSlice";
import Styles from "./FormErrors.module.css";

// Form-level Errors
const FormErrors = ({ errorMessage }) => {
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setShowError(true);
    const id = setTimeout(() => {
      setShowError(false);
      dispatch(authActions.clearError());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, []);
  return showError && <p className={Styles.error}>{errorMessage}</p>;
};

export default FormErrors;

import React from "react";
import { ErrorMessage, Field } from "formik";
import ErrorMsg from "../FormUtils/FieldError/ErrorMsg";
import Styles from "../Authentication.module.css";

// Reusable Component For all the Form Field
const InputField = ({ name, type, value }) => {
  return (
    <div className={Styles.formControl}>
      <label htmlFor={name}>{value}</label>
      <Field type={type} name={name} id={name} />
      <ErrorMessage name={name} component={ErrorMsg} />
    </div>
  );
};

export default InputField;

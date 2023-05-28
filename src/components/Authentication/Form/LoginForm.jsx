import React, { useState } from "react";
import { Form, Formik } from "formik";
import { loginValues, loginValidateSchema } from "../FormUtils/FormValidations";
import InputField from "../InputField/InputField";
import Styles from "../Authentication.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/authSlice";
import FormErrors from "../FormUtils/FormError/FormErrors";

const LoginForm = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.error);

  const onSubmit = (values) => {
    dispatch(authActions.login(values));
  };

  return (
    <>
      <Formik
        initialValues={loginValues}
        validationSchema={loginValidateSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <InputField name="email" value="Email" type="email" />

          <InputField name="password" value="Password" type="password" />

          <button type="submit" className={Styles.btn} id={Styles.submitBtn}>
            Login
          </button>

          <button type="reset" className={Styles.btn} id={Styles.resetBtn}>
            Reset
          </button>
        </Form>
      </Formik>
      {errorMessage && <FormErrors errorMessage={errorMessage} />}
    </>
  );
};

export default LoginForm;

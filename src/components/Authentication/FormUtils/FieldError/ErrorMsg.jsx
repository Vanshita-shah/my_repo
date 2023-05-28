import React from "react";
import Styles from "./ErrorMsg.module.css";

// Error Messages for Form Fields
const ErrorMsg = (props) => {
  return <div className={Styles.error}>{props.children}</div>;
};

export default ErrorMsg;

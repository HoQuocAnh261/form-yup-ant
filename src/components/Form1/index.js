import React from "react";
import PropTypes from "prop-types";
import styles from "./form1.module.css";
import FormHi from "./components/FormHi";
import FormSignup from "./components/FormSignup";
import FormLogin from "./components/FormLogin";

function Form1(props) {
  return (
    <div className={styles.container}>
      <FormHi />
      <FormSignup />
      <FormLogin />
    </div>
  );
}

Form1.propTypes = {};

export default Form1;

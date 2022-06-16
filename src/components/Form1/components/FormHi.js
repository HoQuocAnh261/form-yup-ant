import React from "react";
import PropTypes from "prop-types";
import styles from "../form1.module.css";
import { LeftOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import { Button, Form, Input } from "antd";
import * as Yup from "yup";
import { BsFacebook, BsGoogle, BsApple } from "react-icons/bs";

function FormHi() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email là bắt buộc"),
    }),
  });
  return (
    <div className={styles.container_item}>
      <LeftOutlined className={styles.btn_back} />
      <h2 className={styles.title}>Hi!</h2>
      <div className={styles.wrapper_form}>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            size="large"
            block="true"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors && (
            <p className={styles.error}>{formik.errors.email}</p>
          )}
          <Button size="large" type="primary" block="true" htmlType="submit">
            Continue
          </Button>
          <div
            style={{
              textAlign: "center",
              padding: 10,
              color: "white",
              fontSize: "1.2rem",
            }}
          >
            or
          </div>
          <div className={styles.social_login}>
            <Button size="large" type="default" block="true" htmlType="submit">
              <BsFacebook />
              Continue with Facebook
            </Button>

            <Button size="large" type="default" block="true" htmlType="submit">
              <BsGoogle />
              Continue with Google
            </Button>

            <Button size="large" type="default" block="true" htmlType="submit">
              <BsApple />
              Continue with Apple
            </Button>
          </div>
          <div className={styles.desc_note}>
            Don't have an acount ?<span>Signup</span> <br />
            <span>Forgot your password?</span>
          </div>
        </Form>
      </div>
    </div>
  );
}

FormHi.propTypes = {};

export default FormHi;

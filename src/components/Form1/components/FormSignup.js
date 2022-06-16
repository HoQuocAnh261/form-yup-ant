import React from "react";
import PropTypes from "prop-types";
import styles from "../form1.module.css";
import {
  LeftOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Form, Input } from "antd";

function FormSignup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min("Tên ít nhất 5 ký tự")
        .required("Tên là bắt buộc"),
      password: Yup.string()
        .min(8, "Mật khẩu ít nhất 8 ký tự")
        .required("Mật khẩu là bắt buộc"),
    }),
  });
  return (
    <div className={styles.container_item}>
      <LeftOutlined className={styles.btn_back} />
      <h2 className={styles.title}>Sign up</h2>
      <div className={styles.desc_info}>
        Looks like you don't have an account. Let's create a new account for{" "}
        <strong>jane.doe@gmail.com</strong>
      </div>
      <div className={styles.wrapper_form}>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            size="large"
            block="true"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors && (
            <p className={styles.error}>{formik.errors.name}</p>
          )}
          <Input.Password
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            id="password"
            name="password"
            type="password"
            placeholder="Password "
            size="large"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors && (
            <p className={styles.error}>{formik.errors.password}</p>
          )}
          <div className={styles.desc_note}>
            By selecting Agree and continue below, I agree to{" "}
            <span>Terms of Service and Privacy Policy</span>
          </div>
          <Button size="large" type="primary" block="true" htmlType="submit">
            Agree and continue
          </Button>
        </Form>
      </div>
    </div>
  );
}

FormSignup.propTypes = {};

export default FormSignup;

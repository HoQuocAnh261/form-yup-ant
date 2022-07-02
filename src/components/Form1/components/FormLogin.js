import React from "react";
import PropTypes from "prop-types";
import styles from "../form1.module.css";
import {
  LeftOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Form, Button, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

import avatar from "/images/avatar.jpg";

function FormLogin() {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Mật khẩu ít nhất 8 kí tự")
        .required("Mật khẩu là bắt buộc"),
    }),
  });
  return (
    <div className={styles.container_item}>
      <LeftOutlined className={styles.btn_back} />
      <h2 className={styles.title}>Log in</h2>
      <div className={styles.wrapper_form}>
        <div className={styles.user_item}>
          <img src={avatar} width="50" style={{ borderRadius: "50%" }}></img>
          <div className={styles.profile}>
            <div className={styles.profile_name}>Jane Dow</div>
            <div>jane.dow@gmail.com</div>
          </div>
        </div>
        <Form onSubmit={formik.handleSubmit}>
          <Input.Password
            id="password"
            name="password"
            type="password"
            size="large"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors && (
            <p className={styles.error}>{formik.errors.password}</p>
          )}
          <Button type="primary" htmlType="submit" size="large" block="true">
            Continue
          </Button>
          <div className={styles.desc_note}>
            <span>Forgot your password</span>
          </div>
        </Form>
      </div>
    </div>
  );
}

FormLogin.propTypes = {};

export default FormLogin;

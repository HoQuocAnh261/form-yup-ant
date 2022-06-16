import React from "react";
import PropTypes from "prop-types";
import styles from "./form2.module.css";
import { Button, Form, Input, Row, Col, Checkbox } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

function Form2(props) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      passWord: "",
      comfirmPassWord: "",
      checkReciveEmail: false,
      checkAgree: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "First Name có ít nhất 2 kí tự")
        .required("First Name là bắt buộc"),
      lastName: Yup.string()
        .min(2, "Last Name có ít nhất 2 kí tự")
        .required("LastName là bắt buộc"),
      phoneNumber: Yup.string()
        .required("Phone Number là bắt buộc")
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại chưa đúng"),
      email: Yup.string()
        .required("Email là bắt buộc")
        .email("Email không hợp lệ!"),
      passWord: Yup.string()
        .required("Password là bắt buộc")
        .min(8, "Password chứa ít nhất 8 kí tự"),
      comfirmPassWord: Yup.string()
        .required("Confirm password là bắt buộc")
        .oneOf([Yup.ref("passWord"), null], "Password không trùng khớp"),
      checkReciveEmail: Yup.boolean().oneOf([true], "Chưa chấp nhận gửi email"),
      checkAgree: Yup.boolean().oneOf(
        [true],
        "Chưa chấp nhận điều khoản đăng ký"
      ),
    }),
  });
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <h2>Register</h2>
        <h5>Manage all your lottery efficiently</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla cum
          numquam quisquam saepe sint repellendus ducimus praesentium dolores
          aliquid incidunt aperiam, voluptatibus maiores, pariatur officia.
        </p>
        <Form onSubmit={formik.onSubmit}>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12}>
              <label>First Name</label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                size="large"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.errors && (
                <p className="error">{formik.errors.firstName}</p>
              )}
            </Col>
            <Col xs={24} sm={24} md={12}>
              <label>Last Name</label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                size="large"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              {formik.errors && (
                <p className="error">{formik.errors.lastName}</p>
              )}
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12}>
              <label>Phone Number</label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                size="large"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />
              {formik.errors && (
                <p className="error">{formik.errors.phoneNumber}</p>
              )}
            </Col>
            <Col xs={24} sm={24} md={12}>
              <label>Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                size="large"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors && <p className="error">{formik.errors.email}</p>}
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12}>
              <label>Password</label>
              <Input
                id="passWord"
                name="passWord"
                type="password"
                size="large"
                onChange={formik.handleChange}
                value={formik.values.passWord}
              />
              {formik.errors && (
                <p className="error">{formik.errors.passWord}</p>
              )}
            </Col>
            <Col xs={24} sm={24} md={12}>
              <label>Comfirm Password</label>
              <Input
                id="comfirmPassWord"
                name="comfirmPassWord"
                type="password"
                size="large"
                onChange={formik.handleChange}
                value={formik.values.comfirmPassWord}
              />
              {formik.errors && (
                <p className="error">{formik.errors.comfirmPassWord}</p>
              )}
            </Col>
          </Row>
          <Checkbox
            name="checkReciveEmail"
            onChange={formik.handleChange}
            value={formik.values.checkReciveEmail}
          >
            Yes, i want to receive Lottery Display emails
          </Checkbox>
          {formik.errors && (
            <p className="error">{formik.errors.checkReciveEmail}</p>
          )}
          <br />
          <Checkbox
            name="checkAgree"
            onChange={formik.handleChange}
            value={formik.values.checkAgree}
          >
            I agree to all ther Term, Privacy Policy and Fees
          </Checkbox>
          {formik.errors && <p className="error">{formik.errors.checkAgree}</p>}
          <Button type="primary" size="large" htmlType="submit">
            Creat Account
          </Button>
        </Form>
      </div>
    </div>
  );
}

Form2.propTypes = {};

export default Form2;

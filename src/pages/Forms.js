import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
export default function Forms() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid Email format"),
    firstName: Yup.string().required("Lastname is a required field"),
    lastName: Yup.string().required("Lastname is a required field"),
  });
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ firstName: "", lastName: "", email: "" }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <span>Create an Account</span>
                <input
                  type="firstName"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstNames}
                  placeholder="Enter your First Name"
                  className="form-control inp_text"
                  id="firstName"
                />
                <input
                  type="lastName"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  placeholder="Enter your Last Name"
                  className="form-control inp_text"
                  id="lastName"
                />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}
      </Formik>

      <hr />

      <h2 className="headingtitle">Follow Now</h2>
      <div className="followContainer">
        <div className="formFollow">
          <div>
            <label>Select Users</label>{" "}
            <select className="form-control">
              <option value="">Choose Company Name</option>
              <option></option>
            </select>
          </div>
          <div>
            <label>Select Users</label>{" "}
            <select className="form-control">
              <option value="">Choose Company Name</option>
              <option></option>
            </select>
          </div>
        </div>
        <button type="submit" className="Followbutton">
          Follow
        </button>
      </div>

      <hr />

      <h2 className="headingtitle">Users and Their Followers</h2>
      <div className="followContainer"></div>
    </>
  );
}

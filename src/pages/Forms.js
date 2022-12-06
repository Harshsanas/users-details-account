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

  const followData = [
    {
      firstName: "Gulshan",
      lastName: "smith",
      emailid: "gulshan@gmail.com",
    },
  ];
  const followingData = [
    {
      firstName: "Kulpin",
      lastName: "smith",
      emailid: "kulpin@gmail.com",
    },
  ];

  const followUserData = followData.map((i) => i.firstName);
  console.log(followUserData);
  const followingUserData = followingData.map((i) => i.firstName);
  console.log(followingUserData);
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
              <option value="">Select Name</option>{" "}
              <option value="">{followUserData}</option>
            </select>
          </div>
          <div>
            <label>Select Users</label>{" "}
            <select className="form-control">
              <option value="">Select Name</option>{" "}
              <option value="">{followUserData}</option>
            </select>
          </div>
        </div>
        <button type="submit" className="Followbutton">
          Follow
        </button>
      </div>

      <hr />

      <h2 className="headingtitle">Users and Their Followers</h2>
      <div className="followContainers">
        <div className="namesData">
          <div className="imgcon">LOGO</div>
          <div>
            <p>
              {followData.map((i) => i.firstName)}{" "}
              {followData.map((i) => i.lastName)}
            </p>
            <p>{followData.map((i) => i.emailid)}</p>
          </div>
        </div>
        <div>
          <img
            src="https://as1.ftcdn.net/v2/jpg/04/62/84/76/1000_F_462847643_Jh4XrHmtAy2s8KPeJ2UsxnoBCvKNd0Jf.jpg"
            alt="arrow"
          />
        </div>
        <div className="namesData">
          <div className="imgcon">LOGO</div>
          <div>
            <p>
              {followingData.map((i) => i.firstName)}{" "}
              {followingData.map((i) => i.lastName)}
            </p>
            <p>{followingData.map((i) => i.emailid)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

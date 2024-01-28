import React from "react";
import { useState } from "react";
import "./components-style/FormWebsite.css";

const FormWebsite = () => {
  let [email, setEmail] = useState("Email");
  let [password, setPassword] = useState("Password");

  function handleSetEmail(e) {
    e.preventDefault();
    const customerEmail = document.getElementById("exampleInputEmail1").value;
    const customerPassword = document.getElementById(
      "exampleInputPassword1"
    ).value;

    setEmail(customerEmail);
    setPassword(customerPassword);
  }

  return (
    <>
      <h1>Email: {email}</h1>
      <h1>Password: {password}</h1>
      <div className="container m-5">
        <form className="p-5 form-border">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            ></input>
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSetEmail}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormWebsite;

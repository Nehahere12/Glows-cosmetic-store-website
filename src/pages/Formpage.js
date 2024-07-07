// Filename - FormPage.js
import React, { useState } from "react";
import "./Form.css";

const FormPage = () => {
  const [isMember, setIsMember] = useState(false); // Change this value to test

  return (
    <div className="form1">
      <h1>
        {isMember ? "Already a member? Login" : "Become a member Sign in."}
      </h1>
      <form className="form2">
        <>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Phone:
            <input type="phone" name="phone" />
          </label>
          <br />
        </>

        <button type="submit">{isMember ? "Login" : "Sign in"}</button>
      </form>
      <button className="new" onClick={() => setIsMember(!isMember)}>
        {isMember ? "Not a member? Sign up" : "Already a member? Login"}
      </button>
    </div>
  );
};

export default FormPage;

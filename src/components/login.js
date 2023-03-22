import React from "react";
import "./login.css";
export const Login = () => {
  return (
    <form>
      <div className="container">
        <h1>Login Page</h1>
        <p>Please fill in this form to login an account.</p>

        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <div className="clearfix">
          <button type="submit" className="signupbtn">
            Login
          </button>
          <button type="button" className="cancelbtn">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

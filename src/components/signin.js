import React from "react";
import "./signin.css";
import { useNavigate, Link } from "react-router-dom";
export const Signin = () => {
  const navigate = useNavigate();

  return (
    <>
      <form>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" required />

          <label for="psw">
            <b>Password</b>
          </label>
          <input type="password" placeholder="Enter Password" required />

          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input type="password" placeholder="Repeat Password" required />

          <div className="clearfix">
            <button
              type="submit"
              className="signupbtn"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign Up
            </button>
            <button type="button" className="cancelbtn">
              Cancel
            </button>
          </div>
        </div>
      </form>
      <div className="container">
        <Link to="/">Already have a account ..! Please login ..!</Link>
      </div>
    </>
  );
};

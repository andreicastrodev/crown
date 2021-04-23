import React, { useState } from "react";
import "./sign-in.styles.scss";
import { connect } from "react-redux";
import CustomBtn from "../custom-btn/custom-btn.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCreds, setCreds] = useState({ email: "", password: "" });
  const { email, password } = userCreds;

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCreds({ ...userCreds, [name]: value });
  };

  return (
    <div className="sign-in">
      {" "}
      <h2 className="sign-in__title">I already have an account</h2>
      <span className="sign-in__span">
        Sign in with your email and password
      </span>
      <form onSubmit={handleSubmit} className="sign-in__form">
        {" "}
        <label className="sign-in__label">email</label>
        <input
          className="sign-in__input"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        <label className="sign-in__label">password</label>
        <input
          className="sign-in__input"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
        <div className="sign-in__btn">
          <CustomBtn type="submit" value="submit form">
            Sign In
          </CustomBtn>
          <CustomBtn
            onClick={googleSignInStart}
            isGoogleSignIn
            value="submit form"
            type="button"
          >
            Google Account
          </CustomBtn>
        </div>
      </form>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatch)(SignIn);

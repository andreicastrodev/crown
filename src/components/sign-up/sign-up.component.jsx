import React, { useState } from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-btn/custom-btn.component";
import { signUpStart } from "../../redux/user/user.action";
import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [userCreds, setUserCreds] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCreds;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(`Password does not match`);
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCreds({ ...userCreds, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="sign-up__title">I do not have a account</h2>
      <span className="sign-up__span">
        Sign up with your email and password
      </span>
      <form onSubmit={handleSubmit} className="sign-up__form">
        <label className="sign-up__label">Display Name</label>
        <input
          className="sign-up__input"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="display name"
          required
        />
        <label className="sign-up__label">Email</label>
        <input
          className="sign-up__input"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <label className="sign-up__label">Password</label>
        <input
          className="sign-up__input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        <label className="sign-up__label">Confirm Password</label>
        <input
          className="sign-up__input"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="confirmPassword"
          required
        />
        <CustomButton type="submit">Sign Up </CustomButton>
      </form>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  signUpStart: (userCreds) => dispatch(signUpStart(userCreds)),
});

export default connect(null, mapDispatch)(SignUp);

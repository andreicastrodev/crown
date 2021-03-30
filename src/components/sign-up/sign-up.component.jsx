import React from "react";

import CustomButton from "../custom-btn/custom-btn.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert(`Password does not match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="sign-up__title">I do not have a account</h2>
        <span className="sign-up__span">Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up__form">
          <label className="sign-up__label">Display Name</label>
          <input
            className="sign-up__input"
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="display name"
            required
          />
          <label className="sign-up__label">Email</label>
          <input
            className="sign-up__input"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <label className="sign-up__label">Password</label>
          <input
            className="sign-up__input"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="password"
            required
          />
          <label className="sign-up__label">Confirm Password</label>
          <input
            className="sign-up__input"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="confirmPassword"
            required
          />
          <CustomButton type="submit">Sign Up </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;

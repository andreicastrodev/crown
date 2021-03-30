import React from "react";
import "./sign-in.styles.scss";
import CustomBtn from "../custom-btn/custom-btn.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ email: "", password: "" });
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        {" "}
        <h2 className="sign-in__title">I already have an account</h2>
        <span className="sign-in__span">
          Sign in with your email and password
        </span>
        <form onSubmit={this.handleSubmit} className="sign-in__form">
          {" "}
          <label className="sign-in__label">email</label>
          <input
            className="sign-in__input"
            type="email"
            name="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />
          <label className="sign-in__label">password</label>
          <input
            className="sign-in__input"
            type="password"
            name="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <div className="sign-in__btn">
            <CustomBtn type="submit" value="submit form">
              Sign In
            </CustomBtn>
            <CustomBtn
              onClick={signInWithGoogle}
              isGoogleSignIn
              value="submit form"
            >
              Google Account
            </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

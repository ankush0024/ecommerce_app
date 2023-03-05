import React from "react";
const Signup = () => {
  return (
    <>

        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a
                href="https://Github.com/YasinDehfuli"
                target="_blank"
                className="social"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://Codepen.io/YasinDehfuli"
                target="_blank"
                className="social"
                rel="noreferrer"
              >
                <i className="fa fa-codepen"></i>
              </a>
              <a
                href="mailto:Ydehfuli@gmail.com"
                target="_blank"
                className="social"
                rel="noreferrer"
              >
                <i className="fa fa-google"></i>
              </a>
            </div>
            <span> Or sign in using E-Mail Address</span>
            <label>
              <input type="email" placeholder="Email" />
            </label>
            <label>
              <input type="password" placeholder="Password" />
            </label>
            <a href="/">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
    </>
  );
};

export default Signup;

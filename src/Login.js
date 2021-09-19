import React from "react";
// import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import FederatedLoginButton from "./FederatedLoginButton";
import styles from "./Login.module.css";
import logo from './logo.svg';


function Login() {
  return (
    <section className={styles.root}>
      <header className={styles.logoHeader}>
        <img className={styles.loginLogo} src={logo} alt="Trello" />
      </header>
      <section class={styles.mainContent}>
        <article class={styles.innerContent}>
          <h1 className={styles.brandlabel}>Log in to Trello</h1>
          <form>
            <input type="email" name="email" placeholder="Enter email" required />
            <input type="password" name="password" placeholder="Enter password" required />
            <button type="submit">Log in</button>
          </form>
          <p className={styles.descriptors}>OR</p>
          <FederatedLoginButton cssId={'google-auth'} >
            Continue with Google
          </FederatedLoginButton>
          <FederatedLoginButton cssId={'slack-auth'} >
            Continue with Slack
          </FederatedLoginButton>
          <ul className={styles.bottomLink}>
            <li><Link to="/">Can't log in?</Link></li>
            <li><Link to="/signup">Sign up for an account</Link></li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default Login;

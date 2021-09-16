import React from "react";
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
          <p>OR</p>
          <FederatedLoginButton cssId={'google-auth'} >
            Continue with Google
          </FederatedLoginButton>
          <FederatedLoginButton cssId={'slack-auth'} >
            Continue with Slack
          </FederatedLoginButton>
          <ul className={styles.bottomLink}>
              <li><a href="">Can't log in?</a></li>
              <li><a href="">Sign up for an account</a></li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default Login;

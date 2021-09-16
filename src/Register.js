import React from "react";
import FederatedLoginButton from "./FederatedLoginButton";
import styles from "./Login.module.css";
import logo from './logo.svg';

function Register() {
  return (
    <section className={styles.root}>
      <header className={styles.logoHeader}>
        <img className={styles.loginLogo} src={logo} alt="Trello" />
      </header>
      <section class={styles.mainContent}>
        <article class={styles.innerContent}>
          <h1 className={styles.brandlabel}>Sign up for your account</h1>
          <form>
            <input type="email" name="email" placeholder="Enter email" required />
            <input type="text" name="full_name" placeholder="Enter full name" required />
            <input type="password" name="password" placeholder="Enter password" required />

            <p className={styles.descriptors}>By signing up, you confirm that you've read and accepted our Terms of Service and Privacy Policy.</p>

            <button type="submit">Sign up</button>
          </form>
          <p className={styles.descriptors}>OR</p>
          <FederatedLoginButton cssId={'google-auth'} >
            Continue with Google
          </FederatedLoginButton>
          <FederatedLoginButton cssId={'slack-auth'} >
            Continue with Slack
          </FederatedLoginButton>
          <ul className={styles.bottomLink}>
            <li><a href="">Already have an account? Log In</a></li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default Register;

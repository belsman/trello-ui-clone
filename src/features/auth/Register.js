import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FederatedLoginButton from "./FederatedLoginButton";
import styles from "./Login.module.css";
import { register } from "./authSlice";
import logo from '../../logo.svg';

function Register() {
  const [ email, setEmail ] = useState('');
  const [ fullName, setFullName ] = useState('');
  const [ password, setPassword ] = useState('');

  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ email, full_name: fullName, password }));
  };

  if (user.id) {
    return <Redirect to="/" />;
  }

  return (
    <section className={styles.root}>
      <header className={styles.logoHeader}>
        <img className={styles.loginLogo} src={logo} alt="Trello" />
      </header>
      <section class={styles.mainContent}>
        <article class={styles.innerContent}>
          <h1 className={styles.brandlabel}>Sign up for your account</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="full_name"
              placeholder="Enter full name"
              required
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

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
            <li><Link to="/login">Already have an account? Log In</Link></li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default Register;

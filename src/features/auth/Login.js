import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./authSlice";
import FederatedLoginButton from "./FederatedLoginButton";
import styles from "./Login.module.css";
import logo from '../../logo.svg';


function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ username: email, password }));
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
          <h1 className={styles.brandlabel}>Log in to Trello</h1>
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
              type="password"
              name="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
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

import React from "react";
import styles from "./Login.module.css";

function Login() {
  return (
    <div>
      <section>
        <header><h1>Trello</h1></header>
        <section>
          <article>
            <h4 className={styles.redColor}>Log in to Trello</h4>
            <form>
                <input type="email" name="email" placeholder="Enter email" required />
                <input type="password" name="password" placeholder="Enter password" required />
                <button type="submit">Log in</button>
            </form>
            <p>OR</p>
            <button>Continue With Google</button>
            <ul>
                <li><a href="">Can't log in?</a></li>
                <li><a href="">Sign up for an account</a></li>
            </ul>
          </article>
        </section>
      </section>
    </div>
  );
}

export default Login;

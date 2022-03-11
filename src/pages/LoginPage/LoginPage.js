import React from "react";
import styles from "../LoginPage/LoginPage.module.css";
import { AuthContext } from "../../contexts/auth";

const LoginPage = () => {
const {authenticated, login} = React.useContext(AuthContext);



  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("submit", { email, password });
    login(email, password);

      
  


  };

  return (
    <div className={styles.login} id="login">
      <h1 className="title">OPS login</h1>
      <p>{String(authenticated)}</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className={styles.actions}>
          <button type="submit">Enter</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

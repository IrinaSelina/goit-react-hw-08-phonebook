import React, { Component } from "react";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Страница логина</h1>

        <form style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

export default LoginView;

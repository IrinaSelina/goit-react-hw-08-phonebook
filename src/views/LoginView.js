import React, { Component } from "react";
import { connect } from "react-redux";
import operations from "../redux/auth/auth-operations";

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
  reset = () => {
    this.setState({
      email: "",
      password: "",
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogIn(this.state);
    this.reset();
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Страница логина</h1>

        <form
          style={styles.form}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
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
const mapDispatchToProps = {
  onLogIn: operations.logIn,
};
export default connect(null, mapDispatchToProps)(LoginView);

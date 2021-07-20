import React, { Component } from "react";
import { connect } from "react-redux";
import operations from "../redux/auth/auth-operations";
class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  reset = () => {
    this.setState({
      name: "",
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
    this.props.onRegister(this.state);
    this.reset();
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Страница регистрации</h1>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onRegister: operations.register,
};
// const mapDispatchToProps = (disatch) => ({
//   onRegister: (data) => disatch(operations.register(data)),
// });

export default connect(null, mapDispatchToProps)(RegisterView);

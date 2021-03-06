import React, { Component } from "react";
import { connect } from "react-redux";
import operations from "../redux/auth/auth-operations";
import FormGroup from "@material-ui/core/FormGroup";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Section from "../Components/Section";
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
      <Section>
        <div className="container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <FormGroup>
              <InputLabel htmlFor="email">
                Почта
                <Input
                  label="Enter your email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </InputLabel>

              <InputLabel htmlFor="password">
                Пароль
                <Input
                  id="password"
                  label="Enter your password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </InputLabel>
            </FormGroup>

            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="small"
            >
              Войти
            </Button>

            {/* <button type="submit">Войти</button> */}
          </form>
        </div>
      </Section>
    );
  }
}
const mapDispatchToProps = {
  onLogIn: operations.logIn,
};
export default connect(null, mapDispatchToProps)(LoginView);

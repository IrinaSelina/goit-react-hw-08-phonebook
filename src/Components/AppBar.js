import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu/UserMenu";
import selectors from "../redux/auth/auth-selectors";

const AppBar = ({ isAuthenticated }) => (
  <header>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);
const mapStateToProps = (state) => ({
  isAuthenticated: selectors.isAuthenticated(state),
});
export default connect(mapStateToProps, null)(AppBar);

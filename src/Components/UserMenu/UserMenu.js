import React from "react";
import { connect } from "react-redux";
import selectors from "../../redux/auth/auth-selectors";
import operations from "../../redux/auth/auth-operations";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ email, logOut }) => (
  <div style={styles.container}>
    <span style={styles.name}>Welcome, {email}</span>
    <button onClick={logOut} type="button">
      Выйти
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  email: selectors.getEmail(state),
});

const mapDispatchToProps = {
  logOut: operations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

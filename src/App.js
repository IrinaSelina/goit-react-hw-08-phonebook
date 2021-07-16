import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import HomeView from "./views/HomeView.js";
import LoginView from "./views/LoginView.js";
import RegisterView from "./views/RegisterView.js";
import ContactsView from "./views/ContactsView.js";
import { Component } from "react";
import { connect } from "react-redux";
import formActions from "./redux/form/form-actions";
import Section from "./Components/Section";
import Form from "./Components/Form";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import formOperations from "./redux/form/form-operations";
import Routs from "./routes";
import AppBar from "./Components/AppBar";
class App extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Switch>
          {/* <Route component={HomeView} />
          <Route component={LoginView} />
          <Route component={RegisterView} /> */}

          <Route exact path={Routs.home} component={HomeView} />
          <Route path={Routs.register} component={RegisterView} />
          <Route path={Routs.login} component={LoginView} />
          <Route path={Routs.contacts} component={ContactsView} />
          <Route component={HomeView} />
        </Switch>
      </>
    );
  }
}
// class App extends Component {
//   componentDidMount() {
//     this.props.fetchContacts();
//   }
//   // componentDidUpdate(prevProps, prevState) {
//   //   if (this.state.contacts !== prevState.contacts) {
//   //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   //   }
//   // }
//   render() {
//     return (
//       <Section>
//         <h1>Phonebook</h1>
//         <Form />
//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//       </Section>
//     );
//   }
// }
// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (filter) => dispatch(formActions.addFilter(filter)),
//   fetchContacts: () => dispatch(formOperations.fetchContacts()),
// });

// export default connect(null, mapDispatchToProps)(App);
export default App;

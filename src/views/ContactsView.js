import React, { Component } from "react";
import { findRenderedDOMComponentWithTag } from "react-dom/cjs/react-dom-test-utils.production.min";
import { connect } from "react-redux";
import formOperations from "../redux/form/form-operations";
import formActions from "../redux/form/form-actions";
import authSelectors from "../redux/auth/auth-selectors";
import Section from "../Components/Section";
import Form from "../Components/Form";
import ContactList from "../Components/ContactList";
import Filter from "../Components/Filter";
class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  // componentDidUpdate(isAuthenticated) {
  //   console.log("componentDidUpdate");
  //   this.props.fetchContacts();
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }
  render() {
    return (
      <Section>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (filter) => dispatch(formActions.addFilter(filter)),
  fetchContacts: () => dispatch(formOperations.fetchContacts()),
});
export default connect(null, mapDispatchToProps)(ContactsView);

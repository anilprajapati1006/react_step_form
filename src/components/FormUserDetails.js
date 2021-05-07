import React, { Component } from "react";

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <form>
          <input
            type="text"
            placeholder="Firstname"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Lastname"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <br />
          <button onClick={this.continue}>Continue</button>
        </form>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;

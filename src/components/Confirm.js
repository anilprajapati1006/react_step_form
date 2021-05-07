import React, { Component } from "react";

class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;

    return (
      <div>
        <ul>
          <li>{values.firstName}</li>
          <li>{values.lastName}</li>
          <li>{values.email}</li>
          <li>{values.occupation}</li>
          <li>{values.city}</li>
          <li>{values.bio}</li>
        </ul>
        <button onClick={this.continue}>Confirm & Continue</button>
        <button onClick={this.back}>Back</button>
      </div>
    );
  }
}

export default Confirm;

import React, { Component } from "react";

class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <form>
          <input
            type="text"
            onChange={handleChange("occupation")}
            placeholder="Occupation"
            defaultValue={values.occupation}
          />{" "}
          <br />
          <br />
          <input
            type="text"
            onChange={handleChange("city")}
            placeholder="City"
            defaultValue={values.city}
          />{" "}
          <br />
          <br />
          <input
            type="text"
            onChange={handleChange("bio")}
            placeholder="Bio"
            defaultValue={values.bio}
          />{" "}
          <br />
          <br />
          <button onClick={this.continue}>Continue</button>
          <button onClick={this.back}>Back</button>
        </form>
      </React.Fragment>
    );
  }
}

export default FormPersonalDetails;

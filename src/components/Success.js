import { Typography } from "@material-ui/core";
import React, { Component } from "react";

class Success extends Component {
  render() {
    return (
      <div>
        <Typography variant="h4" style={{ margin: 20 }}>
          Thank You For Your Submission
        </Typography>
        <Typography>
          You will get an email with further instructions.
        </Typography>
      </div>
    );
  }
}

export default Success;

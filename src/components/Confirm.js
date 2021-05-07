import React, { Component } from "react";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";

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
      <React.Fragment>
        <List component="nav">
          <ListItem style={{ textAlign: "center" }}>
            <ListItemText primary={values.firstName} />
          </ListItem>
          <ListItem style={{ textAlign: "center" }}>
            <ListItemText primary={values.lastName} />
          </ListItem>
          <ListItem style={{ textAlign: "center" }}>
            <ListItemText primary={values.email} />
          </ListItem>
          <ListItem style={{ textAlign: "center" }}>
            <ListItemText primary={values.occupation} />
          </ListItem>
          <ListItem style={{ textAlign: "center" }}>
            <ListItemText primary={values.city} />
          </ListItem>
          <ListItem style={{ textAlign: "center" }}>
            <ListItemText primary={values.bio} />
          </ListItem>
        </List>
        <Button
          style={{ marginRight: 10 }}
          onClick={this.continue}
          color="primary"
          variant="contained"
        >
          Confirm & Continue
        </Button>
        <Button onClick={this.back} color="default" variant="contained">
          Back
        </Button>
      </React.Fragment>
    );
  }
}

export default Confirm;

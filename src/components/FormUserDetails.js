import React, { Component } from "react";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <Container maxwidth="sm">
          <Card style={{ marginTop: 100, padding: 30, background: "#eceff1" }}>
            <Typography
              variant="h4"
              style={{ marginBottom: 25, color: "#424242", fontWeight: "bold" }}
            >
              User Details
            </Typography>
            <CardContent>
              <TextField
                type="text"
                placeholder="Firstname"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                variant="outlined"
              />{" "}
              <br />
              <br />
              <TextField
                type="text"
                placeholder="Lastname"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                variant="outlined"
              />
              <br />
              <br />
              <TextField
                type="email"
                placeholder="Email"
                onChange={handleChange("email")}
                defaultValue={values.email}
                variant="outlined"
              />
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={this.continue}
                color="primary"
                variant="contained"
              >
                Continue
              </Button>
            </CardActions>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;

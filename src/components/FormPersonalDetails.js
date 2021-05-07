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
        <Container maxwidth="sm">
          <Card style={{ marginTop: 100, padding: 30, background: "#eceff1" }}>
            <Typography
              variant="h4"
              style={{
                marginBottom: 25,
                color: "#424242",
                fontWeight: "bold",
              }}
            >
              Personal Details
            </Typography>
            <CardContent>
              <TextField
                type="text"
                placeholder="Occupation"
                onChange={handleChange("occupation")}
                defaultValue={values.occupation}
                variant="outlined"
              />
              <br />
              <br />
              <TextField
                type="text"
                placeholder="City"
                onChange={handleChange("city")}
                defaultValue={values.city}
                variant="outlined"
              />
              <br />
              <br />
              <TextField
                type="email"
                placeholder="Bio"
                onChange={handleChange("bio")}
                defaultValue={values.bio}
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
                style={{ marginRight: 10 }}
                onClick={this.continue}
                color="primary"
                variant="contained"
              >
                Continue
              </Button>
              <Button onClick={this.back} color="default" variant="contained">
                Back
              </Button>
            </CardActions>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}

export default FormPersonalDetails;

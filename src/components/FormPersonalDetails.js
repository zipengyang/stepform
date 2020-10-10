import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
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
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal details" />
          <TextField
            hintText="Enter Your occupation"
            floatingLabelText="occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter Your city"
            floatingLabelText="city"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter Your postcode"
            floatingLabelText="postcode"
            onChange={handleChange("postcode")}
            defaultValue={values.postcode}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={style.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={style.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const style = {
  button: {
    margin: 15,
  },
};
export default FormPersonalDetails;

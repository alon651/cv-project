import React from "react";
import NameForm from "./NameForm";
import EmailForm from "./EmailForm";
class InfoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Personal Information</h2>
        <NameForm handleChange={this.props.handleNameChange} />
        <EmailForm handleChange={this.props.handleEmailChange} />
      </div>
    );
  }
}
export default InfoForm;

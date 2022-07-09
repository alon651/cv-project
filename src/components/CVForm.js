import React from "react";
import JobsForm from "./JobsForm";
import InfoForm from "./InfoForm";
import EducationForm from "./EducationForm";
class CVForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      educations: [],
      jobs: [],
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
    this.props.updateName(e);
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
    this.props.onEmailChange(e);
  }

  render() {
    return (
      <div>
        <InfoForm
          handleNameChange={this.handleNameChange}
          handleEmailChange={this.handleEmailChange}
        />
        <EducationForm
          remove={this.props.remove}
          onNameChange={this.props.onNameChange}
          onDegreeChange={this.props.onDegreeChange}
          onStartChange={this.props.onStartChange}
          onEndChange={this.props.onEndChange}
          educations={this.props.edus}
          addNewEdu={this.props.addNewEdu}
        />
        <JobsForm
          remove={this.props.removeJob}
          onNameChange={this.props.onNameChangeJob}
          onRoleChange={this.props.onRoleChangeJob}
          onStartChange={this.props.onStartChangeJob}
          onEndChange={this.props.onEndChangeJob}
          AddNewJob={this.props.AddNewJob}
          jobs={this.props.jobs}
        />
      </div>
    );
  }
}
export default CVForm;

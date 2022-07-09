import React from "react";
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.handleChange(event);
  }

  render() {
    return (
      <div>
        <label htmlFor="fullName">full name: </label>
        <input
          type="text"
          value={this.props.name}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}

export default NameForm;

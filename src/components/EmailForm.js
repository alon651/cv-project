import React from "react";

class EmailForm extends React.Component {
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
        <label htmlFor="Email">Email: </label>
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}
export default EmailForm;

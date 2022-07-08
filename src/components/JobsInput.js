import React from "react";
class JobsInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", role: "", start: "", end: "" };

    this.onNameChange = this.onNameChange.bind(this);
    this.onRoleChange = this.onRoleChange.bind(this);
    this.onStartChange = this.onStartChange.bind(this);
    this.onEndChange = this.onEndChange.bind(this);
  }
  onNameChange(e) {
    this.setState({
      name: e.target.value,
    });
    this.props.onNameChange(this.props.id, e);
  }
  onRoleChange(e) {
    this.setState({
      role: e.target.value,
    });
    this.props.onRoleChange(this.props.id, e);
  }
  onStartChange(e) {
    this.setState({
      start: e.target.value,
    });
    this.props.onStartChange(this.props.id, e);
  }
  onEndChange(e) {
    this.setState({
      end: e.target.value,
    });
    this.props.onEndChange(this.props.id, e);
  }
  render() {
    return (
      <div>
        <input
          onChange={this.onNameChange}
          placeholder="company name"
          value={this.state.name}
        ></input>
        <input
          onChange={this.onRoleChange}
          placeholder="role"
          value={this.state.role}
        ></input>
        <input
          onChange={this.onStartChange}
          placeholder="start date"
          value={this.state.start}
        ></input>
        <input
          onChange={this.onEndChange}
          placeholder="end date"
          value={this.state.end}
        ></input>
        <button onClick={() => this.props.onRemove(this.props.id)}>
          delete
        </button>
      </div>
    );
  }
}

export default JobsInput;

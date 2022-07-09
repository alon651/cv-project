import React from "react";
class EducationInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", degree: "", start: "", end: "" };

    this.onNameChange = this.onNameChange.bind(this);
    this.onDegreeChange = this.onDegreeChange.bind(this);
    this.onStartChange = this.onStartChange.bind(this);
    this.onEndChange = this.onEndChange.bind(this);
  }
  onNameChange(e) {
    this.setState({
      name: e.target.value,
    });
    this.props.onNameChange(this.props.id, e);
  }
  onDegreeChange(e) {
    this.setState({
      degree: e.target.value,
    });
    this.props.onDegreeChange(this.props.id, e);
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
          placeholder="school name"
          value={this.props.self.name}
        ></input>
        <input
          onChange={this.onDegreeChange}
          placeholder="degree"
          value={this.props.self.degree}
        ></input>
        <input
          onChange={this.onStartChange}
          placeholder="start date"
          value={this.props.self.start}
        ></input>
        <input
          onChange={this.onEndChange}
          placeholder="end date"
          value={this.props.self.end}
        ></input>
        <button onClick={() => this.props.onRemove(this.props.id)}>
          delete
        </button>
      </div>
    );
  }
}

export default EducationInput;

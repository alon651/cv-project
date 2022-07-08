import React from "react";
import JobsInput from "./JobsInput";
import uniqid from "uniqid";

class JobsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
    this.AddNewJob = this.AddNewJob.bind(this);
    this.remove = this.remove.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onRoleChange = this.onRoleChange.bind(this);
    this.onStartChange = this.onStartChange.bind(this);
    this.onEndChange = this.onEndChange.bind(this);
  }

  AddNewJob() {
    const newId = uniqid();
    const newItem = {
      Role: "",
      name: "",
      start: "",
      end: "",
      id: newId,
      onRemove: this.remove,
    };
    this.setState({
      items: [...this.state.items, newItem],
    });
  }
  remove(id) {
    this.setState({ items: this.state.items.filter((x) => x.id !== id) });
  }
  onNameChange(id, e) {
    this.setState({
      items: this.state.items.map((obj) => {
        if (obj.id === id) {
          return { ...obj, location: e.target.value };
        }
        return obj;
      }),
    });
  }
  onRoleChange(id, e) {
    this.setState({
      items: this.state.items.map((obj) => {
        if (obj.id === id) {
          return { ...obj, Role: e.target.value };
        }
        return obj;
      }),
    });
  }
  onStartChange(id, e) {
    this.setState({
      items: this.state.items.map((obj) => {
        if (obj.id === id) {
          return { ...obj, start: e.target.value };
        }
        return obj;
      }),
    });
  }
  onEndChange(id, e) {
    this.setState({
      items: this.state.items.map((obj) => {
        if (obj.id === id) {
          return { ...obj, end: e.target.value };
        }
        return obj;
      }),
    });
  }
  render() {
    return (
      <div>
        <h2>Jobs experience</h2>
        <div>
          {this.props.jobs.map((x) => {
            return (
              <JobsInput
                key={x.id}
                onRemove={x.onRemove}
                id={x.id}
                onNameChange={this.props.onNameChange}
                onRoleChange={this.props.onRoleChange}
                onStartChange={this.props.onStartChange}
                onEndChange={this.props.onEndChange}
              />
            );
          })}
        </div>
        <button onClick={this.props.AddNewJob}>Add new</button>
      </div>
    );
  }
}
export default JobsForm;

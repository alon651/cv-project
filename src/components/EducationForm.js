import React from "react";
import EducationInput from "./EducationInput";

import uniqid from "uniqid";
class EducationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
    this.AddNewEdu = this.AddNewEdu.bind(this);
    this.remove = this.remove.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onDegreeChange = this.onDegreeChange.bind(this);
    this.onStartChange = this.onStartChange.bind(this);
    this.onEndChange = this.onEndChange.bind(this);
  }

  AddNewEdu() {
    const newId = uniqid();
    const newItem = {
      degree: "",
      location: "",
      yearOfStart: "",
      yearOfEnd: "",
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
  onDegreeChange(id, e) {
    this.setState({
      items: this.state.items.map((obj) => {
        if (obj.id === id) {
          return { ...obj, degree: e.target.value };
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
        <h2>education</h2>
        <div>
          {this.props.educations.map((x) => {
            return (
              <EducationInput
                key={x.id}
                onRemove={x.onRemove}
                id={x.id}
                onNameChange={this.props.onNameChange}
                onDegreeChange={this.props.onDegreeChange}
                onStartChange={this.props.onStartChange}
                onEndChange={this.props.onEndChange}
                self={x}
              />
            );
          })}
        </div>
        <button onClick={this.props.addNewEdu}>Add new</button>
      </div>
    );
  }
}

export default EducationForm;

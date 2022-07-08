import React from "react";
import CVForm from "./components/CVForm";
import uniqid from "uniqid";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edus: [],
      jobs: [],
    };

    this.AddNewEdu = this.AddNewEdu.bind(this);
    this.removeEdu = this.removeEdu.bind(this);
    this.onNameChangeEdu = this.onNameChangeEdu.bind(this);
    this.onDegreeChangeEdu = this.onDegreeChangeEdu.bind(this);
    this.onStartChangeEdu = this.onStartChangeEdu.bind(this);
    this.onEndChangeEdu = this.onEndChangeEdu.bind(this);

    this.AddNewJob = this.AddNewJob.bind(this);
    this.removeJob = this.removeJob.bind(this);
    this.onNameChangeJob = this.onNameChangeJob.bind(this);
    this.onRoleChangeJob = this.onRoleChangeJob.bind(this);
    this.onStartChangeJob = this.onStartChangeJob.bind(this);
    this.onEndChangeJob = this.onEndChangeJob.bind(this);
  }
  AddNewEdu() {
    const newId = uniqid();
    const newItem = {
      degree: "",
      name: "",
      start: "",
      end: "",
      id: newId,
      onRemove: this.removeEdu,
    };
    this.setState({
      edus: [...this.state.edus, newItem],
    });
  }
  removeEdu(id) {
    this.setState({ edus: this.state.edus.filter((x) => x.id !== id) });
  }
  onNameChangeEdu(id, e) {
    this.setState({
      edus: this.state.edus.map((obj) => {
        if (obj.id === id) {
          return { ...obj, name: e.target.value };
        }
        return obj;
      }),
    });
  }
  onDegreeChangeEdu(id, e) {
    this.setState({
      edus: this.state.edus.map((obj) => {
        if (obj.id === id) {
          return { ...obj, degree: e.target.value };
        }
        return obj;
      }),
    });
  }
  onStartChangeEdu(id, e) {
    this.setState({
      edus: this.state.edus.map((obj) => {
        if (obj.id === id) {
          return { ...obj, start: e.target.value };
        }
        return obj;
      }),
    });
  }
  onEndChangeEdu(id, e) {
    this.setState({
      edus: this.state.edus.map((obj) => {
        if (obj.id === id) {
          return { ...obj, end: e.target.value };
        }
        return obj;
      }),
    });
  }
  onNameChangeJob(id, e) {
    this.setState({
      jobs: this.state.jobs.map((obj) => {
        if (obj.id === id) {
          return { ...obj, name: e.target.value };
        }
        return obj;
      }),
    });
  }
  onRoleChangeJob(id, e) {
    this.setState({
      jobs: this.state.jobs.map((obj) => {
        if (obj.id === id) {
          return { ...obj, role: e.target.value };
        }
        return obj;
      }),
    });
  }
  onStartChangeJob(id, e) {
    this.setState({
      jobs: this.state.jobs.map((obj) => {
        if (obj.id === id) {
          return { ...obj, start: e.target.value };
        }
        return obj;
      }),
    });
  }
  onEndChangeJob(id, e) {
    this.setState({
      jobs: this.state.jobs.map((obj) => {
        if (obj.id === id) {
          return { ...obj, end: e.target.value };
        }
        return obj;
      }),
    });
  }
  AddNewJob() {
    const newId = uniqid();
    const newItem = {
      role: "",
      name: "",
      start: "",
      end: "",
      id: newId,
      onRemove: this.removeJob,
    };
    this.setState({
      jobs: [...this.state.jobs, newItem],
    });
  }
  removeJob(id) {
    this.setState({ jobs: this.state.jobs.filter((x) => x.id !== id) });
  }
  render() {
    return (
      <div>
        <h1>Cv App</h1>
        <CVForm
          remove={this.removeEdu}
          onNameChange={this.onNameChangeEdu}
          onDegreeChange={this.onDegreeChangeEdu}
          onStartChange={this.onStartChangeEdu}
          onEndChange={this.onEndChangeEdu}
          edus={this.state.edus}
          addNewEdu={this.AddNewEdu}
          onNameChangeJob={this.onNameChangeJob}
          onRoleChangeJob={this.onRoleChangeJob}
          onStartChangeJob={this.onStartChangeJob}
          onEndChangeJob={this.onEndChangeJob}
          removeJob={this.removeJob}
          AddNewJob={this.AddNewJob}
          jobs={this.state.jobs}
        />
      </div>
    );
  }
}

export default App;

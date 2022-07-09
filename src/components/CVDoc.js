import React from "react";
class CVDoc extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <div>contact email: {this.props.email}</div>
        <div>
            <h1>Education</h1>
            {this.props.edus.map((x) => {
            return (
              <div key={x.id}>
                {x.start} - {x.end}: {x.degree} from {x.name} 
              </div>
            );
          })}
        </div>
        <div>
          <h1>Job experience</h1>
          {this.props.jobs.map((x) => {
            return (
              <div key={x.id}>
                {x.start} - {x.end}: {x.role} at {x.name} 
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default CVDoc;

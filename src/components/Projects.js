import React, { Component } from 'react';

class Projects extends Component {
	constructor(){
		super();
		this.renderProjects = this.renderProjects.bind(this);
	}

	renderProjects(key) {
		const project = this.props.projects[key];
		return (
			<div className="project" key={key}>
				Project {key}
			</div>
		)
	}

  render() {
    return (
      <div className="projects">
      	<p>Projects go here</p>
      	{Object.keys(this.props.projects).map(this.renderProjects).reverse()}
      </div>
    );
  }
}

export default Projects;

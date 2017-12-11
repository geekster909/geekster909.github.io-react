import React, { Component } from 'react';

class Projects extends Component {
	constructor(){
		super();
		this.renderProjects = this.renderProjects.bind(this);
		this.importAll = this.importAll.bind(this);
	}
	
	importAll(r) {
  	let images = {};
  	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  	return images;
	}

	renderProjects(key) {
		const project = this.props.projects[key];
		const images = this.importAll(require.context('../images/projects/', false, /\.(png|jpe?g|svg)$/));
		return (
			<div className="my-work--block">
				<img className="has-content" src={images[project.imageName]} />
				<div className="my-work--overlay">
					<div className="is-centered">
						<h2>{project.name}</h2>
						<p>
							{project.framework}<br />
							<br />
							<a href={project.link} target="_blank">Visit Website</a>
						</p>
					</div>
				</div>
			</div>
		)
	}

  render() {
    return (
      <section class="home--my-work" id="my-work">
				<div class="container">
					<div class="my-work--header">
						<h1>My Work</h1>
						<h3>This is a selection of my recent work! Check it out.</h3>
					</div>
					<div class="my-work--blocks">
						<div class="row">
			      	{Object.keys(this.props.projects).map(this.renderProjects).reverse()}
	      		</div>
      		</div>
      	</div>
      </section>
    );
  }
}

export default Projects;

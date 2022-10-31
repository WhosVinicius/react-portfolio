import React from "react";
import "./Projects.css";
import { projects } from "./projetos";

function Projects() {
	return (
		<div
			id="projetos"
			className="projects-container">
			<div className="icone1 center-text cor-destaque">
				<h4>{"< Projetos feitos / >"}</h4>
			</div>
			<div className="card-container">
				{projects.map((projeto) => (
					<div className="card center-text">
						<a
							href={projeto.repo}
							key={projeto.titulo}
							target="_blank"
							rel="noopener noreferrer">
							<img
								src={projeto.img}
								alt=""
							/>
							<div className="items-cont m-50">
								<h2 className="card-title cor-destaque m-20">{projeto.titulo}</h2>
								<p style={{ margin: "50px" }}>{projeto.desc}</p>
							</div>
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;

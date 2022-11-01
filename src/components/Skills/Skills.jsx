import React from "react";
import "./Skills.css";
import { skills } from "./skills";

const Skills = () => {
	return (
		<div
			id="skills"
			className="skills-container">
			<div className="icone1 center-text cor-destaque">
				<h4>{"< Minhas habilidades / >"}</h4>
			</div>
			<div className="skills-list">
				{skills.map((skill) => (
					<div
						id={skill.nome}
						key={skill.nome}
						className="skill-card ">
						<img
							src={skill.img}
							alt=""
						/>
						<h2
							className="center-text cor-destaque m-20 card-title"
							style={{ marginRight: "20px" }}>
							{skill.nome}
						</h2>
						<p className="desc cor-secundaria m-20">{skill.desc}</p>
						<p className={"center-text testee " + skill.experiencia}>Nivel de Experiencia: {skill.experiencia}</p>
					</div>
				))}{" "}
			</div>
		</div>
	);
};

export default Skills;

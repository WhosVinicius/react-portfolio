import React from "react";
import "./About.css";
function About() {
	return (
		<div
			id="about"
			className="about-container">
			<div className="apresentacao">
				<div className="static-txt">
					<h1>Oi, eu sou o Vinicius</h1>
				</div>
				<div className="dynamic-txt">
					<h1>
						Desenvolvedor front-end
					</h1>
				</div>
				<p className="m-50"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsam?</p>
			</div>
			<div className="t"></div>
			<div className="aux center-text">
				<ul className="center-text">
					<li className="center-text">
						<a href="#about">sobre mim</a>
					</li>
					<li className="center-text">
						<a href="#projetos">projeto</a>
					</li>
					<li className="center-text">
						<a href="#skills">tecnologias</a>
					</li>
					<li className="center-text">
						<a href="contact">contatos</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default About;

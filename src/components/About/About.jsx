import React from "react";
import "./About.css";
function About() {
	return (
		<div
			id="about"
			className="about-container">
				<div className="apresentacao">
				{/* <div id="menu-background-pattern"></div> */}
				<div className="static-txt">
					<h1>Oi, eu sou o Vinicius</h1>
				</div>
				<div className="dynamic-txt">
					<h1>Desenvolvedor front-end</h1>
				</div>
				<p className="m-50"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsam?</p>
				<div className="aux m-50">
				<ul>
					<li>GitHub</li>
					<li>Email</li>
					<li>Phone</li>
				</ul>
				</div>
				</div>
			<div className="t"></div>
		</div>
	);
}

export default About;

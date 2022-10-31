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
					<h1 className="typewriter">Desenvolvedor front-end </h1>
				</div>
				<p className="m-50">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem perferendis, ipsam unde sunt vel odio? Facilis quas debitis
					assumenda dicta harum tempore obcaecati! Quibusdam placeat ea nemo, voluptatum odit facere laborum eum sequi eaque nobis ut sint doloribus
					tempore provident distinctio eius optio reiciendis in minima fugit reprehenderit omnis.
				</p>
				<div className="aux m-50">
					<ul>
						<li>GitHub</li>
						<li>Email</li>
						<li>Phone</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default About;

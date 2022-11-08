import React from "react";
import "./About.css";
import mePic from "./aa.png";
import logo from "./logo2.png";
const About = () => {
	const name = "Vinicius";
	return (
		<div
			id="about"
			className="about-container">
			<div className="wraper1 ">
				<div className="apresentacao">
					<div className="static-txt">
						<p id="intro">
							Oi, eu sou o<h1 id="name">{name}</h1>
						</p>
					</div>
					<div className="dynamic-txt">
						<h1 className="typewriter cor-destaque">Desenvolvedor front-end </h1>
					</div>
					<p className="cor-secundaria">Eu sou um desenvolvedor front-end que gosta de construir interfaces de usuário limpas e responsivas.</p>
					<div className="aux">
						<ul>
							<li>
								<a
									href="https://github.com/WhosVinicius"
									target={"_blank"}
									rel="noopener noreferrer">
									GitHub
								</a>
							</li>
							<li>silvaviniciusgontijo@gmail.com</li>
						</ul>
					</div>
				</div>
				<div className="img-wrap">
					<img
						src={mePic}
						alt=""
					/>
				</div>
			</div>
			<div className="credit1 m-50">
				<p className="cor-secundaria">
					Arte feita por
					<a
						className="cor-destaque"
						href="https://www.instagram.com/nick_rzzz/"
						target={"_blank"}
						rel="noopener noreferrer">
						:@nick_rzzz
					</a>
				</p>
			</div>
			<div className="logo">
				<img
					src={logo}
					alt=""
				/>
			</div>
		</div>
	);
};

export default About;

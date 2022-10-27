import React from "react";
import "./NavBar.css";
function NavBar() {
	return (
		<div className="nav-container">
			<div className="logo">{"< VINICIUS G / >"}</div>
			<div>
				<ul>
					<li>
						<a href="#about">sobre mim</a>
					</li>
					<li>
						<a href="#projetos">projeto</a>
					</li>
					<li>
						<a href="#skills">tecnologias</a>
					</li>
					<li>
						<a href="contact">contatos</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;

import React from "react";
import "./About.css";
function About() {
   return (
      <div id='about'className="about-container">
         <div className="apresentacao">
            <div className="static-txt">
               <h1>
                  Oi, eu sou o Vinicius
               </h1>
            </div>
            <div className="dynamic-txt">
               <h1>
                  Desenvolvedor <br/> front-end 
               </h1>
               <br />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsam?</p>
         </div>
         <div className="t"></div>
         <div className="aux center-text">
            <ul className="center-text">
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

export default About;

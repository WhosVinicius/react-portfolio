import React from "react";
import "./Skills.css";
import { skills } from "./skills";

function Skills() {
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
                  key={skill.nome}
                  className="skill-card">
                  <img
                     src={skill.img}
                     alt=""
                  />
                  <div className="items-cont cor">
                     <h2 className="center-text cor-destaque m-20">{skill.nome}</h2>
                     <p className="center-text">
                        {skill.desc}
                     </p>
                  </div>
                     <p className="cor-destaque center-text">
                     Nivel de Experiencia: {skill.experiencia}
                     </p>
               </div>
            ))}{" "}
         </div>
      </div>
   );
}

export default Skills;

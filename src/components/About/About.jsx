import React from "react";
import "./About.css";
function About() {
   return (
      <div id='about'className="about-container">
         <div className="apresentacao">
            <div className="static-txt">
               <h1>
                  {"/*"}
                  <br />
                  Oi, eu sou Vinicius
               </h1>
            </div>
            <div className="dynamic-txt">
               <h1>
                  Desenvolvedor front-end <br/>
                  {" */"}
               </h1>
               <br />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsam?</p>
         </div>
         <div className="t"></div>
      </div>
   );
}

export default About;

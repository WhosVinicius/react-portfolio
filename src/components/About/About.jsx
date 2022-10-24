import React from "react";
import "./About.css";
function About() {
   return (
      <div className="about-container">
         <div className="apresentacao">
            <div className="static-txt">
               {"/*"}
               <br />
               Oi, eu sou Vinicius
            </div>
            <div className="dynamic-txt">
               Desenvolvedor-web
               <br />
               {"*/"}
            </div>
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque porro corrupti excepturi earum sequi aspernatur vel quod quis impedit dicta,
               numquam voluptas, voluptatem at accusantium sed! Nulla consequuntur repudiandae perspiciatis at vero, illo quidem aspernatur odit adipisci
               possimus rem molestias quod maxime illum enim pariatur facilis? Corrupti odio amet esse! Link para meu Github:
            </p>
         </div>
         <div className="description"></div>
      </div>
   );
}

export default About;

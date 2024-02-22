import React from "react";
import { data } from "../restApi.json";
function Team  ()  {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p style={{fontFamily:'cursive',fontWeight:'bolder'}}>
            "At Urban Bites our talented chefs are culinary artisans dedicated to crafting delightful dishes that tantalize your taste buds. With a passion for quality ingredients and a commitment to culinary excellence, our chefs bring innovation and expertise to every plate"
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;

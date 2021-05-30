import { SwipeableDrawer } from "@material-ui/core";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "../dist/css/TinderCards.css";

function TinderCards() {
  const [people, setpeople] = useState([
    {
      name: "Elon Musk",
      url: "/images/elon-musk.jpg",
    },
    {
      name: "Jeff Bezos",
      url: "/images/jeff-bezos.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                className="card"
                style={{ backgroundImage: `url(${person.url})` }}
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;

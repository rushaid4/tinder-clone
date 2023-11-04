import React, { useState } from "react";
import "./TinderCards.css";
import Person from "@mui/icons-material/Person";
import TinderCard from './TinderCards';

function TinderCards() {

  const [people] = useState([
    {
      name: "Elon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
    },
    {
      name: "JeFF Bezos",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqW_F_pTbhpf6PQX52ir99edjcFocFRMNWQ&usqp=CAU"
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  }

   return (

    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard

          className ="swipe"
          key={person?.name}
          preventSwipe={["up","down"]}
          onSwipe={(dir) => swiped(dir,person.name)}
          onCardLeftScreen={() => outOfFrame(person.url)}
          >

          <div className="card"
               style={{ backgroundImage: `url($(person.imgUrl})`}}>
                <h3>{person.name}</h3>
               </div>
               </TinderCard>
        ))}
        </div>
        </div>

        );    
        }
  
 


export default TinderCards;
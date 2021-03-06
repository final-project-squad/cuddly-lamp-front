import React, { useState, useEffect } from "react";
import Plant from "./Plant";

function UserPlants(props) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getPlants(props.user);
  }, [props]);

  const getPlants = async (name) => {
    let response = await fetch("https://cuddly-lamp-back.herokuapp.com/user/usersPlants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
      }),
    });
    const data = await response.json();

    setPlants(data);
  };

  const openTaskManager = () => {
    props.setShowTask(true);
  }

  return (
    <div>

      <div className="todo-button">
        <button onClick={openTaskManager}>My Plant Planner</button>{" "}
      </div>

      <div className="searchComponents">
        {plants.map((item, index) => {
        return <Plant item={item} index={index} key={index} user= {props.user} addRemove="remove" setPlants={setPlants}/>;
      })}
      </div>

    </div>
  );
}

export default UserPlants;

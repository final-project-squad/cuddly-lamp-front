import React, { useState, useEffect } from "react";
import Plant from "./Plant";

function UserPlants(props) {
  const [plants, setPlants] = useState([]);
 console.log("test")
 console.log(props)

  useEffect(() => {
    getPlants(props.user);
  }, [props]);

  const getPlants = async (name) => {
    let response = await fetch("http://localhost:5000/user/usersPlants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
      }),
    });
    const data = await response.json()
    setPlants(data)
    // console.log (data)
  };

  

  return (
    <div>
      {plants.map((item,index) => {
        return (
          <Plant
            item={item}
            index={index}
            key={index}
        />
        );
      })}
    </div>
  );
}

export default UserPlants;

import React, { useState } from "react";

function AddCargoForm() {

  const [cargoName, setCargoName] = useState("");
  const [weight, setWeight] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const submitCargo = (e) => {
    e.preventDefault();

    const cargoData = {
      cargoName,
      weight,
      source,
      destination
    };

    console.log("Cargo submitted:", cargoData);
    alert("Cargo added successfully");
  };

  return (
    <div>
      <h2>Add Cargo</h2>

      <form onSubmit={submitCargo}>

        <input
          type="text"
          placeholder="Enter Cargo Name"
          value={cargoName}
          onChange={(e) => setCargoName(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Enter Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Source Location"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <br /><br />

        <button type="submit">Add Cargo</button>

      </form>
    </div>
  );
}

export default AddCargoForm;
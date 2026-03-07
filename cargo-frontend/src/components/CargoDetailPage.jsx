import React, { useState } from "react";

function CargoDetailPage() {

  const [cargo, setCargo] = useState({});
  const [cargoId, setCargoId] = useState("");

  const getCargoDetails = () => {
    // Dummy data
    const data = {
      cargoName: "Electronics",
      source: "Hyderabad",
      destination: "Bangalore",
      status: "In Transit",
      currentLocation: "Kurnool",
      eta: "5 Hours"
    };

    console.log(`Fetching details for cargo ${cargoId}`);
    setCargo(data);
  };

  return (
    <div>
      <h2>Cargo Details</h2>

      <input
        type="text"
        placeholder="Enter Cargo ID"
        onChange={(e) => setCargoId(e.target.value)}
      />
      <button onClick={getCargoDetails}>View Details</button>
      <br /><br />

      <p>Cargo Name: {cargo.cargoName}</p>
      <p>Source: {cargo.source}</p>
      <p>Destination: {cargo.destination}</p>
      <p>Status: {cargo.status}</p>
      <p>Current Location: {cargo.currentLocation}</p>
      <p>ETA: {cargo.eta}</p>
    </div>
  );
}

export default CargoDetailPage;
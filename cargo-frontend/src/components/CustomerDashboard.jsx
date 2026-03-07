import React, { useState } from "react";

function CustomerDashboard() {
  const [cargoId, setCargoId] = useState("");
  const [cargo, setCargo] = useState(null);

  const fetchCargo = () => {
    if (!cargoId) return alert("Enter a Cargo ID!");

    // Dummy data based on entered cargo ID
    const dummyData = {
      1: {
        cargoName: "Electronics",
        status: "In Transit",
        currentLocation: "Kurnool",
        destination: "Bangalore",
        eta: "5 Hours",
      },
      2: {
        cargoName: "Furniture",
        status: "Pending",
        currentLocation: "Hyderabad",
        destination: "Chennai",
        eta: "8 Hours",
      },
      3: {
        cargoName: "Clothes",
        status: "Delivered",
        currentLocation: "Bangalore",
        destination: "Bangalore",
        eta: "Delivered",
      },
    };

    const cargoData = dummyData[cargoId];
    if (!cargoData) {
      alert("No cargo found with this ID");
      setCargo(null);
    } else {
      setCargo(cargoData);
    }
  };

  return (
    <div>
      <h2>Customer Dashboard</h2>

      <input
        type="text"
        placeholder="Enter Cargo ID"
        value={cargoId}
        onChange={(e) => setCargoId(e.target.value)}
      />
      <button onClick={fetchCargo}>View Cargo</button>

      {cargo && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Cargo Name:</strong> {cargo.cargoName}</p>
          <p><strong>Status:</strong> {cargo.status}</p>
          <p><strong>Current Location:</strong> {cargo.currentLocation}</p>
          <p><strong>Destination:</strong> {cargo.destination}</p>
          <p><strong>ETA:</strong> {cargo.eta}</p>
        </div>
      )}
    </div>
  );
}

export default CustomerDashboard;
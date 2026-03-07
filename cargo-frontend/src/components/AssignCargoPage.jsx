import React, { useEffect, useState } from "react";

function AssignCargoPage() {

  const [cargoList, setCargoList] = useState([]);
  const [driverId, setDriverId] = useState("");

  useEffect(() => {
    // Dummy cargo data
    const data = [
      { id: 1, cargoName: "Electronics" },
      { id: 2, cargoName: "Furniture" },
      { id: 3, cargoName: "Clothes" }
    ];
    setCargoList(data);
  }, []);

  const assignDriver = (cargoId) => {
    console.log(`Assigning driver ${driverId} to cargo ${cargoId}`);
    alert(`Driver assigned successfully to cargo ${cargoId}`);
  };

  return (
    <div>
      <h2>Assign Cargo To Driver</h2>

      <input
        type="text"
        placeholder="Enter Driver ID"
        onChange={(e) => setDriverId(e.target.value)}
      />
      <br /><br />

      <ul>
        {cargoList.map((cargo) => (
          <li key={cargo.id}>
            {cargo.cargoName}
            <button onClick={() => assignDriver(cargo.id)}>Assign</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssignCargoPage;
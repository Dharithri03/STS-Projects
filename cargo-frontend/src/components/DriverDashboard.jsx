import React, { useState, useEffect } from "react";

function DriverDashboard() {
  const [cargoList, setCargoList] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    // Dummy assigned cargo data
    const data = [
      { id: 1, cargoName: "Electronics", status: "In Transit", destination: "Bangalore" },
      { id: 2, cargoName: "Furniture", status: "Pending", destination: "Chennai" },
    ];
    setCargoList(data);
  }, []);

  const updateStatus = (id, newStatus) => {
    setCargoList(cargoList.map(c =>
      c.id === id ? { ...c, status: newStatus } : c
    ));
    alert(`Cargo ${id} status updated to ${newStatus}`);
  };

  const updateLocation = (id) => {
    if (!location) return alert("Enter a location!");
    setCargoList(cargoList.map(c =>
      c.id === id ? { ...c, currentLocation: location } : c
    ));
    alert(`Cargo ${id} location updated to ${location}`);
    setLocation("");
  };

  return (
    <div>
      <h2>Driver Dashboard</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cargo</th>
            <th>Status</th>
            <th>Destination</th>
            <th>Current Location</th>
            <th>Update Status</th>
            <th>Update Location</th>
          </tr>
        </thead>
        <tbody>
          {cargoList.map(cargo => (
            <tr key={cargo.id}>
              <td>{cargo.id}</td>
              <td>{cargo.cargoName}</td>
              <td>{cargo.status}</td>
              <td>{cargo.destination}</td>
              <td>{cargo.currentLocation || "-"}</td>
              <td>
                <select onChange={(e) => updateStatus(cargo.id, e.target.value)} value={cargo.status}>
                  <option>Pending</option>
                  <option>In Transit</option>
                  <option>Delivered</option>
                </select>
              </td>
              <td>
                <input 
                  type="text" 
                  placeholder="Location" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)} 
                />
                <button onClick={() => updateLocation(cargo.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DriverDashboard;
import React from "react";

import driversFleetImg from "../assets/images/drivers-fleet.png";

function AssignDriver() {
    const drivers = [
        { name: "B.Bhavana", license: "TS-10293", rating: "4.8", status: "Active" },
        { name: "B.Suma Lakshmi", license: "KA-59302", rating: "4.9", status: "In Transit" },
        { name: "B.Anjali", license: "MH-20394", rating: "4.7", status: "Active" },
        { name: "Jaya Lakshmi", license: "DL-19203", rating: "4.6", status: "Active" },
        { name: "Ranga Thriveni", license: "AP-30294", rating: "4.5", status: "In Transit" },
        { name: "Sameera", license: "KL-59203", rating: "4.7", status: "Active" }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>👥 Fleet & Driver Management</h1>
                <p style={{ color: "#94a3b8" }}>Real-time coordination and assignment of our expert logistic drivers.</p>
            </div>

            <img src={driversFleetImg} alt="Fleet" className="hero-image" />

            <table className="shipment-table">
                <thead>
                    <tr>
                        <th>Driver Name</th>
                        <th>License ID</th>
                        <th>Safety Rating</th>
                        <th>Work Status</th>
                        <th>Assignment</th>
                    </tr>
                </thead>
                <tbody>
                    {drivers.map((driver, idx) => (
                        <tr key={idx}>
                            <td><strong>{driver.name}</strong></td>
                            <td>{driver.license}</td>
                            <td>⭐ {driver.rating}</td>
                            <td style={{ color: driver.status === "Active" ? "#4ade80" : "#fbbf24" }}>
                                {driver.status}
                            </td>
                            <td>
                                <button style={{ padding: "6px 12px", background: "#facc15", border: "none", borderRadius: "6px", color: "#0f172a", fontWeight: "bold", cursor: "pointer" }}>
                                    Assign Cargo
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default AssignDriver;
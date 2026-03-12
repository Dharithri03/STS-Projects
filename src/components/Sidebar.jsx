import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="sidebar">

      <h2>🚚 LogiTrack</h2>

      <ul>

        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828791.png" alt="Dashboard" />
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/679/679821.png" alt="Cargo" />
          <Link to="/cargolist">Manage Cargo</Link>
        </li>

        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/2554/2554922.png" alt="Add" />
          <Link to="/addcargo">New Shipment</Link>
        </li>

        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" alt="Drivers" />
          <Link to="/assign-driver">Dispatch & Drivers</Link>
        </li>

        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Track" />
          <Link to="/track-cargo">Real-time Tracking</Link>
        </li>

        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/4213/4213459.png" alt="Analytics" />
          <Link to="/analytics">Analytics Reports</Link>
        </li>

        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" />
          <Link to="/profile">User Profile</Link>
        </li>

        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/3202/3202926.png" alt="Driver App" />
          <Link to="/driver-dashboard">Driver Sync</Link>
        </li>

      </ul>

    </div>

  );

}

export default Sidebar;
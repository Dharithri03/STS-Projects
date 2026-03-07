import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// Existing components
import AddCargoForm from "./components/AddCargoForm";
import AssignCargoPage from "./components/AssignCargoPage";
import CargoDetailPage from "./components/CargoDetailPage";

// New components
import DriverDashboard from "./components/DriverDashboard";
import CustomerDashboard from "./components/CustomerDashboard";
import Notifications from "./components/Notifications";

function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cargo Management System</h2>
          <p>Business Cargo Operations</p>

          {/* Navigation Menu */}
          <nav style={{ marginTop: "20px" }}>
            <Link to="/" style={{ marginRight: "10px" }}>Add Cargo</Link>
            <Link to="/assign-cargo" style={{ marginRight: "10px" }}>Assign Cargo</Link>
            <Link to="/cargo-details" style={{ marginRight: "10px" }}>Cargo Details</Link>
            <Link to="/driver-dashboard" style={{ marginRight: "10px" }}>Driver Dashboard</Link>
            <Link to="/customer-dashboard" style={{ marginRight: "10px" }}>Customer Dashboard</Link>
            <Link to="/notifications" style={{ marginRight: "10px" }}>Notifications</Link>
          </nav>
        </header>

        <hr />

        {/* Route Sections */}
        <Routes>
          <Route path="/" element={<AddCargoForm />} />
          <Route path="/assign-cargo" element={<AssignCargoPage />} />
          <Route path="/cargo-details" element={<CargoDetailPage />} />
          <Route path="/driver-dashboard" element={<DriverDashboard />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import AddCargo from "./pages/AddCargo";
import CargoList from "./pages/CargoList";
import AssignDriver from "./pages/AssignDriver";
import TrackCargo from "./pages/TrackCargo";
import DriverDashboard from "./pages/DriverDashboard";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

function Layout() {
    const location = useLocation();

    const hideSidebar =
        location.pathname === "/" ||
        location.pathname === "/register";

    return (
        <>
            {!hideSidebar && <Sidebar />}
            <div className={!hideSidebar ? "main" : ""}>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/addcargo" element={<AddCargo />} />
                    <Route path="/cargolist" element={<CargoList />} />
                    <Route path="/assign-driver" element={<AssignDriver />} />
                    <Route path="/track-cargo" element={<TrackCargo />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/driver-dashboard" element={<DriverDashboard />} />
                </Routes>
            </div>
        </>
    );
}

function App() {

    return (

        <Router>

            <Layout />

        </Router>

    )

}

export default App;
function Profile() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>👤 User Profile</h1>
                <p style={{ color: "#94a3b8" }}>Manage your administrative settings and security preferences.</p>
            </div>

            <div className="cargo-form-container">
                <div className="form-card">
                    <div style={{ textAlign: "center", marginBottom: "30px" }}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt="Avatar"
                            style={{ width: "100px", background: "rgba(255,255,255,0.1)", padding: "10px", borderRadius: "50%" }}
                        />
                        <h2 style={{ color: "#facc15", marginTop: "15px" }}>Admin LogiTrack</h2>
                        <p style={{ color: "#94a3b8" }}>Senior Operations Manager</p>
                    </div>

                    <div className="input-group">
                        <label>Full Name</label>
                        <input type="text" defaultValue="LogiTrack Admin" />
                    </div>

                    <div className="input-group">
                        <label>Email Address</label>
                        <input type="email" defaultValue="admin@logitrack.com" />
                    </div>

                    <div className="input-group">
                        <label>Company Role</label>
                        <input type="text" defaultValue="Head of Logistics" />
                    </div>

                    <button className="submit-btn" style={{ marginTop: "20px" }}>Update Profile</button>
                </div>

                <div className="form-card">
                    <h3 style={{ color: "#facc15", marginBottom: "25px" }}>Security & Settings</h3>

                    <div className="input-group">
                        <label>Current Password</label>
                        <input type="password" placeholder="••••••••" />
                    </div>

                    <div className="input-group">
                        <label>New Password</label>
                        <input type="password" placeholder="Leave blank to keep current" />
                    </div>

                    <div className="input-group" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px", background: "rgba(15, 23, 42, 0.4)", borderRadius: "10px" }}>
                        <span>Two-Factor Authentication</span>
                        <span style={{ color: "#4ade80", fontWeight: "bold" }}>ENABLED</span>
                    </div>

                    <div className="input-group" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px", background: "rgba(15, 23, 42, 0.4)", borderRadius: "10px", marginTop: "10px" }}>
                        <span>Login Email Alerts</span>
                        <span style={{ color: "#facc15", fontWeight: "bold" }}>ON</span>
                    </div>

                    <button className="submit-btn" style={{ marginTop: "30px", background: "linear-gradient(to right, #ef4444, #dc2626)", color: "white" }}>Delete Account</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;

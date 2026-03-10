function DriverDashboard() {
    const tasks = [
        { title: "Pick-up: Steel Rods", loc: "Saphire Iron Works", time: "09:00 AM", status: "Completed" },
        { title: "Drop-off: Construction Site", loc: "Sector 5, Pune", time: "02:00 PM", status: "Active" },
        { title: "Vehicle Maintenance Check", loc: "Highway Service Stn.", time: "06:00 PM", status: "Pending" }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>📲 Driver Sync Dashboard</h1>
                <p style={{ color: "#94a3b8" }}>Real-time communication and route management hub for drivers on the road.</p>
            </div>

            <div className="cargo-form-container">
                <div className="form-card">
                    <h3 style={{ color: "#facc15", marginBottom: "20px" }}>Active Task Manifest</h3>
                    <div style={{ padding: "20px", background: "rgba(15, 23, 42, 0.4)", borderRadius: "15px", marginBottom: "20px", borderLeft: "4px solid #facc15" }}>
                        <h4 style={{ margin: "0 0 5px 0" }}>Current Route: HUB-94 to PNE-12</h4>
                        <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8" }}>Est. Time Remaining: 45 Mins</p>
                        <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
                            <button style={{ flex: 1, padding: "10px", background: "#4ade80", border: "none", borderRadius: "8px", fontWeight: "bold" }}>Complete Trip</button>
                            <button style={{ flex: 1, padding: "10px", background: "#ef4444", border: "none", borderRadius: "8px", fontWeight: "bold", color: "white" }}>Emergency SOS</button>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {tasks.map((task, idx) => (
                            <div key={idx} style={{ padding: "15px", background: "rgba(15, 23, 42, 0.2)", borderRadius: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div>
                                    <span style={{ fontSize: "12px", color: "#94a3b8" }}>{task.time}</span>
                                    <div style={{ fontWeight: "bold" }}>{task.title}</div>
                                    <div style={{ fontSize: "13px", color: "#94a3b8" }}>{task.loc}</div>
                                </div>
                                <span style={{ fontSize: "12px", padding: "4px 8px", background: task.status === "Completed" ? "rgba(34,197,94,0.1)" : "rgba(250,204,21,0.1)", color: task.status === "Completed" ? "#4ade80" : "#facc15", borderRadius: "5px", border: "1px solid" }}>{task.status}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="form-card">
                    <h3 style={{ color: "#facc15", marginBottom: "20px" }}>Communication & Compliance</h3>
                    <div className="input-group">
                        <label>Drop-off Message to Dispatch</label>
                        <textarea style={{ width: "100%", height: "100px", padding: "12px", background: "#0f172a", border: "1px solid #334155", borderRadius: "10px", color: "white", outline: "none" }} placeholder="Type your update here..." />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                        <div style={{ padding: "15px", background: "rgba(15, 23, 42, 0.4)", borderRadius: "10px", textAlign: "center" }}>
                            <div style={{ fontSize: "24px" }}>🔋</div>
                            <div style={{ fontSize: "12px", color: "#94a3b8" }}>Device Chg.</div>
                            <div style={{ fontWeight: "bold", color: "#4ade80" }}>94%</div>
                        </div>
                        <div style={{ padding: "15px", background: "rgba(15, 23, 42, 0.4)", borderRadius: "10px", textAlign: "center" }}>
                            <div style={{ fontSize: "24px" }}>📦</div>
                            <div style={{ fontSize: "12px", color: "#94a3b8" }}>Items Left</div>
                            <div style={{ fontWeight: "bold", color: "#facc15" }}>02</div>
                        </div>
                    </div>

                    <button className="submit-btn" style={{ marginTop: "30px" }}>Send Daily Manifest</button>
                </div>
            </div>
        </div>
    );
}

export default DriverDashboard;
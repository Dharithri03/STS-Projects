function Dashboard() {
    const stats = [
        { label: "Active Shipments", value: "150", icon: "📦" },
        { label: "Onboarded Drivers", value: "30", icon: "👤" },
        { label: "Operational Trucks", value: "40", icon: "🚛" },
        { label: "Delivered (MoM)", value: "120", icon: "✅" },
        { label: "Pending Requests", value: "20", icon: "⏳" },
        { label: "Global Routes", value: "18", icon: "🌐" },
        { label: "Revenue (USD)", value: "$12.4k", icon: "💰" },
        { label: "Warehouses", value: "5", icon: "🏢" }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>🚚 Logistics Command Center</h1>
                <p style={{ color: "#94a3b8" }}>Enterprise-level overview of global shipping operations and fleet status.</p>
            </div>

            <div className="cards">
                {stats.map((stat, idx) => (
                    <div className="card" key={idx}>
                        <p>{stat.label} {stat.icon}</p>
                        <h3>{stat.value}</h3>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
                <div style={{ background: "rgba(30, 41, 59, 0.7)", padding: "30px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                    <h3 style={{ color: "#facc15", marginBottom: "15px" }}>Operations Performance</h3>
                    <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                        Real-time utilization of the truck fleet is currently at 85%. Weather disruptions in the northern corridor may impact 12 pending shipments.
                    </p>
                </div>
                <div style={{ background: "rgba(30, 41, 59, 0.7)", padding: "30px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.1)", textAlign: "center" }}>
                    <h3 style={{ color: "#facc15", marginBottom: "5px" }}>4.9/5</h3>
                    <p style={{ color: "#94a3b8", fontSize: "12px" }}>Fleet Safety Rating</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
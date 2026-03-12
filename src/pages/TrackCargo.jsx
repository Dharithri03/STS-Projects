import trackingMapImg from "../assets/images/tracking-map.png";

function TrackCargo() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>🛰️ Real-time Tracking</h1>
                <p style={{ color: "#94a3b8" }}>Monitor your fleet and cargo shipments globally with GPS precision.</p>
            </div>

            <div className="cargo-form-container">
                <div className="form-card">
                    <h3 style={{ color: "#facc15", marginBottom: "20px" }}>Track Shipment</h3>
                    <div className="input-group">
                        <label>Consignment Number</label>
                        <input type="text" placeholder="e.g. LOG-93021-X" />
                    </div>

                    <div style={{ padding: "20px", background: "rgba(15, 23, 42, 0.4)", borderRadius: "10px", marginTop: "20px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                            <span style={{ color: "#94a3b8" }}>Last Known Location:</span>
                            <span style={{ fontWeight: "bold" }}>Mumbai Hub (MH-2)</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0" }}>
                            <span style={{ color: "#94a3b8" }}>Signal Strength:</span>
                            <span style={{ color: "#4ade80", fontWeight: "bold" }}>EXCELLENT (5G)</span>
                        </div>
                    </div>

                    <button className="submit-btn" style={{ marginTop: "30px" }}>Fetch Live Location</button>
                </div>

                <img src={trackingMapImg} alt="Map" style={{ width: "100%", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }} />
            </div>

            <div style={{ marginTop: "30px", background: "rgba(30, 41, 59, 0.5)", padding: "20px", borderRadius: "15px" }}>
                <h4 style={{ margin: "0 0 10px 0", color: "#facc15" }}>Live Telemetry Active</h4>
                <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8" }}>
                    Fleet signals are refreshed every 2 seconds. Environmental sensors (temp/humidity) are currently within optimal range for all fragile cargo.
                </p>
            </div>
        </div>
    );
}

export default TrackCargo;
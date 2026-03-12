import addCargoImg from "../assets/images/add-cargo.png";

function AddCargo() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>🚛 Register New Shipment</h1>
                <p style={{ color: "#94a3b8" }}>Create a detailed manifest for incoming cargo dispatch.</p>
            </div>

            <div className="cargo-form-container">
                <div className="form-card">
                    <div className="input-group">
                        <label>Cargo Title</label>
                        <input type="text" placeholder="e.g. Industrial Steel Roll" />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                        <div className="input-group">
                            <label>Origin</label>
                            <input type="text" placeholder="City" />
                        </div>
                        <div className="input-group">
                            <label>Destination</label>
                            <input type="text" placeholder="City" />
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                        <div className="input-group">
                            <label>Weight (kg)</label>
                            <input type="number" placeholder="0.0" />
                        </div>
                        <div className="input-group">
                            <label>Shipment Type</label>
                            <input type="text" placeholder="Fragile, Hazard, etc." />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Customer Details</label>
                        <input type="text" placeholder="Full Name" />
                    </div>

                    <div className="input-group">
                        <label>Estimated Arrival Date</label>
                        <input type="date" />
                    </div>

                    <div className="input-group">
                        <label>Transit Priority</label>
                        <select style={{ width: "100%", padding: "12px", background: "#0f172a", border: "1px solid #334155", borderRadius: "10px", color: "white" }}>
                            <option>Standard</option>
                            <option>Express</option>
                            <option>Overnight</option>
                        </select>
                    </div>

                    <button className="submit-btn" style={{ marginTop: "20px" }}>Register Manifest</button>
                </div>

                <div className="form-image-side">
                    <img
                        src={addCargoImg}
                        alt="Logistic Truck"
                        style={{ width: "100%", borderRadius: "20px", height: "auto", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }}
                    />
                    <div style={{ background: "rgba(30, 41, 59, 0.5)", padding: "20px", borderRadius: "15px", marginTop: "20px" }}>
                        <h4 style={{ margin: "0 0 10px 0", color: "#facc15" }}>LogiTrack Pro-Tip</h4>
                        <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
                            Ensure all hazard labels are correctly identified for industrial shipments to avoid customs delays.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCargo;
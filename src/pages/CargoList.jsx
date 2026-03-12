import cargoListImg from "../assets/images/cargo-list.png";

function CargoList() {
    const shipments = [
        { id: "101", route: "Hyderabad → Bangalore", status: "Delivered", class: "status-delivered" },
        { id: "102", route: "Chennai → Mumbai", status: "In Transit", class: "status-transit" },
        { id: "103", route: "Delhi → Pune", status: "Pending", class: "status-pending" },
        { id: "104", route: "Kolkata → Hyderabad", status: "Delivered", class: "status-delivered" },
        { id: "105", route: "Bangalore → Goa", status: "In Transit", class: "status-transit" },
        { id: "106", route: "Chennai → Delhi", status: "Pending", class: "status-pending" },
        { id: "107", route: "Pune → Hyderabad", status: "Delivered", class: "status-delivered" }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>📦 Cargo Shipments</h1>
                <p style={{ color: "#94a3b8" }}>Real-time overview of all active and completed deliveries.</p>
            </div>

            <img src={cargoListImg} alt="Logistics" className="hero-image" />

            <table className="shipment-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Route / Destination</th>
                        <th>Current Status</th>
                        <th>Arrival (Est.)</th>
                    </tr>
                </thead>
                <tbody>
                    {shipments.map((item) => (
                        <tr key={item.id}>
                            <td><strong>#{item.id}</strong></td>
                            <td>{item.route}</td>
                            <td>
                                <span className={`status-badge ${item.class}`}>{item.status}</span>
                            </td>
                            <td>12 Oct 2026</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CargoList;
import analyticsHero from "../assets/images/analytics-hero.png";

function Analytics() {
    const reports = [
        { title: "Monthly Delivery Success", change: "+12%", value: "98.2%" },
        { title: "Avg. Transit Time", change: "-5h", value: "2.4 Days" },
        { title: "Fuel Consumption Optimization", change: "-8%", value: "14.2k Liters" },
        { title: "Driver Performance Index", change: "+4%", value: "4.8/5" }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>📊 Logistics Analytics</h1>
                <p style={{ color: "#94a3b8" }}>Deep-dive analysis of your shipping operations and fleet efficiency.</p>
            </div>

            <img src={analyticsHero} alt="Analytics" className="hero-image" />

            <div className="cards">
                {reports.map((report, idx) => (
                    <div className="card" key={idx}>
                        <p>{report.title}</p>
                        <h3>{report.value}</h3>
                        <span style={{ color: report.change.startsWith("+") ? "#4ade80" : "#fbbf24", fontSize: "14px", fontWeight: "bold" }}>
                            {report.change} vs Last Month
                        </span>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: "40px", background: "rgba(30, 41, 59, 0.7)", padding: "30px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <h3 style={{ color: "#facc15", marginBottom: "20px" }}>Strategic Performance Summary</h3>
                <p style={{ color: "#94a3b8", lineHeight: "1.6" }}>
                    Current data indicates a strong upward trend in delivery punctuality across the Northern region.
                    The integration of the new AI route optimizer has successfully reduced average transit times by 5 hours per long-haul shipment.
                    Recommendation: Allocate more drivers to the South-East corridor for the upcoming festive season to maintain the 98% success rate.
                </p>
            </div>
        </div>
    );
}

export default Analytics;

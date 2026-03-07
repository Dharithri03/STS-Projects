import React, { useState } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Cargo #1 has been dispatched", read: false },
    { id: 2, message: "Cargo #2 assigned to driver", read: false },
  ]);
  const [showDropdown, setShowDropdown] = useState(false);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div>
      <h2>Notifications</h2>
      <div style={{ position: "relative", display: "inline-block" }}>
        <button onClick={() => setShowDropdown(!showDropdown)}>
          🔔 {unreadCount > 0 ? `(${unreadCount})` : ""}
        </button>
        {showDropdown && (
          <div style={{ position: "absolute", border: "1px solid gray", background: "#fff", padding: "10px" }}>
            {notifications.map(n => (
              <div key={n.id} style={{ marginBottom: "5px" }}>
                {n.message} {n.read ? "(Read)" : "(New)"}
                {!n.read && <button onClick={() => markAsRead(n.id)}>Mark Read</button>}
              </div>
            ))}
          </div>
        )}
      </div>

      <h3>Inbox</h3>
      <ul>
        {notifications.map(n => (
          <li key={n.id}>{n.message} {n.read ? "(Read)" : "(New)"}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
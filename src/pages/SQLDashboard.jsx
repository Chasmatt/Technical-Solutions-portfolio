import React, { useEffect, useState, useRef } from "react";
import initSqlJs from "sql.js";


const SQLDashboard = () => {
    const [db, setDb] = useState(null);
    const [ready, setReady] = useState(false);

    // Form state
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("Low");
    const [status, setStatus] = useState("Open");
    const [assignedTo, setAssignedTo] = useState("");

    // Tickets array
    const [tickets, setTickets] = useState([]);

    // Edit mode
    const [editingId, setEditingId] = useState(null);

    // MOBILE DETECTION
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // Title ref for auto-focus
    const titleRef = useRef(null);

    // Initialize SQLite DB
    useEffect(() => {
        const loadDb = async () => {
            try {
                const SQL = await initSqlJs({
                    locateFile: (file) => `https://sql.js.org/dist/${file}`,
                });

                const database = new SQL.Database();

                database.run(`
          CREATE TABLE IF NOT EXISTS tickets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            priority TEXT,
            status TEXT,
            assigned_to TEXT
          );
        `);

                setDb(database);
                setReady(true);
            } catch (error) {
                console.error("Error loading SQL.js:", error);
            }
        };

        loadDb();
    }, []);

    // Load tickets
    const loadTickets = () => {
        if (!db) return;

        const result = db.exec("SELECT * FROM tickets");

        if (result.length === 0) {
            setTickets([]);
            return;
        }

        const values = result[0].values;
        const columns = result[0].columns;

        const formatted = values.map((row) => {
            const obj = {};
            columns.forEach((col, index) => {
                obj[col] = row[index];
            });
            return obj;
        });

        setTickets(formatted);
    };

    useEffect(() => {
        if (ready) loadTickets();
    }, [ready]);

    // Create
    const createTicket = () => {
        if (!db) return;

        db.run(
            `
      INSERT INTO tickets (title, priority, status, assigned_to)
      VALUES (?, ?, ?, ?)
      `,
            [title, priority, status, assignedTo]
        );

        resetForm();
        loadTickets();
    };

    // Begin editing
    const startEditing = (ticket) => {
        setEditingId(ticket.id);
        setTitle(ticket.title);
        setPriority(ticket.priority);
        setStatus(ticket.status);
        setAssignedTo(ticket.assigned_to);

        setTimeout(() => {
            titleRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
            titleRef.current?.focus();
        }, 150);
    };

    // Update
    const updateTicket = () => {
        if (!db) return;

        db.run(
            `
      UPDATE tickets
      SET title = ?, priority = ?, status = ?, assigned_to = ?
      WHERE id = ?
      `,
            [title, priority, status, assignedTo, editingId]
        );

        resetForm();
        loadTickets();
    };

    // Delete
    const deleteTicket = (id) => {
        if (!db) return;

        db.run("DELETE FROM tickets WHERE id = ?", [id]);

        // Clear form if user was editing
        resetForm();

        loadTickets();
    };

    // Reset form
    const resetForm = () => {
        setEditingId(null);
        setTitle("");
        setPriority("Low");
        setStatus("Open");
        setAssignedTo("");
    };

    return (
        <div style={{ padding: "2rem" }}>
           

            <h1>SQL Interactive Dashboard</h1>

            {!ready && <p>Initializing database...</p>}
            {ready && <p>CRUD ready</p>}

            {/* MOBILE-FRIENDLY LAYOUT FIX */}
            <div
                style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: "2rem",
                    marginTop: "2rem",
                    alignItems: "stretch",
                    width: "100%",
                }}
            >
                {/* LEFT — FORM CARD */}
                <div
                    style={{
                        flex: 1,
                        padding: "2rem",
                        backgroundColor: "#f3f4f6",
                        borderRadius: "12px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        maxWidth: "600px",
                        width: "100%",
                    }}
                >
                    <h2 style={{ marginBottom: "1rem" }}>
                        {editingId ? "Edit Ticket" : "Create New Ticket"}
                    </h2>

                    {/* TITLE */}
                    <div style={{ marginTop: "1.25rem" }}>
                        <label style={{ fontWeight: 600 }}>Title:</label>
                        <input
                            ref={titleRef}
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{
                                ...inputStyle,
                                border: editingId ? "2px solid #FF9325" : inputStyle.border,
                                transition: "border 0.2s ease",
                            }}
                        />
                    </div>

                    {/* PRIORITY */}
                    <div style={{ marginTop: "1.25rem" }}>
                        <label style={{ fontWeight: 600 }}>Priority:</label>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            style={inputStyle}
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Critical</option>
                        </select>
                    </div>

                    {/* STATUS */}
                    <div style={{ marginTop: "1.25rem" }}>
                        <label style={{ fontWeight: 600 }}>Status:</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            style={inputStyle}
                        >
                            <option>Open</option>
                            <option>In Progress</option>
                            <option>Resolved</option>
                            <option>Closed</option>
                        </select>
                    </div>

                    {/* ASSIGNED TO */}
                    <div style={{ marginTop: "1.25rem" }}>
                        <label style={{ fontWeight: 600 }}>Assigned To:</label>
                        <input
                            type="text"
                            value={assignedTo}
                            onChange={(e) => setAssignedTo(e.target.value)}
                            style={inputStyle}
                        />
                    </div>

                    {/* BUTTONS */}
                    {editingId ? (
                        <button onClick={updateTicket} style={editButtonStyle}>
                            Save Changes
                        </button>
                    ) : (
                        <button onClick={createTicket} style={createButtonStyle}>
                            Create Ticket
                        </button>
                    )}
                </div>

                {/* RIGHT — TICKETS TABLE */}
                <div
                    style={{
                        flex: 1,
                        backgroundColor: "#fff",
                        padding: "1.5rem",
                        borderRadius: "12px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        width: "100%",
                        overflowX: isMobile ? "auto" : "visible",
                    }}
                >
                    <h2>All Tickets</h2>

                    {tickets.length === 0 ? (
                        <p style={{ marginTop: "1rem" }}>No tickets available.</p>
                    ) : (
                        <table
                            style={{
                                width: "100%",
                                minWidth: isMobile ? "600px" : "100%",
                                marginTop: "1rem",
                                borderCollapse: "collapse",
                            }}
                        >
                            <thead>
                                <tr>
                                    {[
                                        "ID",
                                        "Title",
                                        "Priority",
                                        "Status",
                                        "Assigned To",
                                        "Actions",
                                    ].map((header) => (
                                        <th
                                            key={header}
                                            style={{
                                                borderBottom: "2px solid #ddd",
                                                padding: "0.75rem",
                                                textAlign: "left",
                                            }}
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {tickets.map((ticket) => (
                                    <tr key={ticket.id}>
                                        <td style={cellStyle}>{ticket.id}</td>
                                        <td style={cellStyle}>{ticket.title}</td>
                                        <td style={cellStyle}>{ticket.priority}</td>
                                        <td style={cellStyle}>{ticket.status}</td>
                                        <td style={cellStyle}>{ticket.assigned_to}</td>
                                        <td
                                            style={{
                                                padding: "0.75rem",
                                                borderBottom: "1px solid #eee",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "0.5rem",
                                                }}
                                            >
                                                <button
                                                    onClick={() => startEditing(ticket)}
                                                    style={grayEditButton}
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={() => deleteTicket(ticket.id)}
                                                    style={deleteButtonStyle}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    marginTop: "0.5rem",
    backgroundColor: "#ffffff",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.08)",
};

const createButtonStyle = {
    marginTop: "1.75rem",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    fontWeight: 600,
    background:
        "linear-gradient(90deg, #ffce83, #ffc47a, #ffb971, #ffa850, #ff9325)",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#111",
};

const editButtonStyle = {
    marginTop: "1.75rem",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    fontWeight: 600,
    backgroundColor: "#6b7280", // GRAY FOR EDIT
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
};

const grayEditButton = {
    padding: "0.5rem 1rem",
    backgroundColor: "#6b7280", // GRAY
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
};

const deleteButtonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
};

const cellStyle = {
    padding: "0.75rem",
    borderBottom: "1px solid #eee",
};

export default SQLDashboard;

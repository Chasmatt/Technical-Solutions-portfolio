import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const Projects = () => {
    const [activeVideoId, setActiveVideoId] = useState(null);

    // MOBILE DETECTION
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Click-to-expand state (for mobile)
    const [openPanel, setOpenPanel] = useState({ projectId: null, panel: null });

    const handleToggleMobilePanel = (projectId, panel) => {
        if (openPanel.projectId === projectId && openPanel.panel === panel) {
            setOpenPanel({ projectId: null, panel: null });
        } else {
            setOpenPanel({ projectId, panel });
        }
    };

    const projects = [
        {
            id: 1,
            title: "Mobile App / Student Course & Term Tracker",
            videoSrc: "/videos/Project1.mp4",
            techStack: [
                ".NET MAUI", "C#", "SQLite", "MVVM", "XAML", "Mobile UI"
            ],
            description:
                "Built a cross-platform mobile app to track student terms, courses, and assessments. Implemented full local data storage with SQLite and full CRUD functionality. Designed a responsive, multi-page interface using XAML and MVVM for clean, scalable architecture.",
        },
        {
            id: 2,
            title: "JavaScript / TypeScript World Data Dashboard",
            videoSrc: "/videos/Project2.mp4",
            techStack: [
                "Angular", "TypeScript", "JavaScript", "HTML", "CSS/SCSS", "SVG", "World Bank API"
            ],
            description:
                "Built an interactive Angular web app integrating the World Bank API and an SVG world map to display real-time economic and country-level data.",
        },
        {
            id: 3,
            title: "Scheduling Desktop Application (C# / WinForms)",
            videoSrc: "/videos/Project3.mp4",
            techStack: [
                "C#", ".NET", "Windows Forms", "MySQL", "Visual Studio", "Localization"
            ],
            description:
                "Developed a scheduling system supporting appointment and client management with MySQL integration. Implemented localization and time zone conversions for global usability.",
        },
        {
            id: 4,
            title: "Data Management & Reporting Project",
            videoSrc: "/videos/Project4.mp4",
            techStack: ["MySQL", "SQL", "Data Cleaning", "Data Reporting"],
            description:
                "Developed SQL-based reports and visualizations to analyze monthly rental revenue by film category.",
        },
    ];

    return (
       
        <div style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
            

            <h1
                style={{
                    textAlign: "center",
                    marginBottom: "2rem",
                    fontSize: "2.5rem",
                    fontWeight: "700",
                }}
            >
                My Projects
            </h1>

            {/* SQL DASHBOARD BUTTON */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <Link to="/projects/sql">
                    <button
                        style={{
                            padding: "0.75rem 1.5rem",
                            fontSize: "1rem",
                            fontWeight: 600,
                            background:
                                "linear-gradient(90deg, #ffce83, #ffc47a, #ffb971, #ffa850, #ff9325)",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            color: "#111",
                            boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                        }}
                    >
                        Open SQL Interactive Dashboard
                    </button>
                </Link>
            </div>

            {projects.map((project) => {
                const showDescriptionDesktop =
                    !isMobile &&
                    openPanel.projectId === project.id &&
                    openPanel.panel === "description";

                const showTechDesktop =
                    !isMobile &&
                    openPanel.projectId === project.id &&
                    openPanel.panel === "tech";

                const showDescriptionMobile =
                    isMobile &&
                    openPanel.projectId === project.id &&
                    openPanel.panel === "description";

                const showTechMobile =
                    isMobile &&
                    openPanel.projectId === project.id &&
                    openPanel.panel === "tech";

                return (
                    <div
                        key={project.id}
                        style={{
                            marginBottom: "4rem",
                            padding: "2rem",
                            backgroundColor: "#fff",
                            borderRadius: "12px",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        }}
                    >
                        {/* TITLE */}
                        <h2
                            style={{
                                textAlign: "center",
                                fontSize: "1.75rem",
                                marginBottom: "1rem",
                                color: "#111827",
                            }}
                        >
                            {project.title}
                        </h2>

                        {/* VIDEO */}
                        <div style={{ marginBottom: "1.5rem" }}>
                            {activeVideoId === project.id ? (
                                <video
                                    controls
                                    style={{
                                        width: "100%",
                                        borderRadius: "12px",
                                        boxShadow: "0px 8px 24px rgba(0,0,0,0.20)",
                                    }}
                                >
                                    <source src={project.videoSrc} type="video/mp4" />
                                </video>
                            ) : (
                                <div
                                    onClick={() => setActiveVideoId(project.id)}
                                    style={{
                                        width: "100%",
                                        height: isMobile ? "200px" : "260px",
                                        borderRadius: "12px",
                                        background:
                                            "linear-gradient(135deg, #111827, #4b5563, #111827)",
                                        boxShadow: "0px 8px 24px rgba(0,0,0,0.25)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        position: "relative",
                                    }}
                                >
                                    <span
                                        style={{
                                            position: "absolute",
                                            top: "1rem",
                                            left: "1.5rem",
                                            color: "#e5e7eb",
                                            fontSize: "0.85rem",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Tap to Play Demo
                                    </span>
                                    <div
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            borderRadius: "50%",
                                            border: "2px solid rgba(255,255,255,0.8)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <div
                                            style={{
                                                marginLeft: "4px",
                                                width: 0,
                                                height: 0,
                                                borderTop: "12px solid transparent",
                                                borderBottom: "12px solid transparent",
                                                borderLeft: "20px solid white",
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* TABS */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "1.5rem",
                                marginBottom: "1rem",
                                flexWrap: "wrap",
                            }}
                        >
                            <span
                                onClick={() =>
                                    isMobile
                                        ? handleToggleMobilePanel(project.id, "description")
                                        : setOpenPanel({ projectId: project.id, panel: "description" })
                                }
                                style={{
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    color: "#111827",
                                }}
                            >
                                Description
                            </span>

                            <span
                                onClick={() =>
                                    isMobile
                                        ? handleToggleMobilePanel(project.id, "tech")
                                        : setOpenPanel({ projectId: project.id, panel: "tech" })
                                }
                                style={{
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    color: "#111827",
                                }}
                            >
                                Tech Stack
                            </span>
                        </div>

                        {/* CONTENT PANEL */}
                        {(showDescriptionMobile || showTechMobile || showDescriptionDesktop || showTechDesktop) && (
                            <div
                                style={{
                                    backgroundColor: "#f9fafb",
                                    padding: "1.25rem",
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                                }}
                            >
                                {/* MOBILE / DESKTOP DESCRIPTION */}
                                {(showDescriptionMobile || showDescriptionDesktop) && (
                                    <p style={{ margin: 0 }}>{project.description}</p>
                                )}

                                {/* MOBILE / DESKTOP TECH */}
                                {(showTechMobile || showTechDesktop) && (
                                    <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
                                        {project.techStack.map((tech) => (
                                            <li key={tech}>{tech}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Projects;

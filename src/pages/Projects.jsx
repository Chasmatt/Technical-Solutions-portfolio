import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


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
            id: 5,
            title: "Silo — Food & Beverage Inventory Platform",
            videoSrc: "/videos/silo.mp4",
            repoUrl: "https://github.com/Chasmatt/Silo_BOH-Inventory-Management",
            techStack: [
                "ASP.NET Core 8", "C#", "React 18", "PostgreSQL", "AWS (EC2 + RDS)",
                "Entity Framework Core", "JWT Authentication", "xUnit", "Anthropic Claude API",
                "Event Sourcing", "Nginx", "systemd"
            ],
            description:
                "Full-stack inventory management platform for multi-location restaurants. Features an immutable event-sourced ledger, multi-branch design with branch-scoped JWT claims, and a BFS-based unit conversion engine that handles cross-category conversions (jars → ounces, cases → pounds). AI-driven allergen detection via the Anthropic Claude API auto-scans every new item for FDA Big 9 allergens. Deployed on AWS EC2 + RDS behind Nginx with systemd-managed .NET service. 92 unit + 41 integration tests (xUnit).",
        },
        {
            id: 6,
            title: "Athlete Connection — Sports Agency Website",
            liveUrl: "https://athleteconnectionsportsgroup.netlify.app",
            repoUrl: "https://github.com/Chasmatt/athlete_connection",
            techStack: [
                "Astro 5", "Tailwind CSS", "TypeScript", "Netlify", "Netlify Forms",
                "Static Site Generation", "Responsive Design"
            ],
            description:
                "Marketing website for a boutique basketball sports agency, connecting high-school, college, and professional players with representation and career development. Built with Astro 5 (zero-JS by default) and Tailwind CSS for fast Core Web Vitals. Contact form uses Netlify's native form handling with a honeypot for bot protection. Continuously deployed to Netlify on every push to main.",
        },
        {
            id: 1,
            title: "Mobile App / Student Course & Term Tracker",
            videoSrc: "/videos/Project1.mp4",
            repoUrl: "https://github.com/Chasmatt/term-tracker-mobile",
            techStack: [
                ".NET MAUI", "C#", "SQLite", "MVVM", "XAML", "Cross-Platform (Android + iOS)", "Local Notifications"
            ],
            description:
                "Cross-platform mobile app for tracking academic terms, courses, and assessments. Local-first with SQLite persistence and native notifications on term/course/assessment dates. Built with .NET MAUI + MVVM for clean separation between UI (XAML) and data services. Ships to both Android and iOS from a single codebase.",
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

                        {/* VIDEO OR LINK CARD */}
                        <div style={{ marginBottom: "1.5rem" }}>
                            {project.videoSrc ? (
                                activeVideoId === project.id ? (
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
                                )
                            ) : (
                                <div
                                    style={{
                                        width: "100%",
                                        height: isMobile ? "200px" : "260px",
                                        boxSizing: "border-box",
                                        borderRadius: "12px",
                                        background:
                                            "linear-gradient(135deg, #111827, #4b5563, #111827)",
                                        boxShadow: "0px 8px 24px rgba(0,0,0,0.25)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "1rem",
                                        padding: "2rem 1.5rem",
                                        textAlign: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: "#e5e7eb",
                                            fontSize: "0.85rem",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.1em",
                                        }}
                                    >
                                        Live Project
                                    </span>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "0.75rem",
                                            flexWrap: "wrap",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    padding: "0.75rem 1.25rem",
                                                    fontSize: "0.95rem",
                                                    fontWeight: 600,
                                                    color: "#111827",
                                                    background:
                                                        "linear-gradient(90deg, #ffce83, #ffc47a, #ffb971, #ffa850, #ff9325)",
                                                    borderRadius: "8px",
                                                    textDecoration: "none",
                                                    boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                                                }}
                                            >
                                                Visit Live Site &rarr;
                                            </a>
                                        )}
                                    </div>
                                    {!project.liveUrl && (
                                        <span
                                            style={{
                                                color: "#9ca3af",
                                                fontSize: "0.8rem",
                                                fontStyle: "italic",
                                            }}
                                        >
                                            Live deployment is private (AWS) &mdash; source and full details on GitHub
                                        </span>
                                    )}
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
                                    padding: "1.25rem",
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",

                                    // RESPONSIVE COLORING
                                    backgroundColor:
                                        window.matchMedia("(prefers-color-scheme: dark)").matches
                                            ? "#1f2937" // dark gray
                                            : "#f9fafb", // light gray

                                    color:
                                        window.matchMedia("(prefers-color-scheme: dark)").matches
                                            ? "#f3f4f6" // light text for dark mode
                                            : "#374151", // dark text for light mode

                                    lineHeight: "1.7rem",
                                }}
                            >
                                {/* DESCRIPTION */}
                                {(showDescriptionMobile || showDescriptionDesktop) && (
                                    <p style={{ margin: 0 }}>{project.description}</p>
                                )}

                                {/* TECH STACK */}
                                {(showTechMobile || showTechDesktop) && (
                                    <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
                                        {project.techStack.map((tech) => (
                                            <li key={tech}>{tech}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>


                        )}

                        {/* GITHUB LINK */}
                        {project.repoUrl && (
                            <div
                                style={{
                                    marginTop: "1rem",
                                    textAlign: "center",
                                    fontSize: "0.9rem",
                                    color: "#6b7280",
                                }}
                            >
                                <strong style={{ color: "#111827" }}>GitHub:</strong>{" "}
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "#FF9325",
                                        textDecoration: "none",
                                        wordBreak: "break-all",
                                    }}
                                >
                                    {project.repoUrl}
                                </a>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Projects;

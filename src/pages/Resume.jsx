import React from "react";
import html2pdf from "html2pdf.js";


const Resume = () => {
    const pageBreakFix = `
        <style>
            /* Prevent list items from splitting across PDF pages */
            li {
                page-break-inside: avoid;
                break-inside: avoid;
            }

            p, h1, h2, h3, h4, h5, h6 {
                page-break-inside: avoid;
                break-inside: avoid;
            }

            /* Ensure sections do not split awkwardly */
            section {
                page-break-inside: avoid;
                break-inside: avoid;
            }
        </style>
    `;

    const generatePDF = () => {
        const element = document.getElementById("resume-content").cloneNode(true);
        element.insertAdjacentHTML("afterbegin", pageBreakFix);


        const options = {
            margin: 0.5,
            filename: "ChasityMatthiasResume.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
        };

        html2pdf().set(options).from(element).save();
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "2rem",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "900px",
                    margin: "0 auto",
                    position: "relative",
                }}
            >
                

                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "2rem",
                        fontSize: "clamp(2rem, 4vw, 2.5rem)",
                        fontWeight: "700",
                    }}
                >
                    My Resume
                </h1>

                {/* DOWNLOAD BUTTON */}
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <button
                        onClick={generatePDF}
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
                            textDecoration: "none",
                            boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                            display: "inline-block",
                            width: "clamp(180px, 40%, 260px)",
                        }}
                    >
                        Download PDF Resume
                    </button>

                </div>

                {/* RESUME CONTAINER */}
                <div
                    id="resume-content"
                    style={{
                        backgroundColor: "#ffffff",
                        padding: "2rem",
                        borderRadius: "12px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        lineHeight: "1.8rem",
                        color: "#374151",
                        fontSize: "clamp(0.95rem, 1.2vw, 1rem)",
                        boxSizing: "border-box",
                        width: "100%",
                    }}
                >
                    {/* SUMMARY */}
                    <section style={{ marginBottom: "2rem" }}>
                        <h2 style={{ color: "#FF9325", fontSize: "1.5rem" }}>Professional Summary</h2>
                        <p>
                            Full-stack Software Engineer with a Bachelor&rsquo;s in Software Engineering and 8+
                            years of production software experience. I design and ship end-to-end applications
                            &mdash; from event-sourced backend services in ASP.NET Core and modern React and
                            Astro front-ends to cross-platform .NET MAUI mobile apps and AWS deployments on
                            EC2 and RDS. My recent work includes Silo, a food and beverage inventory platform
                            with an immutable inventory ledger, a multi-branch architecture, and AI-powered
                            allergen detection integrated with the Anthropic Claude API &mdash; deployed on AWS
                            and supported by 92 unit tests and 41 integration tests.
                            <br /><br />
                            Years of customer-facing software support shape the way I engineer today: I
                            understand how software behaves outside the development environment, how failures
                            affect users, and why maintainability, observability, and operational readiness
                            matter from day one.
                        </p>
                    </section>

                    {/* TECHNICAL SKILLS */}
                    <section style={{ marginBottom: "2rem" }}>
                        <h2 style={{ color: "#FF9325", fontSize: "1.5rem" }}>Technical Skills</h2>
                        <ul style={{ paddingLeft: "1.25rem" }}>
                            <li><strong>Languages:</strong> C#, JavaScript, TypeScript, Python, SQL, HTML, CSS, XAML</li>
                            <li><strong>Back-End:</strong> ASP.NET Core 8, .NET 8, Entity Framework Core, REST API design, JWT authentication, Node.js</li>
                            <li><strong>Front-End:</strong> React 18, Astro 5, Angular, Vite, Tailwind CSS, Framer Motion</li>
                            <li><strong>Mobile:</strong> .NET MAUI (Android + iOS), MVVM, local notifications</li>
                            <li><strong>Databases:</strong> PostgreSQL, MySQL, SQLite, DBeaver</li>
                            <li><strong>Cloud & DevOps:</strong> AWS (EC2, RDS), Nginx, systemd, Netlify, GitHub Actions, CI/CD</li>
                            <li><strong>Testing:</strong> xUnit, unit & integration testing, Postman</li>
                            <li><strong>Tools & Integrations:</strong> GitHub, Jira, Datadog, Visual Studio, Bash, Figma, Anthropic Claude API</li>
                            <li><strong>Certifications:</strong> AWS Certified Cloud Practitioner, Front-End Developer, ITIL, CompTIA Project+</li>
                        </ul>
                    </section>

                    {/* EDUCATION */}
                    <section style={{ marginBottom: "2rem" }}>
                        <h2 style={{ color: "#FF9325", marginBottom: "1rem", fontSize: "1.5rem" }}>
                            Education
                        </h2>

                        <div style={{ marginBottom: "1.25rem" }}>
                            <h3>Bachelor of Science, Software Engineering</h3>
                            <p style={{ margin: 0, fontStyle: "italic" }}>
                                Graduated: December 2025
                            </p>
                            <p style={{ marginTop: "0.15rem" }}>
                                Western Governors University | Salt Lake City, UT
                            </p>
                        </div>

                        <div>
                            <h3>Associate of Science, Health Information Technology</h3>
                            <p style={{ margin: 0, fontStyle: "italic" }}>Graduated: May 2016</p>
                            <p style={{ marginTop: "0.15rem" }}>
                                Ivy Tech Community College | Indianapolis, IN
                            </p>
                        </div>
                    </section>

                    {/* PROJECTS */}
                    <section style={{ marginBottom: "2rem" }}>
                        <h2 style={{ color: "#FF9325", marginBottom: "1rem", fontSize: "1.5rem" }}>
                            Projects
                        </h2>

                        {/* PROJECT: SILO */}
                        <div style={{ marginBottom: "1.5rem" }}>
                            <h3>Silo &mdash; Food & Beverage Inventory Platform</h3>
                            <p style={{ margin: 0, fontStyle: "italic" }}>
                                Solo-built, deployed to AWS &middot; github.com/Chasmatt/Silo_BOH-Inventory-Management
                            </p>
                            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                                <li>
                                    Full-stack inventory platform for multi-location restaurants; ASP.NET Core 8 +
                                    Entity Framework Core backend, React 18 + Vite frontend, PostgreSQL on AWS RDS,
                                    hosted on EC2 behind Nginx.
                                </li>
                                <li>
                                    Designed an immutable event-sourced inventory ledger &mdash; a single
                                    <code> IInventoryEvent</code> interface unifies five distinct workflows
                                    (bulk prep, invoice commits, waste, transfers, station prep).
                                </li>
                                <li>
                                    Built a BFS-based unit conversion engine handling cross-category conversions
                                    (jars &rarr; ounces, cases &rarr; pounds) via ingredient-specific overrides.
                                </li>
                                <li>
                                    Wrote a recursive recipe cost engine that rolls up sub-recipes and divides
                                    by batch yield for per-portion cost.
                                </li>
                                <li>
                                    Integrated the Anthropic Claude API for AI-powered allergen detection using a
                                    fire-and-forget pattern so the AI call never blocks a user commit.
                                </li>
                                <li>
                                    <strong>92 unit tests + 41 integration tests</strong> (xUnit), covering services,
                                    cost engine, unit conversion, and end-to-end HTTP flows.
                                </li>
                            </ul>
                        </div>

                        {/* PROJECT: ATHLETE CONNECTION */}
                        <div style={{ marginBottom: "1.5rem" }}>
                            <h3>Athlete Connection &mdash; Sports Agency Website</h3>
                            <p style={{ margin: 0, fontStyle: "italic" }}>
                                Deployed to Netlify &middot; athleteconnectionsportsgroup.netlify.app
                            </p>
                            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                                <li>
                                    Marketing site for a boutique basketball sports agency; static-generated
                                    Astro 5 + Tailwind CSS for fast Core Web Vitals.
                                </li>
                                <li>
                                    Implemented Netlify Forms with honeypot bot protection; continuously deployed
                                    on every push to main via GitHub &rarr; Netlify integration.
                                </li>
                            </ul>
                        </div>

                        {/* PROJECT: TERM TRACKER */}
                        <div>
                            <h3>Term Tracker &mdash; Cross-Platform Mobile App</h3>
                            <p style={{ margin: 0, fontStyle: "italic" }}>
                                github.com/Chasmatt/term-tracker-mobile
                            </p>
                            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                                <li>
                                    Local-first mobile app for managing academic terms, courses, and assessments;
                                    single .NET MAUI codebase shipping to Android and iOS.
                                </li>
                                <li>
                                    MVVM architecture with SQLite persistence and native local notifications for
                                    term, course, and assessment dates.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* EXPERIENCE */}
                    <section style={{ marginBottom: "2rem" }}>
                        <h2 style={{ color: "#FF9325", marginBottom: "1rem", fontSize: "1.5rem" }}>
                            Technical Experience
                        </h2>

                        {/* ROLE 1 - IVIRMA (CURRENT) */}
                        <div style={{ marginBottom: "1.75rem" }}>
                            <h3>Application Support Engineer, Tier III | iviRMA | Remote</h3>
                            <p style={{ fontStyle: "italic" }}>June 2025 to Present</p>
                            <ul style={{ paddingLeft: "1.5rem" }}>
                                <li>
                                    Write and execute SQL <code>INSERT</code>, <code>UPDATE</code>, and
                                    <code> DELETE</code> statements against the production database to add
                                    records, correct data, debug application issues, and maintain reporting
                                    pipelines.
                                </li>
                                <li>
                                    Query the SQL Server database to investigate customer-reported issues,
                                    validate data integrity, and isolate defects in the Artemis EHR and Patient
                                    Portal applications.
                                </li>
                                <li>
                                    Provide technical support for the Patient Portal application, resolving
                                    user-facing issues and escalating engineering-level defects with reproduction
                                    steps and root-cause analysis.
                                </li>
                                <li>
                                    Support end users of the Artemis EHR software, diagnosing workflow issues
                                    across multiple integrated modules.
                                </li>
                                <li>
                                    Maintain data quality through validation checks, catching inconsistencies
                                    before they reach downstream systems.
                                </li>
                                <li>
                                    Track application updates and defects in Jira, documenting reproduction
                                    steps and resolutions in the internal knowledge base.
                                </li>
                            </ul>
                        </div>

                        {/* ROLE 2 - RED TECHNOLOGIES */}
                        <div style={{ marginBottom: "1.75rem" }}>
                            <h3>Application Support Analyst | Red Technologies | Indianapolis, IN</h3>
                            <p style={{ fontStyle: "italic" }}>June 2024 to June 2025</p>
                            <ul style={{ paddingLeft: "1.5rem" }}>
                                <li>
                                    <strong>Designed and shipped an AI-driven ticketing automation</strong>
                                    {" "}after analyzing Jira ticket data to identify high-volume support issues
                                    suitable for automation; pitched the solution to leadership and collaborated
                                    with development to design and implement it. Recognized as
                                    {" "}<strong>Employee of the Quarter</strong>.
                                </li>
                                <li>
                                    Resolved customer issues daily with a <strong>95% satisfaction rate</strong>,
                                    managing incidents across web applications, databases, integrated systems,
                                    and identity management.
                                </li>
                                <li>
                                    Performed root cause analysis using logs, SQL queries, ITSM platforms, and
                                    observability tools (Datadog) to identify defects and reduce incident
                                    recurrence.
                                </li>
                                <li>
                                    Improved incident resolution times by implementing structured incident logs
                                    and knowledge-base documentation, enabling faster team access to critical
                                    information.
                                </li>
                                <li>
                                    Partnered with cross-functional engineering teams to diagnose and resolve
                                    complex production issues within SLA.
                                </li>
                            </ul>
                        </div>

                        {/* ROLE 3 - SOFTWARE SOLUTION INC */}
                        <div>
                            <h3>Software Support Specialist II | Software Solution Inc | Avon, IN</h3>
                            <p style={{ fontStyle: "italic" }}>October 2019 to June 2024</p>
                            <ul style={{ paddingLeft: "1.5rem" }}>
                                <li>
                                    Delivered end-to-end technical support &mdash; installation, configuration,
                                    training, and troubleshooting &mdash; for enterprise software in high-volume
                                    production environments.
                                </li>
                                <li>
                                    Managed implementation projects, coordinating with equipment vendors and
                                    clients to install, test, validate, and troubleshoot automation technology
                                    and ensure dependable data collection.
                                </li>
                                <li>
                                    Created and updated technical documentation, streamlining support processes
                                    and reducing time-to-resolution for the team.
                                </li>
                                <li>
                                    Built a comprehensive onboarding program for new support hires, accelerating
                                    knowledge continuity within three months.
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Resume;

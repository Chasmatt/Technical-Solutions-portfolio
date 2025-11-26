import React from "react";


const Resume = () => {
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
                    <a
                        href="/ChasityMatthiasResume.pdf"
                        download
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
                    </a>
                </div>

                {/* RESUME CONTAINER */}
                <div
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
                            Software Engineer with over 8 years of technical experience. I bring a unique
                            blend of problem-solving expertise and customer-focused insight, developed
                            through years of diagnosing complex issues, collaborating with engineers,
                            and ensuring seamless software performance in real-world environments.
                            <br /><br />
                            What drives me most is the software development lifecycle, from ideation and
                            design to deployment and optimization. I love transforming ideas into functional,
                            intuitive solutions and take pride in writing clean, maintainable code that
                            enhances user experiences.
                            <br /><br />
                            My professional background and academic career have provided me with a strong
                            foundation in SQL, API integrations, front-end and back-end development, and
                            system monitoring, along with hands-on experience with incident management and
                            process improvement. I thrive in environments where collaboration, innovation,
                            and technical excellence meet.
                        </p>
                    </section>

                    {/* TECHNICAL SKILLS */}
                    <section style={{ marginBottom: "2rem" }}>
                        <h2 style={{ color: "#FF9325", fontSize: "1.5rem" }}>Technical Skills</h2>
                        <ul style={{ paddingLeft: "1.25rem" }}>
                            <li><strong>Front-End:</strong> HTML, CSS, JavaScript, TypeScript, Angular, Node.js</li>
                            <li><strong>Back-End:</strong> C#, Python, .NET, .NET MAUI, API Integration, WINFORMS</li>
                            <li><strong>Databases:</strong> SQL, MySQL, SQLite, DBeaver</li>
                            <li><strong>Tools:</strong> GitHub, Jira, Datadog, Postman, Visual Studio, BASH, FIGMA</li>
                            <li><strong>Cloud & Infrastructure:</strong> AWS Certified Cloud Practitioner</li>
                            <li><strong>Certifications:</strong> Front-End Developer, ITIL, CompTIA Project+</li>
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
                                Anticipated Graduation: December 2025
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

                    {/* EXPERIENCE */}
                    <section style={{ marginBottom: "2rem" }}>
                        <h2 style={{ color: "#FF9325", marginBottom: "1rem", fontSize: "1.5rem" }}>
                            Technical Experience
                        </h2>

                        {/* ROLE 1 */}
                        <div style={{ marginBottom: "1.75rem" }}>
                            <h3>Application Support Analyst | Red Technologies | Indianapolis, IN</h3>
                            <p style={{ fontStyle: "italic" }}>June 2024 to June 2025</p>
                            <ul style={{ paddingLeft: "1.5rem" }}>
                                <li>
                                    Resolved customer issues daily, achieving a 95% satisfaction rate by
                                    proactively managing incidents across web applications, databases,
                                    integrated systems, and identity management.
                                </li>
                                <li>
                                    Performed root cause analysis using logs, SQL queries, ITSM platforms,
                                    and monitoring/observability tools to identify problems and reduce
                                    incident recurrence.
                                </li>
                                <li>
                                    Improved application reliability through systematic debugging of web
                                    applications, ensuring timely resolution of critical issues within SLA.
                                </li>
                                <li>
                                    Improved incident resolution times by implementing structured incident
                                    logs and knowledge-based documentation, fostering collaboration and
                                    quick access to critical information.
                                </li>
                                <li>
                                    Worked closely with cross-functional teams to identify and resolve
                                    complex issues, leveraging strong communication skills to provide
                                    actionable insights and ensure timely resolutions for customer success.
                                </li>
                                <li>
                                    Analyzed Jira ticketing data to identify high-volume support issues
                                    suitable for automation; pitched the solution to leadership and
                                    collaborated with development to design and implement AI ticketing
                                    automation, optimizing workflows and earning Employee of the Quarter.
                                </li>
                            </ul>
                        </div>

                        {/* ROLE 2 */}
                        <div style={{ marginBottom: "1.75rem" }}>
                            <h3>Software Support Specialist II | Software Solution Inc | Avon, IN</h3>
                            <p style={{ fontStyle: "italic" }}>October 2019 to June 2024</p>
                            <ul style={{ paddingLeft: "1.5rem" }}>
                                <li>
                                    Provided end-to-end technical support, including installation,
                                    configuration, training, and troubleshooting, enabling consistent
                                    and reliable use of enterprise software.
                                </li>
                                <li>
                                    Delivered remote and on-site support to resolve software and hardware
                                    integration issues in high-volume production environments, minimizing
                                    downtime and maintaining operational continuity.
                                </li>
                                <li>
                                    Managed implementation projects, coordinating with equipment vendors
                                    and clients to install, test, validate, and troubleshoot automation
                                    technology, ensuring accurate data collection and dependable operation.
                                </li>
                                <li>
                                    Created and updated technical documentation, streamlining support
                                    processes and enabling quicker access to critical information for team
                                    members, resulting in improved service delivery.
                                </li>
                                <li>
                                    Developed a comprehensive training program for new support hires,
                                    enhancing team capability and accelerating knowledge continuity within
                                    3 months.
                                </li>
                            </ul>
                        </div>

                        {/* ROLE 3 */}
                        <div>
                            <h3>
                                Transcription System Coordinator | Community Health Network | Indianapolis, IN
                            </h3>
                            <p style={{ fontStyle: "italic" }}>November 2016 to October 2019</p>
                            <ul style={{ paddingLeft: "1.5rem" }}>
                                <li>
                                    Delivered technical support as the subject matter expert (SME) for
                                    dictation systems, enhancing user experience across multiple clinical
                                    environments and hospital domains.
                                </li>
                                <li>
                                    Achieved high customer satisfaction by effectively managing incident
                                    queues and resolving transcription platform errors within SLA,
                                    ensuring seamless clinical operations.
                                </li>
                                <li>
                                    Troubleshot complex HL7 interface errors and system issues by analyzing
                                    logs, workflows, and integration points across upstream and downstream
                                    systems.
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

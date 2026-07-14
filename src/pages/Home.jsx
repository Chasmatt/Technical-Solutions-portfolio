import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TechStack from '../components/TechStack';

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            style={{
                fontFamily: 'Inter, sans-serif',
                backgroundColor: '#FFFFFF',
                color: '#6B7280',
                minHeight: '100vh',
                padding: isMobile ? '1rem' : '0'   // mobile-safe padding
            }}
        >

            {/* About Section */}
            <section
                id="about"
                style={{
                    padding: isMobile ? '2rem 1rem' : '4rem 2rem',
                    textAlign: 'left'
                }}
            >
                <h1
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: isMobile ? '2rem' : '3rem',
                        color: '#111111',
                        marginBottom: '1rem'
                    }}
                >
                    Hey, Chasity Matthias Here!
                </h1>

                <h2
                    style={{
                        fontSize: isMobile ? '1.25rem' : '1.75rem',
                        color: '#FF9325',
                        marginBottom: '2rem'
                    }}
                >
                    Welcome to my Software Engineer Portfolio
                </h2>

                <p
                    style={{
                        fontSize: isMobile ? '1rem' : '1.125rem',
                        lineHeight: '1.75rem',
                        marginBottom: '1rem',
                        color: '#6B7280'
                    }}
                >
                    I'm Chasity Matthias, a full-stack <strong>Software Engineer</strong> with 8 years of software support experience. I design and ship production systems end-to-end &mdash; from event-sourced backend services in <strong>ASP.NET Core</strong> to modern <strong>React</strong> and <strong>Astro</strong> front-ends, cross-platform <strong>.NET MAUI</strong> mobile apps, and cloud deployments on <strong>AWS (EC2 + RDS)</strong>.
                </p>

                <p
                    style={{
                        fontSize: isMobile ? '1rem' : '1.125rem',
                        lineHeight: '1.75rem',
                        marginBottom: '1rem',
                        color: '#6B7280'
                    }}
                >
                    My recent work includes <strong>Silo</strong>, a food-and-beverage inventory platform with an immutable ledger, multi-branch design, and an AI-powered allergen detector wired to the Anthropic Claude API &mdash; deployed on AWS with 92 unit and 41 integration tests. I care about clean domain modeling, thoughtful testing, and shipping software that actually helps the people using it.
                </p>

                <p
                    style={{
                        fontSize: isMobile ? '1rem' : '1.125rem',
                        lineHeight: '1.75rem'
                    }}
                >
                    Bachelor's Degree in <strong>Software Engineering.</strong> Certified in <strong>Front-End Development, ITIL, AWS Cloud Practitioner, and CompTIA Project+</strong>. Eight years of customer-facing software support brings the operational readiness engineering teams often miss &mdash; I know what production feels like when it breaks, and I build systems accordingly.
                </p>

                {/* Button Section */}
                <div
                    style={{
                        marginTop: '2rem',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: '1rem',
                        width: isMobile ? '100%' : 'auto'
                    }}
                >
                    <Link to="/projects" style={{ width: isMobile ? '100%' : 'auto' }}>
                        <button
                            style={{
                                padding: '0.75rem 1.5rem',
                                fontSize: isMobile ? '0.95rem' : '1rem',
                                fontWeight: 600,
                                color: '#111827',
                                background: 'linear-gradient(90deg, #ffce83, #ffc47a, #ffb971, #ffa850, #ff9325)',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                width: isMobile ? '100%' : 'auto'
                            }}
                        >
                            Projects
                        </button>
                    </Link>

                    <Link to="/resume" style={{ width: isMobile ? '100%' : 'auto' }}>
                        <button
                            style={{
                                padding: '0.75rem 1.5rem',
                                fontSize: isMobile ? '0.95rem' : '1rem',
                                fontWeight: 600,
                                color: '#111827',
                                background: '#f3f4f6',
                                border: '1px solid #d1d5db',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                width: isMobile ? '100%' : 'auto'
                            }}
                        >
                            Resume
                        </button>
                    </Link>
                </div>
            </section>

            <TechStack />

            {/* AI Bot Placeholder */}
            {/* <div
                style={{
                    position: 'fixed',
                    bottom: isMobile ? '1rem' : '2rem',
                    right: isMobile ? '1rem' : '2rem',
                    width: isMobile ? '90%' : '280px',
                    background: 'linear-gradient(180deg, #ffce83, #ff9325)',
                    borderRadius: '12px',
                    padding: '1rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    color: '#111111'
                }}
            >
                <h3 style={{ marginBottom: '0.5rem', fontSize: isMobile ? '1rem' : '1.2rem' }}>
                    AI Bot (Coming Soon)
                </h3>
                <input
                    type="text"
                    placeholder="Ask a question..."
                    style={{
                        width: '100%',
                        padding: '0.5rem',
                        borderRadius: '6px',
                        border: 'none'
                    }}
                />
            </div> End AI Bot Placeholder */}
        </div>
    );
};

export default Home;

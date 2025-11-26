import React from 'react';
import { motion } from 'framer-motion';

const categories = [
    {
        name: "Front-End Development",
        skills: ["HTML", "CSS", "JavaScript", "API Integration"]
    },
    {
        name: "Back-End Development",
        skills: ["C#", "Python"]
    },
    {
        name: "Databases",
        skills: ["SQL", "MySQL", "SQLite", "DBeaver"]
    },
    {
        name: "Tools & Frameworks",
        skills: ["Observability Tools(DataDog)", "ITSM (Jira)", "GitHub", "Node.js", ".NET", ".NET MAUI"]
    }
];

// Bounce drop variant for categories
const categoryVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 120, damping: 10 }
    }
};

// Pop-in variants for skills
const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.1,
            type: "spring",
            stiffness: 200,
            damping: 12
        }
    })
};

const TechStack = () => {
    return (
        <section style={{ padding: "4rem 2rem", backgroundColor: "#ffffff" }}>
            <h2 style={{
                fontSize: "2rem",
                fontWeight: "700",
                marginBottom: "2rem",
                color: "#FF9325"
            }}>
                Technical Stack
            </h2>

            {categories.map((cat ) => (
                <motion.div
                    key={cat.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={categoryVariants}
                    style={{ marginBottom: "2rem" }}
                >
                    <h3 style={{
                        fontSize: "1.5rem",
                        marginBottom: "0.5rem",
                        color: "#111827"
                    }}>
                        {cat.name}
                    </h3>

                    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                        {cat.skills.map((skill, i) => (
                            <motion.li
                                key={skill}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={skillVariants}
                                style={{
                                    fontSize: "1.1rem",
                                    padding: "0.25rem 0",
                                    color: "#6B7280"
                                }}
                            >
                                 {skill}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </section>
    );
};

export default TechStack;

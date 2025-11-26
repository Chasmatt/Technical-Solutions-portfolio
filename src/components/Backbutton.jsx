import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                padding: "0.5rem 1rem",
                background: "#f3f4f6",
                border: "1px solid #ddd",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 600,
                color: "#333",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.background = "#e5e7eb";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.background = "#f3f4f6";
            }}
        >
            Back
        </button>
    );
};

export default BackButton;

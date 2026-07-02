import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(10, 14, 23, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--card-border)",
        height: "70px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Logo/Brand */}
        <NavLink
          to="/"
          style={{
            fontSize: "1.4rem",
            fontWeight: "800",
            letterSpacing: "1px",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
              display: "inline-block",
            }}
          ></span>
          <span className="text-gradient" style={{ fontWeight: "800" }}>
            PONGSAKORN
          </span>
        </NavLink>

        {/* Nav Links */}
        <div style={{ display: "flex", gap: "8px" }}>
          {[
            { name: "Home", path: "/Home" },
            { name: "College", path: "/College" },
            { name: "Department", path: "/Department" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#ffffff" : "var(--text-muted)",
                fontWeight: "600",
                fontSize: "0.95rem",
                padding: "8px 16px",
                borderRadius: "8px",
                background: isActive
                  ? "rgba(99, 102, 241, 0.15)"
                  : "transparent",
                border: isActive
                  ? "1px solid rgba(99, 102, 241, 0.2)"
                  : "1px solid transparent",
                transition: "all 0.25s ease",
                fontFamily: "var(--font-en)",
              })}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

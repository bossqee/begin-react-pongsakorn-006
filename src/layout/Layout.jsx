import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Layout = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <main style={{ flex: 1, paddingTop: "80px" }}>
        <Outlet />
      </main>
      <footer
        style={{
          textAlign: "center",
          padding: "30px 20px",
          fontSize: "0.9rem",
          color: "var(--text-muted)",
          borderTop: "1px solid var(--card-border)",
          background: "rgba(10, 14, 23, 0.8)",
          backdropFilter: "blur(10px)",
          marginTop: "auto",
        }}
      >
        <div className="container">
          <p>
            © {new Date().getFullYear()} Pongsakorn Portfolio. All Rights
            Reserved.
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              marginTop: "5px",
              color: "rgba(148, 163, 184, 0.5)",
            }}
          >
            Powered by React & Vite | Designed with Premium Dark Aesthetic
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

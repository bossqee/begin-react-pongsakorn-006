import React from "react";
import img from "../assets/4.png";

const Home = () => {
  // Contact details
  const contacts = [
    {
      label: "(Email)",
      value: "p30675130@gmail.com",
      link: "mailto:p30675130@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: "(Phone Number)",
      value: "092-610-7771",
      link: "tel:092-610-7771",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: "(GitHub)",
      value: "github.com/bossqee",
      link: "https://github.com/bossqee",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      label: "(Instagram)",
      value: "_bossxwz",
      link: "https://www.instagram.com/_bossxwz/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="section container">
      {/* Hero Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "48px",
          alignItems: "center",
          marginBottom: "80px",
          textAlign: "left",
        }}
      >
        <div>
          <span
            style={{
              background: "rgba(99, 102, 241, 0.15)",
              color: "var(--primary)",
              padding: "6px 16px",
              borderRadius: "50px",
              fontSize: "0.85rem",
              fontWeight: "700",
              letterSpacing: "1px",
              display: "inline-block",
              marginBottom: "16px",
              border: "1px solid rgba(99, 102, 241, 0.25)",
            }}
          >
            WELCOME
          </span>
          <h1 style={{ marginBottom: "16px" }}>
            สวัสดีครับ, ผม <span className="text-gradient">พงศกร</span>
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-muted)",
              marginBottom: "28px",
              lineHeight: "1.7",
            }}
          >
            ผมชื่อ พงศกร เพิ่มผล (บอส) | อายุ 18 ปี นักเรียนวิทยาลัยเทคนิคชลบุรี
            | แผนก เทคโนโลยีสารสนเทศ ปวช.3/1 006
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href="#contact" className="btn btn-primary">
              ติดต่อฉัน
            </a>
            <a
              href="#internship"
              className="btn"
              style={{
                border: "1px solid var(--card-border)",
                color: "#ffffff",
                background: "rgba(255, 255, 255, 0.05)",
              }}
            >
              ดูที่ฝึกงาน
            </a>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="float-animation"
            style={{
              position: "relative",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
              padding: "5px",
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
            }}
          >
            <img
              src={img}
              alt="Pongsakorn Profile"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                background: "#0a0e17",
              }}
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        style={{ marginBottom: "80px", scrollMarginTop: "100px" }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          ช่องทางการติดต่อ (<span className="text-gradient">Contact Info</span>)
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}
        >
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                textDecoration: "none",
                color: "inherit",
                gap: "16px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: "rgba(99, 102, 241, 0.1)",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {contact.icon}
              </div>
              <div>
                <h4 style={{ color: "#ffffff", marginBottom: "4px" }}>
                  {contact.label}
                </h4>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    wordBreak: "break-all",
                  }}
                >
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Internship Section */}
      <div
        id="internship"
        className="glass-card"
        style={{
          scrollMarginTop: "100px",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <span
              style={{
                background: "rgba(6, 182, 212, 0.15)",
                color: "var(--secondary)",
                padding: "6px 12px",
                borderRadius: "50px",
                fontSize: "0.8rem",
                fontWeight: "700",
                display: "inline-block",
                marginBottom: "16px",
                border: "1px solid rgba(6, 182, 212, 0.25)",
              }}
            >
              INTERNSHIP PLACE
            </span>
            <h2 style={{ marginBottom: "16px" }}>
              สถานที่ฝึกงาน (<span className="text-gradient">Internship</span>)
            </h2>
            <h3 style={{ color: "#ffffff", marginBottom: "8px" }}>
              บริษัท เอ็นเตอร์ไพรส์ เน็ตเวอร์ค เทคโนโลยี่ จำกัด
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                marginBottom: "16px",
                fontSize: "0.95rem",
              }}
            >
              <strong>ตำแหน่ง:</strong> Maintenance (เครื่องถ่ายเอกสาร)
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "var(--text-muted)",
                fontSize: "0.9rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--secondary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                287 ถ. ชลบุรี - บ้านบึง ตำบล บ้านบึง อำเภอบ้านบึง ชลบุรี 20170
              </span>
            </div>
          </div>

          <div>
            <div
              style={{
                width: "100%",
                height: "320px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--card-border)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
              }}
            >
              <iframe
                title="บริษัท เอ็นเตอร์ไพรส์ เน็ตเวอร์ค เทคโนโลยี่ จำกัด"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.5683485221825!2d101.10397087798097!3d13.314882753598251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d332442f293c1%3A0x1b047d2fd29723da!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4reC5h-C4meC5gOC4leC4reC4o-C5jOC5hOC4nuC4o-C4quC5jCDguYDguJnguYfguJXguYDguKfguK3guKPguYzguIQg4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14LmIIOC4iOC4s-C4geC4seC4lA!5e0!3m2!1sth!2sth!4v1782954517497!5m2!1sth!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

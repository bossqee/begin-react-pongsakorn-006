import React from "react";
import img from "../assets/3.jpg";

const Department = () => {
  const courses = [
    {
      code: "IT-201",
      title: "การออกแบบและพัฒนาเว็บไซ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
    },
    {
      code: "IT-202",
      title: "การออกแบบส่วนติดต่อผู้ใช้",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
    },
    {
      code: "IT-203",
      title: "การโปรแกรมควบคุมอุปกรณ์",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <rect width="6" height="6" x="9" y="9" rx="1" />
          <path d="M9 1H1v8" />
          <path d="M15 1h8v8" />
          <path d="M9 23H1v-8" />
          <path d="M15 23h8v-8" />
        </svg>
      ),
    },
    {
      code: "IT-204",
      title: "การเขียนโปรแกรมเชิงวัตถุ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M3 16a9 9 0 0 1 18 0" />
          <path d="M3 8a9 9 0 0 1 18 0" />
          <circle cx="12" cy="4" r="1" />
          <circle cx="12" cy="20" r="1" />
        </svg>
      ),
    },
    {
      code: "IT-205",
      title: "เทคโนโลยีระบบสมองฝังตัวและไอโอที",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      code: "IT-206",
      title: "การพัฒนาแอปพลิเคชันบนอุปกรณ์เคลื่อนที่",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ];

  return (
    <div className="section container">
      {/* Department Banner Header */}
      <div
        className="glass-card"
        style={{
          padding: 0,
          overflow: "hidden",
          marginBottom: "60px",
          border: "1px solid var(--card-border)",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "360px",
            width: "100%",
          }}
        >
          <img
            src={img}
            alt="IT Department Banner"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.6)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "40px",
              right: "40px",
              textAlign: "left",
            }}
          >
            <span
              style={{
                background: "rgba(99, 102, 241, 0.2)",
                color: "#a5b4fc",
                padding: "6px 14px",
                borderRadius: "50px",
                fontSize: "0.8rem",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                border: "1px solid rgba(99, 102, 241, 0.3)",
              }}
            >
              INFORMATION TECHNOLOGY
            </span>
            <h1
              style={{
                fontSize: "2.8rem",
                marginTop: "12px",
                marginBottom: "8px",
              }}
            >
              แผนกวิชาเทคโนโลยีสารสนเทศ
            </h1>
            <p
              style={{
                color: "#e2e8f0",
                fontSize: "1.1rem",
                maxWidth: "600px",
              }}
            >
              ศึกษาเกี่ยวกับการพัฒนาเว็บไซต์ การเขียนโปรแกรม ฐานข้อมูล
              และเทคโนโลยีสารสนเทศสมัยใหม่
            </p>
          </div>
        </div>
      </div>

      {/* Courses Studied */}
      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          รายวิชาที่เคยศึกษา (
          <span className="text-gradient">Completed Courses</span>)
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            textAlign: "left",
          }}
        >
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(99, 102, 241, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {course.icon}
                </div>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--secondary)",
                    background: "rgba(6, 182, 212, 0.12)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontWeight: "700",
                    fontFamily: "var(--font-en)",
                    border: "1px solid rgba(6, 182, 212, 0.2)",
                  }}
                >
                  {course.code}
                </span>
              </div>
              <div>
                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: "1.15rem",
                    marginBottom: "8px",
                  }}
                >
                  {course.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    lineHeight: "1.7",
                  }}
                >
                  {course.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Department;

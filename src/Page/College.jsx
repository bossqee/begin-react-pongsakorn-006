import React from "react";
import img from "../assets/2.jpg";

const College = () => {
  const levels = [
    {
      title: "ระดับประกาศนียบัตรวิชาชีพ (ปวช.)",
    },
    {
      title: "ระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
    },
  ];

  return (
    <div className="section container">
      {/* College Banner Hero */}
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
            alt="College Campus Banner"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.5)",
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
                background:
                  "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                color: "#ffffff",
                padding: "6px 14px",
                borderRadius: "50px",
                fontSize: "0.8rem",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              ESTABLISHED SINCE 2482
            </span>
            <h1
              style={{
                fontSize: "3rem",
                marginTop: "12px",
                marginBottom: "8px",
              }}
            >
              วิทยาลัยเทคนิคชลบุรี
            </h1>
            <p
              style={{
                color: "#e2e8f0",
                fontSize: "1.1rem",
                maxWidth: "600px",
              }}
            >
              วิทยาลัยมุ่งเน้นการจัดการศึกษา
              และพัฒนาผู้เรียนให้มีความรู้ด้านวิชาชีพ ควบคู่คุณธรรมและจริยธรรม
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy & Vision */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "32px",
          marginBottom: "60px",
          textAlign: "left",
        }}
      >
        <div className="glass-card">
          <h3
            style={{
              color: "var(--primary)",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--primary)",
              }}
            ></span>
            วิสัยทัศน์ (Vision)
          </h3>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
            "เป็นองค์กรที่มุ่งมั่นจัดการเรียนการสอนด้านอุตสาหกรรม
            เพื่อผลิตกำลังคนตั้งแต่ระดับฝีมือ ระดับเทคนิค ให้มีคุณภาพตามาตรฐาน
            สากล สอดคล้องกับสภาพเศรษฐกิจ สังคม วัฒนธรรม สิ่งแวดล้อม
            ความก้าวหน้าของเทคโนโลยี ความต้องการของตลาดแรงงาน
            และการประกอบอาชีพอิสระ"
          </p>
        </div>
        <div className="glass-card">
          <h3
            style={{
              color: "var(--secondary)",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--secondary)",
              }}
            ></span>
            พันธกิจ (Mission)
          </h3>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
            "มุ่งเน้นให้นักเรียน นักศึกษา ได้ฝึกทักษะที่ถูกต้อง
            และมีความรู้คู่คุณธรรม มีบุคลิกที่ดีและเป็นคนดีของสังคม
            พัฒนาบุคลากรให้มีคุณธรรม จริยธรรมและความรู้ความสามารถที่เป็นเลิศทาง
            วิชาการที่ทันต่อความก้าวหน้าทาง อุตสาหกรรมและเทคโนโลยี"
          </p>
        </div>
      </div>

      {/* Course Levels Offered */}
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          ระดับหลักสูตรการศึกษาที่เปิดสอน
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            textAlign: "left",
          }}
        >
          {levels.map((level, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(99, 102, 241, 0.1)",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  marginBottom: "20px",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                }}
              >
                {idx + 1}
              </div>
              <h3 style={{ color: "#ffffff", marginBottom: "12px" }}>
                {level.title}
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.95rem",
                  lineHeight: "1.7",
                  flex: 1,
                }}
              >
                {level.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default College;

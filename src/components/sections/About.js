import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function About() {
  // ✅ Count-up logic
  const [counts, setCounts] = useState({
    souls: 0,
    missions: 0,
    families: 0
  });

  useEffect(() => {
    let start = 0;
    const end = { souls: 5000, missions: 120, families: 2000 };

    const duration = 2000;
    const incrementTime = 30;

    const timer = setInterval(() => {
      start += incrementTime;

      setCounts({
        souls: Math.min(
          Math.floor((start / duration) * end.souls),
          end.souls
        ),
        missions: Math.min(
          Math.floor((start / duration) * end.missions),
          end.missions
        ),
        families: Math.min(
          Math.floor((start / duration) * end.families),
          end.families
        )
      });

      if (start >= duration) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" style={styles.section}>
      {/* 🔥 PARALLAX BACKGROUND */}
      <div style={styles.parallax}></div>

      <div className="container" style={styles.content}>
        {/* Heading */}
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Who We Are
        </motion.h2>

        <motion.p style={styles.text}>
          We are a Christ-centered missionary outreach committed to reaching
          sinners with the Gospel and winning souls into the Kingdom of Christ.
        </motion.p>

        {/* ✅ STATS */}
        <div style={styles.stats}>
          <div style={styles.statBox}>
            <h3>{counts.souls}+</h3>
            <p>Souls Reached</p>
          </div>

          <div style={styles.statBox}>
            <h3>{counts.missions}+</h3>
            <p>Mission Fields</p>
          </div>

          <div style={styles.statBox}>
            <h3>{counts.families}+</h3>
            <p>Families Impacted</p>
          </div>
        </div>

        {/* ✅ CARDS */}
        <div style={styles.grid}>
          <motion.div style={styles.card} whileHover={{ y: -10 }}>
            <h3>🌍 Our Vision</h3>
            <p>
              To reach out to sinners with the Gospel, winning souls into the
              Kingdom of Christ.
            </p>
          </motion.div>

          <motion.div style={styles.card} whileHover={{ y: -10 }}>
            <h3>🔥 Our Mission</h3>
            <p>
              Through preaching, teaching, counseling, and assisting families
              in basic needs as God provides.
            </p>
            <p>Education, clothing, and feeding.</p>
          </motion.div>

          <motion.div style={styles.card} whileHover={{ y: -10 }}>
            <h3>🤝 Our Support System</h3>
            <p>
              We depend on God through friends, organizations, families, and
              voluntary donations.
            </p>
          </motion.div>
        </div>

        {/* ✅ TIMELINE */}
        <div style={styles.timeline}>
          <h3 style={styles.timelineTitle}>Our Journey</h3>

          <div style={styles.timelineItem}>
            <span>2018</span>
            <p>Ministry founded with a vision to reach souls.</p>
          </div>

          <div style={styles.timelineItem}>
            <span>2020</span>
            <p>Expanded into community outreach and evangelism.</p>
          </div>

          <div style={styles.timelineItem}>
            <span>2022</span>
            <p>Launched feeding and clothing programs.</p>
          </div>

          <div style={styles.timelineItem}>
            <span>2024</span>
            <p>Reached thousands of lives across Nigeria.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    padding: "100px 20px",
    color: "white",
    overflow: "hidden"
  },

  /* 🔥 PARALLAX */
  parallax: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "120%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.4)",
    zIndex: 1
  },

  content: {
    position: "relative",
    zIndex: 2
  },

  heading: {
    textAlign: "center",
    fontSize: "2.5rem"
  },

  text: {
    textAlign: "center",
    maxWidth: "700px",
    margin: "20px auto",
    color: "#e5e7eb"
  },

  /* ✅ STATS */
  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    margin: "50px 0",
    flexWrap: "wrap"
  },

  statBox: {
    textAlign: "center",
    background: "rgba(255,255,255,0.1)",
    padding: "20px 30px",
    borderRadius: "10px"
  },

  /* ✅ CARDS */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    marginTop: "40px"
  },

  card: {
    background: "rgba(255,255,255,0.1)",
    padding: "25px",
    borderRadius: "12px",
    backdropFilter: "blur(6px)"
  },

  /* ✅ TIMELINE */
  timeline: {
    marginTop: "80px",
    textAlign: "left",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto"
  },

  timelineTitle: {
    textAlign: "center",
    marginBottom: "30px"
  },

  timelineItem: {
    marginBottom: "20px",
    paddingLeft: "20px",
    borderLeft: "3px solid #f59e0b"
  }
};

export default About;
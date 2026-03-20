import { motion } from "framer-motion";

function JoinMission() {
  return (
    <section id="join" style={styles.section}>
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Join the Mission
        </motion.h2>

        <motion.p
          style={styles.text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          God is calling laborers into His harvest. You can be part of this
          mission through service, partnership, and prayer. Together, we can
          reach souls and transform lives.
        </motion.p>

        <div style={styles.grid}>
          <motion.div style={styles.card} whileHover={{ y: -8 }}>
            <h3>🙌 Volunteer</h3>
            <p>
              Join us physically in outreach programs, evangelism, and community
              impact across Nigeria.
            </p>
          </motion.div>

          <motion.div style={styles.card} whileHover={{ y: -8 }}>
            <h3>🤝 Partner</h3>
            <p>
              Support the mission through financial partnership and help us
              expand our reach to more communities.
            </p>
          </motion.div>

          <motion.div style={styles.card} whileHover={{ y: -8 }}>
            <h3>🙏 Pray</h3>
            <p>
              Stand with us in prayer as we take the Gospel to nations and trust
              God for transformation.
            </p>
          </motion.div>
        </div>

        <motion.p
          style={styles.cta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Your participation matters. Be part of what God is doing today.
        </motion.p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    padding: "100px 20px",
    color: "white",
    textAlign: "center",
    backgroundImage:
      "url('https://stjovitaandjoviana.org/wp-content/uploads/2024/10/slide_4.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed" // 👈 Parallax effect
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.65)",
    top: 0,
    left: 0
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1000px",
    margin: "0 auto"
  },

  heading: {
    fontSize: "2.8rem",
    marginBottom: "20px"
  },

  text: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
    marginBottom: "50px",
    color: "#e5e7eb"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    marginBottom: "40px"
  },

  card: {
    background: "rgba(255,255,255,0.1)",
    padding: "25px",
    borderRadius: "12px",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.2)"
  },

  cta: {
    marginTop: "20px",
    fontStyle: "italic",
    color: "#f3f4f6"
  }
};

export default JoinMission;
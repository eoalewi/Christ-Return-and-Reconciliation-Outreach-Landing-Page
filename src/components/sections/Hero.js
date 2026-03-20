import { motion } from "framer-motion";
import { useState } from "react";

function Hero() {
  const [hovered, setHovered] = useState(null);

  const scrollToDonate = () => {
    const section = document.getElementById("donate");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToJoin = () => {
    const section = document.getElementById("join");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section style={styles.hero}>
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <motion.h1
          style={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Taking the Gospel to the Nations
        </motion.h1>

        <motion.p
          style={styles.subtext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Reaching souls, transforming lives, and bringing hope through
          evangelism, education, feeding, and outreach across Nigeria and beyond.
        </motion.p>

        <motion.div style={styles.buttons}>
          <button
            style={{
              ...styles.button,
              ...(hovered === "join" ? styles.buttonHover : {})
            }}
            onMouseEnter={() => setHovered("join")}
            onMouseLeave={() => setHovered(null)}
            onClick={scrollToJoin} // ⬅ Scroll to JoinMission
          >
            Join the Mission
          </button>

          <button
            style={{
              ...styles.button,
              ...(hovered === "support" ? styles.buttonHover : {})
            }}
            onMouseEnter={() => setHovered("support")}
            onMouseLeave={() => setHovered(null)}
            onClick={scrollToDonate} // ⬅ Scroll to Donate
          >
            Support the Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    height: "90vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1600')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white"
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)"
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    padding: "20px"
  },

  heading: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "20px"
  },

  subtext: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    color: "#e5e7eb"
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  },

  button: {
    padding: "14px 28px",
    background: "transparent",
    border: "2px solid white",
    borderRadius: "6px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "0.3s"
  },

  buttonHover: {
    background: "#f59e0b",
    border: "2px solid #f59e0b",
    transform: "translateY(-2px)"
  }
};

export default Hero;
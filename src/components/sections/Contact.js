import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Reach out to us for support, partnership, or inquiries.
        </motion.p>

        <div style={styles.grid}>
          {/* Phone */}
          <motion.a
            href="tel:+234839442944"
            style={styles.card}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={styles.icon}>📞</div>
            <h3>Phone</h3>
            <p>+234839442944</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:crrom.gmail.com"
            style={styles.card}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div style={styles.icon}>📧</div>
            <h3>Email</h3>
            <p>crrom.gmail.com</p>
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://www.facebook.com/share/1773NHekyd/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.card}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div style={styles.icon}>📘</div>
            <h3>Facebook</h3>
            <p>Owagbayegun Jonathan</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#1e3a8a",
    color: "white",
    padding: "60px 20px", // reduced height
    textAlign: "center"
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto"
  },

  heading: {
    fontSize: "2.3rem",
    marginBottom: "10px"
  },

  subtitle: {
    color: "#e5e7eb",
    marginBottom: "30px", // reduced spacing
    fontSize: "1.1rem"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px"
  },

  card: {
    background: "rgba(255,255,255,0.1)",
    padding: "20px", // slightly smaller
    borderRadius: "12px",
    textDecoration: "none",
    color: "white",
    transition: "0.3s",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.2)",
    cursor: "pointer"
  },

  icon: {
    fontSize: "2rem",
    marginBottom: "10px"
  }
};

export default Contact;
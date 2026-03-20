function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact Us</h2>
        <p style={styles.subtitle}>
          Reach out to us for support, partnership, or inquiries.
        </p>

        <div style={styles.grid}>
          {/* Phone */}
          <a href="tel:+234839442944" style={styles.card}>
            <div style={styles.icon}>📞</div>
            <h3>Phone</h3>
            <p>+234839442944</p>
          </a>

          {/* Email */}
          <a href="mailto:crrom.gmail.com" style={styles.card}>
            <div style={styles.icon}>📧</div>
            <h3>Email</h3>
            <p>crrom.gmail.com</p>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1773NHekyd/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.card}
          >
            <div style={styles.icon}>📘</div>
            <h3>Facebook</h3>
            <p>Owagbayegun Jonathan</p>
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#1e3a8a",
    color: "white",
    padding: "80px 20px",
    textAlign: "center"
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto"
  },

  heading: {
    fontSize: "2.5rem",
    marginBottom: "10px"
  },

  subtitle: {
    color: "#e5e7eb",
    marginBottom: "40px",
    fontSize: "1.1rem"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px"
  },

  card: {
    background: "rgba(255,255,255,0.1)",
    padding: "25px",
    borderRadius: "12px",
    textDecoration: "none",
    color: "white",
    transition: "0.3s",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.2)"
  },

  icon: {
    fontSize: "2rem",
    marginBottom: "10px"
  }
};

export default Contact;
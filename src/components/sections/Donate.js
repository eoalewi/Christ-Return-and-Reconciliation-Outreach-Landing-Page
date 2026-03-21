import { motion } from "framer-motion";

function Donate() {
  return (
    <section id="donate" style={styles.section}>
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Support the Mission
        </motion.h2>

        <motion.p
          style={styles.text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Your support enables us to provide education, clothing, and feeding
          to children and families in need across Nigeria. Through your giving,
          lives are transformed and hope is restored.
        </motion.p>

        <motion.div
          style={styles.grid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div style={styles.card}>
            <h3>🎓 Scholarship</h3>
            <p>
              Providing access to education, school fees, and learning materials
              for children who cannot afford it.
            </p>
          </div>

          <div style={styles.card}>
            <h3>👕 Clothing</h3>
            <p>
              Restoring dignity by providing clothes for children and families
              in need.
            </p>
          </div>

          <div style={styles.card}>
            <h3>🍲 Feeding</h3>
            <p>
              Ensuring families and children receive meals and nourishment to
              survive and grow.
            </p>
          </div>

          <div style={styles.cardHighlight}>
            <h3>💳 Give / Donate</h3>
            <p><strong>Bank:</strong> Access Bank</p>
            <p><strong>Account No:</strong> 82845757839</p>
            <p><strong>Name:</strong> Jonathan Owagbayegun</p>
            <p style={styles.smallText}>
              Your giving fuels this mission and transforms lives.
            </p>
          </div>
        </motion.div>

        <p style={styles.note}>
          Every seed you sow helps us reach souls and transform lives.
        </p>
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
    backgroundAttachment: "fixed" // Parallax effect
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.65)"
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1100px",
    margin: "0 auto"
  },

  heading: {
    fontSize: "2.8rem",
    fontWeight: "700",
    marginBottom: "20px"
  },

  text: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
    marginBottom: "60px",
    color: "#e5e7eb",
    maxWidth: "750px",
    marginLeft: "auto",
    marginRight: "auto"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginBottom: "50px"
  },

  card: {
    background: "rgba(255,255,255,0.1)",
    padding: "25px",
    borderRadius: "12px",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.2)"
  },

  cardHighlight: {
    background: "rgba(245, 158, 11, 0.2)",
    padding: "25px",
    borderRadius: "12px",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(245, 158, 11, 0.6)",
    transform: "scale(1.03)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
  },

  smallText: {
    marginTop: "10px",
    fontSize: "0.9rem",
    color: "#f3f4f6"
  },

  note: {
    fontStyle: "italic",
    color: "#f3f4f6",
    marginTop: "20px"
  }
};

export default Donate;
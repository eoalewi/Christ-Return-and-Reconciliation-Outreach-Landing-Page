function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        <img
          src="http://res.cloudinary.com/dwhvilwc3/image/upload/v1773966370/bd83ek6kmepol42tgywl.png"
          alt="Missionary Logo"
          style={styles.logo}
        />
        <h2 style={styles.brandText}>
          Christ Return and Reconciliation Outreach Ministries
        </h2>
      </div>

      <div style={styles.links}>
        <a href="#" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#blogs" style={styles.link}>Blog</a>
        {/* <a href="#sermons" style={styles.link}>Sermons</a> */}
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 60px",
    background: "var(--primary)",
    color: "white"
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px" // space between logo & text
  },

  logo: {
    height: "45px",
    width: "45px",
    objectFit: "contain",
    borderRadius: "6px"
  },

  brandText: {
    fontSize: "16px",
    fontWeight: "600",
    maxWidth: "260px", // prevents overflow
    lineHeight: "1.2"
  },

  links: {
    display: "flex",
    gap: "30px"
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "15px"
  }
};

export default Navbar;
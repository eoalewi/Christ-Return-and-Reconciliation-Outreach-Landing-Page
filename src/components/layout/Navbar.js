function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        <img
          src="http://res.cloudinary.com/dwhvilwc3/image/upload/v1773995600/hsixnc6pina9sgtaavs5.png"
          alt="Missionary Logo"
          style={styles.logo}
        />
      </div>

      <div style={styles.links}>
        <a href="#" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#blogs" style={styles.link}>Blog</a>
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
    padding: "0 60px",
    background: "var(--primary)",
    color: "white",
    height: "75px",        // fixed navbar height
    boxSizing: "border-box"
  },

  brand: {
    display: "flex",
    alignItems: "center"
  },

  logo: {
    height: "200px",        // large but fits in navbar
    width: "auto",         // keeps aspect ratio
    objectFit: "contain",
    borderRadius: "6px"
  },

  links: {
    display: "flex",
    gap: "30px",
    alignItems: "center"
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "15px"
  }
};

export default Navbar;
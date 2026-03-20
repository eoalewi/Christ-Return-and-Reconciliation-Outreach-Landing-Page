import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect window resize for mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        <img
          src="http://res.cloudinary.com/dwhvilwc3/image/upload/v1773995600/hsixnc6pina9sgtaavs5.png"
          alt="Missionary Logo"
          style={{
            ...styles.logo,
            transform: menuOpen ? "translateY(10px) scale(0.95)" : "translateY(10px) scale(1)",
            transition: "transform 0.3s ease",
            height: isMobile ? "100px" : "150px",
          }}
        />
      </div>

      {/* Hamburger for mobile */}
      {isMobile && (
        <div style={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </div>
      )}

      {/* Links */}
      <div
        style={{
          ...styles.links,
          flexDirection: isMobile ? "column" : "row",
          position: isMobile ? "absolute" : "static",
          top: isMobile ? "75px" : "auto",
          left: 0,
          width: isMobile ? "100%" : "auto",
          background: isMobile ? "var(--primary)" : "transparent",
          padding: isMobile && menuOpen ? "20px 0" : 0,
          gap: isMobile ? "20px" : "30px",
          display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
          transition: "all 0.3s ease",
          zIndex: 9,
        }}
      >
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
    padding: "0 20px",
    background: "var(--primary)",
    color: "white",
    height: "75px",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 10,
  },

  brand: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    width: "auto",
    objectFit: "contain",
    borderRadius: "6px",
  },

  links: {
    display: "flex",
    alignItems: "center",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "15px",
  },

  hamburger: {
    fontSize: "28px",
    cursor: "pointer",
    userSelect: "none",
    color: "white",
  },
};

export default Navbar;
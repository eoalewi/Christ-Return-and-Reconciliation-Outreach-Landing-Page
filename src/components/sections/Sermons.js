// function Sermons() {
//   return (
//     <section id="sermons" style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>Our Mission Across Nigeria</h2>
//         <p style={styles.subtitle}>
//           See the areas where our missionary work impacts children, families, and communities nationwide.
//         </p>

//         {/* Map Container */}
//         <div style={styles.mapContainer}>
//           <img
//             src="https://media.istockphoto.com/id/1582537825/vector/kaduna-state-map-administrative-division-of-the-country-of-nigeria-vector-illustration.jpg?s=612x612&w=0&k=20&c=bD9xVwXPwd1qZ5fVHX8be0VcnALbWtpRNnqpKbuYyaI="
//             alt="Map of Nigeria"
//             style={styles.mapImage}
//           />

//           {/* Overlay Text */}
//           <div style={styles.overlayText}>
//             <p>
//               Our outreach spans across every state, reaching children, families, and communities with the love of Christ.  
//               <br />
//               {/* Through education, feeding programs, and clothing support, we bring hope to those in need. */}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// const styles = {
//   section: {
//     background: "#f9fafb",
//     padding: "80px 20px",
//     textAlign: "center"
//   },

//   container: {
//     maxWidth: "1000px",
//     margin: "0 auto"
//   },

//   heading: {
//     fontSize: "2.5rem",
//     fontWeight: "600",
//     marginBottom: "15px",
//     color: "#111827"
//   },

//   subtitle: {
//     color: "#6b7280",
//     marginBottom: "40px",
//     fontSize: "1.15rem",
//     lineHeight: "1.6"
//   },

//   mapContainer: {
//     position: "relative",
//     width: "100%",
//     overflow: "hidden",
//     borderRadius: "12px",
//     cursor: "pointer",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     boxShadow: "0 6px 20px rgba(0,0,0,0.1)"
//   },

//   mapImage: {
//     width: "100%",
//     height: "auto",
//     objectFit: "cover",
//     display: "block",
//     transition: "transform 0.3s ease"
//   },

//   overlayText: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     color: "#ffffff",
//     background: "rgba(0, 0, 0, 0.65)",
//     padding: "25px 35px",
//     borderRadius: "12px",
//     maxWidth: "85%",
//     fontSize: "1.15rem",
//     lineHeight: "1.6",
//     fontWeight: "500",
//     textAlign: "center",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
//   },

//   // Hover effect
//   mapContainerHover: {
//     transform: "scale(1.03)",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.25)"
//   }
// };

// export default Sermons;
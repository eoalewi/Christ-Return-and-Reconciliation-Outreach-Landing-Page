import './styles/global.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Blogs from './components/sections/Blogs';
// import Sermons from './components/sections/Sermons';
import Donate from './components/sections/Donate';
import Contact from './components/sections/Contact';
import JoinMission from "./components/sections/JoinMission";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Blogs />
<JoinMission />
      <Donate />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
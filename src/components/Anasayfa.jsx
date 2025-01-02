import Header from "./Header";
import Skills from "./Skills";
import Profile from "./Profile";
import Projects from "./Projects";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";


const Anasayfa = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Header */}
      <div className="w-full">
        <Header />
      </div>

      {/* Skills */}
      <div className="w-full">
        <Skills />
      </div>

      {/* Profile */}
      <div className="w-full">
        <Profile />
      </div>

      {/* Projects */}
      <div className="w-full">
        <Projects />
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Anasayfa;

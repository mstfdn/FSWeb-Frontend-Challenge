import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="container mx-auto p-6">
      <ThemeProvider>
        <LanguageProvider>
          <Header />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

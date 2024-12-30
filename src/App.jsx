import Anasayfa from "./components/Anasayfa";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="container mx-auto p-6">
      <ThemeProvider>
        <LanguageProvider>
          <Anasayfa />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

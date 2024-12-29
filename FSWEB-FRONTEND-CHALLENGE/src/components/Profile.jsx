import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Profile = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <section
      className={`my-8 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2 className="text-2xl font-bold">
        {language === "tr" ? "Profil" : "Profile"}
      </h2>
      <div
        className={`border p-4 ${
          darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
        }`}
      >
        <h3 className="text-red-500 font-light">
          {language === "tr" ? "Temel Bilgiler" : "Basic Information"}
        </h3>
        <p>
          {language === "tr" ? "Doğum Tarihi: 19.05.1996" : "Birth Date: 19.05.1996"}
        </p>
        <p>{language === "tr" ? "İkamet Şehri: Bursa" : "Residence City: Bursa"}</p>
        <p>
          {language === "tr"
            ? "Eğitim Durumu: Düzce Üniversitesi Yönetim Bilişim Sistemleri, 2021"
            : "Education: Düzce University Management Information Systems, 2021"}
        </p>
        <p>
          {language === "tr" ? "Tercih Ettiği Rol: Frontend, UI" : "Preferred Role: Frontend, UI"}
        </p>
      </div>
    </section>
  );
};

export default Profile;

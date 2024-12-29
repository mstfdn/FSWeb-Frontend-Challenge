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
        className={`flex justify-between border p-4 ${
          darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
        }`}
      >
        {/* Profil Bilgileri */}
        <div className="w-full sm:w-1/2 pr-4">
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

        {/* About Me Bölümü Sağda */}
        <div className="w-full sm:w-1/2 pl-4">
          <h3 className="text-red-500 font-light">
            {language === "tr" ? "Hakkımda" : "About Me"}
          </h3>
          <p>
            {language === "tr"
              ? "Merhaba, ben Mustafa. Yazılım geliştirmeye olan ilgim genç yaşlarda başladı ve şu anda frontend geliştirme konusunda uzmanlaşıyorum. Yeni teknolojileri öğrenmeye ve projeler geliştirmeye her zaman açığım. Takım çalışmasına yatkınım ve sorumluluk almayı seviyorum."
              : "Hello, I'm Mustafa. My interest in software development started at a young age, and now I specialize in frontend development. I am always open to learning new technologies and developing projects. I am a team player and enjoy taking responsibility."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;

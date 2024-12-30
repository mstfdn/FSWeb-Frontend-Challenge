import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Profile = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <section
      className={`my-8 p-8 flex flex-col md:flex-row ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Profil Bilgileri */}
      <div
        className={`flex flex-col w-full md:w-1/3 p-6 md:ml-24 rounded-lg border-2 ${
          darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-2xl font-bold mb-2">
          {language === "tr" ? "Profil" : "Profile"}
        </h2>
        <h3 className="text-red-500 font-bold mb-2">
          {language === "tr" ? "Temel Bilgiler" : "Basic Information"}
        </h3>

        {/* Doğum Tarihi */}
        <div className="flex mb-2">
          <p className="font-bold mr-9">
            {language === "tr" ? "Doğum Tarihi" : "Birth Date"}
          </p>
          <p className="font-normal">
            {language === "tr" ? "19.05.1996" : "19.05.1996"}
          </p>
        </div>

        {/* İkamet Şehri */}
        <div className="flex mb-2">
          <p className="font-bold mr-11">
            {language === "tr" ? "İkamet Şehri" : "Residence City"}
          </p>
          <p className="font-normal">
            {language === "tr" ? "Bursa" : "Bursa"}
          </p>
        </div>

        {/* Eğitim Durumu */}
        <div className="flex mb-2">
          <p className="font-bold mr-12">
            {language === "tr" ? "Eğitim Durumu" : "Education"}
          </p>
          <p className="font-normal">
            {language === "tr"
              ? "Düzce Üniversitesi Yönetim Bilişim Sistemleri, 2021"
              : "Düzce University Management Information Systems, 2021"}
          </p>
        </div>

        {/* Tercih Ettiği Rol */}
        <div className="flex mb-2">
          <p className="font-bold mr-5">
            {language === "tr" ? "Tercih Ettiği Rol" : "Preferred Role"}
          </p>
          <p className="font-normal">
            {language === "tr" ? "Frontend, UI" : "Frontend, UI"}
          </p>
        </div>
      </div>

      {/* About Me Bölümü */}
      <div
        className={`flex flex-col w-full md:w-1/2 p-6 md:ml-24 rounded-lg ${
          darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
        }`}
      >
        <h3 className="text-red-500 font-bold">
          {language === "tr" ? "Hakkımda" : "About Me"}
        </h3>
        <p>
          {language === "tr"
            ? "Merhaba, ben Mustafa. Yazılım geliştirmeye olan ilgim genç yaşlarda başladı ve şu anda frontend geliştirme konusunda uzmanlaşıyorum. Yeni teknolojileri öğrenmeye ve projeler geliştirmeye her zaman açığım. Takım çalışmasına yatkınım ve sorumluluk almayı seviyorum."
            : "Hello, I'm Mustafa. My interest in software development started at a young age, and now I specialize in frontend development. I am always open to learning new technologies and developing projects. I am a team player and enjoy taking responsibility."}
        </p>
      </div>
    </section>
  );
};

export default Profile;

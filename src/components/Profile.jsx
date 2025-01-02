import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Profile = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <section
      className={`flex justify-center items-center my-8 p-8 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div
        className={`flex flex-col md:flex-row w-full md:w-2/3 gap-8`}
      >
        {/* Profil Bilgileri */}
        <div
          className={`flex flex-col w-full md:w-1/3 p-6 md:ml-24 rounded-lg border-2 ${
          darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            } shadow-lg shadow-[5px_5px_10px_rgba(0,0,0,0.55)]`}
        >

          <h2 className="text-2xl font-bold mb-2">
            {language === "tr" ? "Profil" : "Profile"}
          </h2>
          <h3 className="text-red-500 font-bold mb-4">
            {language === "tr" ? "Temel Bilgiler" : "Basic Information"}
          </h3>

          {/* Bilgi Listesi */}
          <div className="space-y-4">
            {/* Doğum Tarihi */}
            <div className="flex flex-col sm:flex-row">
              <p className="font-bold sm:w-1/2">{language === "tr" ? "Doğum Tarihi" : "Birth Date"}</p>
              <p className="font-normal sm:w-1/2">{language === "tr" ? "19.05.1996" : "19.05.1996"}</p>
            </div>

            {/* İkamet Şehri */}
            <div className="flex flex-col sm:flex-row">
              <p className="font-bold sm:w-1/2">{language === "tr" ? "İkamet Şehri" : "Residence City"}</p>
              <p className="font-normal sm:w-1/2">{language === "tr" ? "Bursa" : "Bursa"}</p>
            </div>

            {/* Eğitim Durumu */}
            <div className="flex flex-col sm:flex-row">
              <p className="font-bold sm:w-1/2">{language === "tr" ? "Eğitim Durumu" : "Education"}</p>
              <p className="font-normal sm:w-1/2">
                {language === "tr"
                  ? "Düzce Ünv. Yönetim Bilişim Sistemleri, 2021"
                  : "Düzce Unv Management Information Systems, 2021"}
              </p>
            </div>

            {/* Tercih Ettiği Rol */}
            <div className="flex flex-col sm:flex-row">
              <p className="font-bold sm:w-1/2">{language === "tr" ? "Tercih Ettiği Rol" : "Preferred Role"}</p>
              <p className="font-normal sm:w-1/2">{language === "tr" ? "Frontend, UI" : "Frontend, UI"}</p>
            </div>
          </div>
        </div>

        {/* About Me Bölümü */}
        <div
  className={`flex flex-col w-full md:w-1/3 p-6 rounded-lg ${
    darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
  }`}
>
  <h3 className={`text-2xl font-semibold ${darkMode ? "text-white" : "text-black"}`}>
    {language === "tr" ? "Hakkımda" : "About Me"}
  </h3>

  {/* Hakkımda metnini sınırlamak ve taşmaması için */}
  <p className="max-w-sm mt-3 overflow-hidden text-ellipsis">
    {language === "tr"
      ? "Merhaba, ben Mustafa. Yazılım geliştirmeye olan ilgim genç yaşlarda başladı ve şu anda frontend geliştirme konusunda uzmanlaşıyorum. Yeni teknolojileri öğrenmeye ve projeler geliştirmeye her zaman açığım. Takım çalışmasına yatkınım ve sorumluluk almayı seviyorum."
      : "Hello, I'm Mustafa. My interest in software development started at a young age, and now I specialize in frontend development. I am always open to learning new technologies and developing projects. I am a team player and enjoy taking responsibility."}
  </p>
      
  <div className="relative flex justify-center w-full">
  <div
    className="w-[10rem] h-[1rem] border-[0.6rem] border-blue-500 rounded-l-3xl rounded-r-3xl opacity-65"
    style={{
      maxWidth: "90%", // Küçük ekranlar için genişlik sınırlaması
      position: "absolute",
      top: "-10.5rem", // Yükseklik kaymasını ayarlayın
      left: "-0.1rem"
    }}
  ></div>
</div>


      
      
      </div>

      </div>
    </section>
  );
};

export default Profile;

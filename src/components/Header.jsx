import styled from "styled-components";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import profilePic from "../assets/profile.jpg";
import linkedinLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.png";
import CustomSwitch from "./CustomSwitch";

const HeaderContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ darkMode }) => (darkMode ? "#1f2937" : "#e5e7eb")};
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
`;

const HeaderContent = styled.header`
  width: 100%;
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const ProfilePicture = styled.div`
  background-color: #ec4899;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  overflow: hidden;
  width: 70px;
  height: 70px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    position: relative;
    width: 20rem;
    height: 20rem;
    border-radius: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  margin-left: 2.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 1rem;
  margin-left: 1.75rem;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    filter: ${({ darkMode }) => (darkMode ? "brightness(0) invert(1)" : "none")};
    transition: opacity 0.3s ease; 
  }

  img:hover {
    opacity: 0.7; /* Hover durumunda opaklık azalır */
    transform: scale(1.1); /* Hover durumunda logo biraz büyür */
  }
`;


const SwitchText = styled.span`
  font-size: 0.875rem;
  cursor: pointer;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isChecked, setIsChecked] = useState(darkMode);

  const handleSwitchChange = () => {
    toggleDarkMode();
    setIsChecked(!isChecked);
  };

  return (
    <HeaderContainer darkMode={darkMode}>
      <HeaderContent>
        <div className="flex justify-end items-center mb-4 space-x-4 mr-20">
          <div className="flex items-center space-x-2">
            <CustomSwitch
              isChecked={isChecked}
              handleSwitchChange={handleSwitchChange}
            />
            <SwitchText darkMode={darkMode}>
              {darkMode
                ? language === "tr"
                  ? "Aydınlık Mod"
                  : "Light Mode"
                : language === "tr"
                ? "Karanlık Mod"
                : "Dark Mode"}
            </SwitchText>
          </div>

          <SwitchText darkMode={darkMode} onClick={toggleLanguage}>
            {language === "en" ? (
              <>
                <span className="text-pink-500">Türkçe</span>
                <span>'ye Geç</span>
              </>
            ) : (
              <>
                <span>Switch to </span>
                <span className="text-pink-500">English</span>
              </>
            )}
          </SwitchText>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col space-y-4 md:w-1/2">
            <Title>{language === "tr" ? "Merhaba! 👋" : "Hi! 👋"}</Title>
            <Subtitle>
              {language === "tr"
                ? "Ben Mustafa. Full-stack geliştiriciyim. Sağlam ve ölçeklenebilir frontend ürünler geliştirebilirim. Hadi tanışalım!"
                : "I'm Mustafa. I'm a full-stack developer. I can craft solid and scalable frontend products. Let's meet!"}
            </Subtitle>
          </div>

          <ProfilePicture>
            <img
              src={profilePic}
              alt={language === "tr" ? "Profil Fotoğrafı" : "Profile Picture"}
            />
          </ProfilePicture>
        </div>

        <SocialIcons darkMode={darkMode}>
          <a
            href="https://www.linkedin.com/in/mustafa-fidan-b65b12339/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="https://github.com/mstfdn" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" />
          </a>
        </SocialIcons>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

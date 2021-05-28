import React from "react";
import useTheme from "hooks/useTheme";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Button } from "components/Button";

const Page = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Text = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  font-size: 28px;
  font-weight: 700;
  justify-content: center;
`;

// const ButtonToggleTheme = styled.button`
//   text-align: center;
//   color: ${(props) => props.theme.colors.text};
//   background-color: ${(props) => props.theme.colors.primary};
//   justify-content: center;
// `;

function Home() {
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Page>
        <Text>{t("title")}</Text>
        <Text></Text>
        <Button onClick={() => toggleTheme()} scale={"md"}>{t("button.switchTheme")}</Button>
        <Button onClick={() => changeLanguage("en")}>EN</Button>
        <Button onClick={() => changeLanguage("th")}>TH</Button>
      </Page>
    </>
  );
}

export default Home;

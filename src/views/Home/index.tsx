import React from "react";
import useTheme from "hooks/useTheme";
import styled , { keyframes }from "styled-components";
import { useTranslation } from "react-i18next";
import { Button } from "components/Button";
import { types } from "contexts/ThemeContext/type";
import PageLayout from "components/layout/Page"
import SyText from "components/Text"
const Page = styled(PageLayout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;


let time=0
const fadeIn = keyframes`
0%   {opacity: 0;

}
100% {opacity: 1;}
`;


const Text = styled(SyText)`
  text-align: center;
  display: flex;
  justify-content: center;

  animation-delay: 0s;
  animation-duration: 0s;
  animation:${fadeIn} 1s forwards;
`;
const Image = styled(SyText)`
  text-align: center;
  display: flex;
  justify-content: center;
  animation:${fadeIn} 1s forwards;
  animation-delay: 2s;
  animation-duration: 2s;
  
`;
const Address = styled(SyText)`
  text-align: center;
  display: flex;
  justify-content: center;
  animation:${fadeIn} 1s forwards;
  animation-delay: 4s;
  animation-duration: 4s;
  
`;
const Input = styled.input`
  background: "palevioletred";
  color: $ "palevioletred";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  animation:${fadeIn} 1s forwards;
  animation-delay: 5s;
  animation-duration: 5s;

`;

// const ButtonToggleTheme = styled.button`
//   text-align: center;
//   color: ${(props) => props.theme.colors.text};
//   background-color: ${(props) => props.theme.colors.primary};
//   justify-content: center;
// `;

function Home() {
  const { changeTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Page>
        <Text fontSize="28px" bold >{t("title")}</Text>
        <Image >image</Image>
        <Address>Input your Address</Address>
        <Input/>
        <Button onClick={() => changeTheme(types.DARK)} scale={"md"}>{t("DARK")}</Button>
        <Button onClick={() => changeTheme(types.LIGHT)} scale={"md"}>{t("LIGHT")}</Button>
        <Button onClick={() => changeLanguage("en")}>EN</Button>
        <Button onClick={() => changeLanguage("th")}>TH</Button>
      </Page>
    </>
  );
}

export default Home;

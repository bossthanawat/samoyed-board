import React from "react";
import useTheme from "hooks/useTheme";
import styled from "styled-components";
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

const Text = styled(SyText)`
  text-align: center;
  display: flex;
  justify-content: center;
`;

function First() {
  const { changeTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Page>
        <Text fontSize="28px" bold>{t("title")}</Text>
        <Text></Text>
        <Button onClick={() => changeTheme(types.DARK)} scale={"md"}>{t("DARK")}</Button>
        <Button onClick={() => changeTheme(types.LIGHT)} scale={"md"}>{t("LIGHT")}</Button>
        <Button onClick={() => changeLanguage("en")}>EN</Button>
        <Button onClick={() => changeLanguage("th")}>TH</Button>
      </Page>
    </>
  );
}

export default First;

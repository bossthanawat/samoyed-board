import React from "react";
import styled from "styled-components";
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

  return (
    <>
      <Page>
        <Text fontSize="28px" bold>FIRST</Text>
      </Page>
    </>
  );
}

export default First;

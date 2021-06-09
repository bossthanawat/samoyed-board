import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import PageLayout from "components/layout/Page";
import SyText from "components/Text";
import { useSpring, animated, config, useTransition } from "react-spring";
import { useTranslation } from "react-i18next";

const Page = styled(PageLayout)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Text = styled(SyText)`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.theme.colors.text};
  border-radius: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function First() {
  const { t } = useTranslation();
  const [indexTitle, setIndexTitle] = useState(0);
  const [title] = useState(["Hi Samoyed Board", "Input your address"]);

  useEffect(() => {
    setTimeout(() => {
      setIndexTitle(1);
    }, 1000);
  }, []);

  const textSpring = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 100,
    config: config.molasses,
  });

  const logoSpring = useSpring(
    indexTitle === 0
      ? {
          to: { opacity: 1 },
          from: { opacity: 0 },
          delay: 100,
          config: config.molasses,
        }
      : {
          loop: true,
          from: { rotateZ: 0 },
          to: { rotateZ: 180 },
        }
  );

  const transition = useTransition(title[indexTitle], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 100,
    config: config.molasses,
  });

  return (
    <>
      <Page>
        <Wrapper>
          <animated.div style={logoSpring}>
            <Logo />
          </animated.div>
          <animated.div style={textSpring}>
            <Text fontSize="28px" bold style={{padding: 30}}>
              {t("Hi Samoyed Board")}
            </Text>
          </animated.div>

          {/* {transition((style, item) => (
            <>
            <animated.div style={{ ...style }}>
              <Text fontSize="28px" bold>
                {item}
              </Text>
            </animated.div>
            </>
          ))} */}
        </Wrapper>
      </Page>
    </>
  );
}

export default First;

import React, { useEffect, useRef, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Test from "./components_2/Header/Header";
import Intro from "./components_2/Intro/Intro";
import Rooms from "./components_2/Rooms/Rooms";
import Dining from "./components_2/Dining/Dining";
import Facility from "./components_2/Facility/Facility";
import Activity from "./components_2/Activity/Activity";
import Membership from "./components_2/Membership/Membership";
import Wedding from "./components_2/Wedding/Wedding";

import { Controller, Scene } from "react-scrollmagic";
import { createGlobalStyle } from "styled-components";
import GothamM from "./fonts/Gotham-Medium.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: 'GothamM';
    src: url(${GothamM}) format('truetype');
  }
  html {
    scroll-behavior: smooth;
    overflow-y: hidden;
  }
`;

function App() {
  const Controll = useRef(null);
  const Scene1 = useRef(null);

  const scrollHandler = useCallback(
    (e) => {
      e.preventDefault();
      window.removeEventListener("mousewheel", scrollHandler, {
        passive: false,
      });

      const controller = Controll.current.state.controller;
      let scrollPos = controller.scrollPos();

      if (e.deltaY > 0) {
        controller.scrollTo(scrollPos + 969);
      } else if (e.deltaY < 0) {
        controller.scrollTo(scrollPos - 969);
      }
      setTimeout(() => {
        window.addEventListener("mousewheel", scrollHandler, {
          passive: false,
        });
      }, 600);
    },
    [Controll]
  );

  useEffect(() => {
    window.addEventListener("mousewheel", scrollHandler, {
      passive: false,
    });
  }, [scrollHandler]);

  return (
    <ThemeProvider theme={theme}>
      {/* <Header></Header>
      <Intro></Intro> */}
      <GlobalStyle />
      <Test BoldTxt></Test>
      <Controller
        ref={Controll}
        globalSceneOptions={{ triggerHook: "onLeave" }}
      >
        <Scene pin>
          <div>
            <Intro ref={Scene1}></Intro>
          </div>
        </Scene>
        <Scene pin>
          <div>
            <Rooms></Rooms>
          </div>
        </Scene>
        <Scene pin>
          <div>
            <Dining></Dining>
          </div>
        </Scene>
        <Scene pin>
          <div>
            <Facility></Facility>
          </div>
        </Scene>
        <Scene pin>
          <div>
            <Activity></Activity>
          </div>
        </Scene>
        <Scene pin>
          <div>
            <Membership></Membership>
          </div>
        </Scene>
        <Scene pin>
          <div>
            <Wedding></Wedding>
          </div>
        </Scene>
      </Controller>
    </ThemeProvider>
  );
}

export default App;

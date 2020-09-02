import React, { useEffect, useRef } from "react";
import Test from "./components_2/Header/Header";
import Intro from "./components_2/Intro/Intro";
import Rooms from "./components_2/Rooms/Rooms";
import Dining from "./components_2/Dining/Dining";
import Facility from "./components_2/Facility/Facility";

import { Controller, Scene } from "react-scrollmagic";
import { createGlobalStyle } from "styled-components";
import GothamM from "./fonts/Gotham-Medium.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: 'GothamM';
    src: url(${GothamM}) format('truetype');
  }
`;

function App() {
  const Scene_1 = useRef();

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, [Scene_1]);

  const scrollHandler = (e) => {
    e.preventDefault();
    let scrollY = window.scrollY;
    console.log(Scene_1.current);
  };

  return (
    <>
      {/* <Header></Header>
      <Intro></Intro> */}
      <GlobalStyle />
      <Test BoldTxt></Test>
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <Scene ref={Scene_1} pin>
          <div>
            <Intro></Intro>
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
      </Controller>
    </>
  );
}

export default App;

import React from "react";
import Test from "./components_2/Header/Header";
import Intro from "./components_2/Intro/Intro";
import Rooms from "./components_2/Rooms/Rooms";
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
  return (
    <>
      {/* <Header></Header>
      <Intro></Intro> */}
      <GlobalStyle />
      <Test BoldTxt></Test>
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <Scene pin>
          <div>
            <Intro></Intro>
          </div>
        </Scene>
        <Scene pin>
          <div>
            <Rooms></Rooms>
          </div>
        </Scene>
      </Controller>
    </>
  );
}

export default App;

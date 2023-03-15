import React from "react"; 
import { useState,useMemo } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import styled from "styled-components";
import backgrounds from "./images/backgrounds.jpg";
import { MainLayout } from "./styles/Layout";
import { Orb } from "./Orb";
import { Navigation } from "./Navigation";
import { Dashboard } from "./Dashboard";
import { useGlobalContext } from "./GlobalContext";
import { Income } from "./Income";
import Expenses from "./Expenses";



function App() {
  const [active, setActive] = React.useState(1)

  const global = useGlobalContext()
  console.log(global);

  

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return (
      <div>
        <Orb />
      </div>
    )},[])

  return (
    <AppStyled backgrounds={backgrounds} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  )

}

const AppStyled = styled.div`
    min-height: 100vh;
    background-image: url(${(props) => props.backgrounds});
    position: relative;
    main {
      flex: 1;
      background: rgba(252, 246, 249, 0.78);
      border: 3px solid #ffffff;
      backdrop-filter: blur(4.5px);
      border-radius: 32px;
      overflow-x: hidden;
      &::-webkit-scrollbar {
      width: 0;
      }
    }
  `;

export default App;

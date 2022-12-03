import * as React from "react";
import styled from 'styled-components';
import { createRoot } from 'react-dom/client';
import Header from './components/header'
import Footer from "./components/footer";
import Body from "./components/body/body";

const RootContainer = styled.div`
  display: grid;
  width: 100%;
  padding: 2px;
  background-color: green;
  
  @media (max-width: 1000px) {
    background-color: blue;
  }
`

const App = () => {
    return (
        <RootContainer>
            <Header></Header>
            <Body>test</Body>
            <Footer></Footer>
        </RootContainer>
    )
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);

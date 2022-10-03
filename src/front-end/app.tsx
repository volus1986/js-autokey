import * as React from "react";
import {Button} from "@material-ui/core";
import styled from 'styled-components';
import { createRoot } from 'react-dom/client';

const CustomButtonContainer = styled.div`
  background-color: green;
  
  @media (max-width: 1000px) {
    background-color: blue;
  }
`

const App = () => {
    return (
        <div>
            <h1>
                Welcome to React App that build using Webpack and Babel separately
            </h1>
            <CustomButtonContainer>
                <Button>MUI button 2</Button>
            </CustomButtonContainer>

        </div>
    )
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);
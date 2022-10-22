import * as React from "react";
import styled from 'styled-components';
import MacrosList from "./macros-list";

const RootContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  width: 100%;
  height: calc(100vh - 230px);
  min-height: 300px;
  background-color: blue;
`


const Body = () => {
    return (
        <RootContainer>
            <MacrosList/>
            <div>macros text container</div>
        </RootContainer>
    )
}

export default Body;
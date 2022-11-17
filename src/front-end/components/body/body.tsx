import * as React from "react";
import styled from 'styled-components';
import MacrosList from "./macros-list";

const RootContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  margin-top: 2px;
  padding-bottom: 2px;

  width: 100%;
  height: calc(100vh - 230px);
  min-height: 300px;
  background-color: blue;
`

const CommandsTextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #000;
  font-size: xx-large;
  background-color: bisque;
`


const Body = () => {
    return (
        <RootContainer>
            <MacrosList/>
            <CommandsTextArea>
                a push&#13;delay 1000&#13;a release&#13;
            </CommandsTextArea>
        </RootContainer>
    )
}

export default Body;
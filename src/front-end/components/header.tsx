import * as React from "react";
import {Button} from "@material-ui/core";
import styled from 'styled-components';

const RootContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  background-color: green;
`

const ButtonsContainer = styled.div`
  background-color: green;
  
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100px;
  grid-column-gap: 5px;
  justify-content: left;
`

const Header = () => {
    return (
        <RootContainer>
            <ButtonsContainer>
                <Button>Add macros</Button>
                <Button>Remove macros</Button>
            </ButtonsContainer>
            <ButtonsContainer>
                <Button>Save</Button>
                <Button>Compile</Button>
                <Button>Run</Button>
            </ButtonsContainer>
        </RootContainer>
    )
}

export default Header;
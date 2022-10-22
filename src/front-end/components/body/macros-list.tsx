import * as React from "react";
import {Button} from "@material-ui/core";
import styled from 'styled-components';

const RootContainer = styled.div`
  display: grid;
  grid-auto-rows: 50px;
  width: 100%;
  min-width: 150px;
  max-width: 300px;
  background-color: indigo;
  overflow: auto;
  grid-row-gap: 5px;
`

const MacrosList = () => {
    return (
        <RootContainer>
            <Button>Macros 1</Button>
            <Button>Macros 2</Button>
            <Button>Macros 3</Button>
            <Button>Macros 4</Button>
            <Button>Macros 5</Button>
        </RootContainer>
    )
}

export default MacrosList;
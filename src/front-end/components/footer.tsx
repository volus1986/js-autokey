import * as React from "react";
import {Button} from "@material-ui/core";
// import {Button} from "@material-ui/core";
import styled from 'styled-components';

const RootContainer = styled.div`
  display: grid;
  width: 100%;
  height: 150px;
  background-color: red;
`

const Footer = () => {
    return (
        <RootContainer>
            <p>Footer</p>
        </RootContainer>
    )
}

export default Footer;
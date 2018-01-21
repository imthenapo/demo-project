import React from "react";
import { Box, Text, Menu, Anchor } from "grommet";
import { Actions } from "grommet-icons";
import styled, { keyframes } from "styled-components";

const StyledHeader = styled(Box)`
  height: 70px;
`;

const LogoText = styled(Text)`
  font-size: 2.5rem;
  color: blue;
  font-weight: bold;
`;

// const Button = styled.button`
//   /* Adapt the colours based on primary prop */
//   background: ${props => (props.primary ? "palevioletred" : "white")};
//   color: ${props => (props.primary ? "white" : "palevioletred")};
//
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

const Header = props => (
  <StyledHeader
    type="header"
    size="small"
    direction="row"
    align="center"
    float={false}
    fixed={true}
  >
    <Box pad="small">
      <LogoText>XCHA.io</LogoText>
    </Box>

    <Box flex={true} justify="end" direction="row" responsive={false}>
      <Menu icon={<Actions />} dropAlign={{ right: "right" }}>
        <Anchor href="#" className="active">
          First
        </Anchor>
        <Anchor href="#">Second</Anchor>
        <Anchor href="#">Third</Anchor>
      </Menu>
    </Box>
  </StyledHeader>
);

export default Header;

import React from "react";
import styled from "styled-components";

import Template from "../../UI/Template/Template";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  border-top: 1px solid #b4b4b4;
  width: 100%;
  z-index: 100;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Template>hello man</Template>
    </StyledFooter>
  );
};

export default Footer;

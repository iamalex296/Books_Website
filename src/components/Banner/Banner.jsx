import React from "react";

import styled from "styled-components";

import Template from "../../UI/Template/Template";

const StyledBannerImage = styled.img`
  height: 250px;
  width: 100%;
  border-radius: 10px;
`;

const Banner = ({ bannerImage }) => {
  return (
    <Template>
      <StyledBannerImage src={bannerImage} alt="banner-image" />
    </Template>
  );
};

export default Banner;

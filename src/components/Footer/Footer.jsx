import React from "react";
import styled from "styled-components";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

import Template from "../../UI/Template/Template";
import InputWithButton from "../../UI/Input/InputWithButton";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(180, 180, 180, 0.4);
  width: 100%;
  z-index: 100;
  min-height: 250px;
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  margin: 10px 0px;
  cursor: pointer;
  opacity: 0.6;
  font-size: 14px;
  transition-duration: 0.3s;

  :hover,
  :active {
    opacity: 1;
    color: #2e99fb;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Template alignItems="flex-start">
        <ul>
          <StyledLi>Bookshops</StyledLi>
          <StyledLi>Contact us</StyledLi>
          <StyledLi>Useful sites</StyledLi>
        </ul>

        <ul>
          <StyledLi>Privaci Policy</StyledLi>
          <StyledLi>Terms and Conditions</StyledLi>
          <StyledLi>Delivery Options</StyledLi>
          <StyledLi>Gift Cards and Vouchers Terms and Conditions</StyledLi>
        </ul>

        <ul>
          <StyledLi>
            <FacebookIcon color="primary" fontSize="small" /> Facebook
          </StyledLi>
          <StyledLi>
            <TwitterIcon color="primary" fontSize="small" />
            Twitter
          </StyledLi>
          <StyledLi>
            <InstagramIcon color="secondary" fontSize="small" />
            Instagram
          </StyledLi>
          <StyledLi>
            <YouTubeIcon color="secondary" fontSize="small" />
            YouTube
          </StyledLi>
        </ul>

        <ul>
          <StyledLi>Subscribe</StyledLi>
          <InputWithButton
            icon={<SendRoundedIcon />}
            buttonName="Send"
            placeholder="Email Adress"
            width={250}
          />
        </ul>
      </Template>
    </StyledFooter>
  );
};

export default Footer;

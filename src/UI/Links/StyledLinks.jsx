import styled from "styled-components";

import { Link, NavLink } from "react-router-dom";

export const StyledListLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  padding: 0px;
  margin-right: 30px;
  font-size: 12px;
  cursor: pointer;
  transition-duration: 0.3s;
  color: #dfdfdf;

  :hover,
  :active {
    color: #2e99fb;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  padding: 0px;
  margin-right: 30px;
  font-size: 12px;
  cursor: pointer;
  transition-duration: 0.3s;
  color: #dfdfdf;

  :hover,
  :active {
    color: #2e99fb;
  }
`;

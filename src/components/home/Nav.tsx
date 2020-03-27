import React from "react";
import { NavLink } from "react-router-dom";

// Local Files
import styled from "lib/emotion";
import Icon from "components/common/Icon";

import chat from 'static/icons/icon-chat.svg';

const NavWrapper = styled("nav")`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background: #fff;
  border-right: 1px solid ${props => props.theme.colors.grey};
`;

const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <NavLink to="#">
        <Icon src={chat}/>
      </NavLink>
    </NavWrapper>
  );
}

export default Nav

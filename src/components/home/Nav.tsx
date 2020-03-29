import React from "react";
import { NavLink } from "react-router-dom";

// Local Files
import styled from "lib/emotion";
import Icon, { chatIcon } from "components/common/Icon";

const NavWrapper = styled("nav")`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background: #fff;
  border-right: 1px solid ${props => props.theme.colors.grey};
  box-sizing: border-content;
  position: fixed;
  top: 0;
  left: 0;
`;

const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <NavLink to="#">
        <Icon icon={chatIcon}/>
      </NavLink>
    </NavWrapper>
  );
}

export default Nav

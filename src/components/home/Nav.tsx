import React from "react";
import { NavLink } from "react-router-dom";

// Local Files
import styled from "lib/emotion";
import Icon, { chatIcon, folderIcon, gridIcon, graphIcon } from "components/common/Icon";

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
  a {
    padding: 1rem 0;
    svg {
      fill: ${props => props.theme.colors.accent};
      opacity: .33;
    }
    &.active {
      svg {
        fill: ${props => props.theme.colors.primary};
        opacity: 1;
      }
    }
  }
`;

const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <NavLink to="/files" exact>
        <Icon icon={folderIcon}/>
      </NavLink>
      <NavLink to="/" exact>
        <Icon icon={graphIcon}/>
      </NavLink>
      <NavLink to="/inbox" exact>
        <Icon icon={chatIcon}/>
      </NavLink>
      <NavLink to="/settings" exact>
        <Icon icon={gridIcon}/>
      </NavLink>
    </NavWrapper>
  );
}

export default Nav

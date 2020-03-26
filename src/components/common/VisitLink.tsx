import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'lib/emotion'
import Icon from "./Icon";

import menu from "static/icons/menu.svg";

const VisitLinkWrapper = styled(NavLink)`
  padding: .5rem 1rem;
  background: ${props => props.theme.colors.light};
  display: flex;
  flex-direction: row;

`

const VisitLink: React.FC<{ count: number; title: string }> = ({
  count,
  title
}) => {
  return (
    <VisitLinkWrapper to="">
      <span data-name="count">{count}</span>
      <span data-name="title">{title}</span>
      <Icon src={menu} />
    </VisitLinkWrapper>
  );
};

export default VisitLink

import React from 'react'
import { ButtonHTMLAttributes } from 'react'

import styled from 'lib/emotion'
import Button from "./Button";

import menu from "static/icons/icon-more-horiz.svg";

export const menuIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path className="heroicon-ui" d="M4 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg>
)

const FilterItemWrapper = styled("button")<{
  outline?: boolean;
  active?: boolean;
}>`
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  background: ${props => (props.active ? props.theme.colors.primary : `#fff`)};
  color: ${props => (props.active ? props.theme.colors.light : props.theme.colors.accent)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: solid 1px ${props => (props.active ? props.theme.colors.primary : props.theme.colors.grey)};
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 1em;
  outline: none;
  padding: .65rem .4rem .65rem 1rem;
  cursor: pointer;
  svg {
    transform: rotate(90deg);
    display: block;
    fill: ${props => props.theme.colors.grey};
  }
  > div {
    flex-grow: 1;
    padding: 0 1rem;
    text-align: left;
  }
  > [data-name="count"] {
    color: ${props => (props.active ? props.theme.colors.light : props.theme.colors.primary)};
  }
`;

export interface IFilterItemProps {
  active?: boolean;
  count?: number;
  title: string;
  description?: string;
  outline?: boolean;
}

const FilterItem: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & IFilterItemProps> = ({ count, title, description, ...props }) => {
  return (
    <FilterItemWrapper {...props}>
      {count && <span data-name="count">{count}</span>}
      <div>
        <span data-name="title">{title}</span>
        {description && <span data-name="description">{description}</span>}
      </div>
      {menuIcon}
    </FilterItemWrapper>
  );
};

export default FilterItem;

import React from "react";
import { ButtonHTMLAttributes } from "react";

import styled from "lib/emotion";
import { moreHorizontalIcon } from "components/common/Icon";

const FilterItemWrapper = styled("button")<{
  outline?: boolean;
  active?: boolean;
}>`
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  background: ${(props) =>
    props.active && !props.outline ? props.theme.colors.primary : `#fff`};
  color: ${(props) =>
    props.active && !props.outline
      ? props.theme.colors.light
      : props.theme.colors.accent};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: solid 1px
    ${(props) =>
      props.active ? props.theme.colors.primary : props.theme.colors.grey};
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 1em;
  outline: none;
  padding: 0.5rem 0.4rem 0.65rem 1rem;
  cursor: pointer;
  align-items: center;
  min-height: 50px;
  transition: border ease-in-out 100ms;
  svg {
    transform: rotate(90deg);
    display: block;
    fill: ${(props) => props.theme.colors.grey};
  }
  > div {
    flex-grow: 1;
    margin-right: 1rem;
    text-align: left;
  }
  [data-name="title"] {
    display: block;
  }
  [data-name="description"] {
    opacity: 0.33;
  }
  > [data-name="count"] {
    margin-right: 1rem;
    display: block;
    color: ${(props) =>
      props.active ? props.theme.colors.light : props.theme.colors.primary};
  }
`;

export interface IFilterItemProps {
  active?: boolean;
  count?: number;
  title: string;
  description?: string;
  outline?: boolean;
}

const FilterItem: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & IFilterItemProps
> = ({ count, title, description, ...props }) => {
  return (
    <FilterItemWrapper {...props}>
      {count && <span data-name="count">{count}</span>}
      <div>
        <span data-name="title">{title}</span>
        {description && <small data-name="description">{description}</small>}
      </div>
      {moreHorizontalIcon}
    </FilterItemWrapper>
  );
};

export default FilterItem;

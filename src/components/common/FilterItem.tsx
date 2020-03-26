import React from 'react'

import styled from 'lib/emotion'
import Button from "./Button";

import menu from "static/icons/menu.svg";

const FilterItemWrapper = styled(Button)<{ outline?: boolean }>`
  padding: 0.5rem 1rem;
  background: ${props => props.theme.colors.light};
  display: flex;
  flex-direction: row;
  border: solid 1px ${props => props.theme.colors.light};
  border-radius: 4px;
`;

export interface IFilterItemProps {
  count?: number;
  title: string;
  description?: string;
  outline?: boolean;
}

const FilterItem: React.FC<IFilterItemProps> = ({ count, title, description, ...props }) => {
  return (
    <FilterItemWrapper {...props} icon={menu}>
      {count && <span data-name="count">{count}</span>}
      <div>
        <span data-name="title">{title}</span>
        {description && <span data-name="description">{description}</span>}
      </div>
    </FilterItemWrapper>
  );
};

export default FilterItem;

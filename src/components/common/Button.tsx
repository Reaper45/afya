
import * as React from 'react'
import { ButtonHTMLAttributes } from 'react'

import styled from 'lib/emotion'
import Icon from './Icon';

const ButtonWrapper = styled("button")`
  outline: none;
  border: solid 1px ${props => props.theme.colors.grey};
  background: #fff;
  padding: .65rem 1rem;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.secondary};
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
  ::active {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
`;

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & { icon?: string }> = ({ children, icon, ...props}) => {
  return (
    <ButtonWrapper {...props}>
      {children}
      {icon && <Icon src={icon} />}
    </ButtonWrapper>
  );
}

export default Button;

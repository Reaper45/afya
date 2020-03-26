
import * as React from 'react'
import { ButtonHTMLAttributes } from 'react'

import styled from 'lib/emotion'
import Icon from './Icon';

const ButtonWrapper = styled("button")`
  outline: none;
  border: solid 1px ${props => props.theme.colors.primary};
  background: #fff;
  padding: 1rem 1.5rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.secondary};
  border-radius: 3px;
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

import * as React from "react";
import { ButtonHTMLAttributes } from "react";

import styled from "lib/emotion";
import Icon from "components/common/Icon";

const ButtonWrapper = styled("button")<{
  active?: boolean;
  iconPosition?: "left" | "right";
}>`
  outline: none;
  border: solid 1px ${(props) => props.theme.colors.grey};
  background: #fff;
  padding: 0.65rem 1rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  transition: border ease-in-out 100ms;
  ${(props) =>
    props.active &&
    `
    border-color: ${props.theme.colors.primary} !important;
    color: ${props.theme.colors.primary};
    border-radius: 4px !important;
  `}
  > span {
    margin-${(props) =>
      props.iconPosition === "right" ? "left" : "right"}: 1em;
    fill: ${(props) =>
      props.active ? props.theme.colors.primary : props.theme.colors.grey};
  }
`;

export const ButtonGroup = styled("div")<{ inline?: boolean }>`
  display: ${(props) => (props.inline ? "inline-block" : "block")};
  margin-right: 2em;
  > button {
    border-radius: 0;
    border-left-color: transparent;
    border-right-color: transparent;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  > button:first-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-left-color: ${(props) => props.theme.colors.grey};
  }
  > button:last-of-type {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-right-color: ${(props) => props.theme.colors.grey};
  }
`;

const Button: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    iconPosition?: "left" | "right";
    icon?: JSX.Element;
    active?: boolean;
  }
> = ({ children, icon, ...props }) => {
  return (
    <ButtonWrapper {...props}>
      {icon && props.iconPosition === "left" && <Icon icon={icon} />}
      {children}
      {icon && props.iconPosition === "right" && <Icon icon={icon} />}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  iconPosition: "left",
};

export default Button;

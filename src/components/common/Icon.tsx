import * as React from 'react'
import { ImgHTMLAttributes } from 'react'
import styled from 'lib/emotion'

const IconWrapper = styled("img")<{ isActive?: boolean }>`
  color: ${props =>
    props.isActive ? props.theme.colors.icon : props.theme.colors.primary};
`;

const Icon: React.FC<ImgHTMLAttributes<HTMLImageElement> & {
  isActive?: boolean;
}> = props => {
  return <IconWrapper {...props} />;
};

export default Icon;

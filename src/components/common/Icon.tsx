import React, { HTMLAttributes } from 'react'
import styled from 'lib/emotion'

const IconWrapper = styled("img")<{ active?: boolean }>`
  color: ${props =>
    props.active ? props.theme.colors.icon : props.theme.colors.primary};
`;

const Icon: React.FC<HTMLAttributes<HTMLImageElement> & {
  active?: boolean;
}> = props => {
  return <IconWrapper {...props} />;
};

export default Icon;

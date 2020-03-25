import * as React from 'react'
import { ImgHTMLAttributes } from 'react'

import styled from 'lib/emotion'

const IconWrapper = styled("img")<{ active?: boolean }>`
  color: ${props =>
    props.active ? props.theme.colors.accent : props.theme.colors.primary};
`;

const Icon: React.FC<ImgHTMLAttributes<HTMLImageElement> & {
  active?: boolean;
}> = props => {
  return <IconWrapper {...props} />;
};

export default Icon;

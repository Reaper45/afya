import * as React from "react";
import { ImgHTMLAttributes } from "react";

import styled from "lib/emotion";

const AvatarWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled("div")`
  margin-right: 1em;
  flex-grow: 1;
`;

const ImageWrapper = styled("img")`
  border-radius: 1em;
  width: 40px;
  height: 40px;
`;

const AvatarTitle = styled("b")`
  display: block;
  font-size: 0.8em;
  color: #222222;
`;

const Description = styled("small")`
  color: ${props => props.theme.colors.accent};
  display: block;
  margin-top: 0.3rem;
  font-size: 0.7em;
`;

const Avatar: React.FC<ImgHTMLAttributes<HTMLImageElement> & {
  description?: string;
  title?: string;
  img: string;
}> = ({ description, title, img }) => {
  return (
    <AvatarWrapper>
      {(description || title) && (
        <TextWrapper>
          <AvatarTitle data-name="title">{title}</AvatarTitle>
          <Description data-name="description">{description}</Description>
        </TextWrapper>
      )}
      <div></div>
      <ImageWrapper src={img} alt="" />
    </AvatarWrapper>
  );
};

export default Avatar;

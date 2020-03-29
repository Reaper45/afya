import React from 'react'

import styled from "lib/emotion";

const ProgressWrapper = styled("span")<{ inline?: boolean }>`
  ${props =>
    props.inline &&
    `
  display: flex;
  align-items: center;
  `}
  [data-name="content"] {
    margin-right: 0.6rem;
    font-weight: bold;
  }
`;

const ProgressBar = styled("span")<{ progress?: number; inverted?: boolean; gradient?: boolean; }>`
  ${props =>
    props.inverted &&
    `
    background: ${props.theme.colors.grey};
  `}
  height: 4px;
  width: 100%;
  display: block;
  :after {
    content: "";
    background: ${props => props.gradient ? `linear-gradient(90deg, ${props.theme.colors.primary} 0%, #B794F4 100%)` : props.theme.colors.primary};
    height: 4px;
    width: ${props => props.progress}%;
    border-radius: 2px;
    display: block;
  }
`;

const ProgressDescription = styled("small")`
  color: ${props => props.theme.colors.accent};
  opacity: .66;
  margin-top: .5rem;
  font-size: .7em;
  display: block;
`;

/**
 * Display the progress bar
 * 
 * @param {number} props.progress progress percentage
 */
const Progress: React.FC<{
  description?: string;
  content?: string;
  progress?: number; // progress percentage
  inverted?: boolean;
  gradient?: boolean;
  inline?: boolean;
}> = ({ description, content, progress, inverted, gradient, inline }) => {
  return (
    <ProgressWrapper inline={inline}>
      {content && <span data-name="content">{content}</span>}
      <ProgressBar
        data-name="progress"
        progress={progress}
        inverted={inverted}
        gradient={gradient}
      ></ProgressBar>
      {description && (
        <ProgressDescription data-name="description">
          {description}
        </ProgressDescription>
      )}
    </ProgressWrapper>
  );
};

Progress.defaultProps ={
  inverted: false,
  gradient: false,
  progress: 0,
}

export default Progress;

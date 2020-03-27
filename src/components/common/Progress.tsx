import React from 'react'

import styled from "lib/emotion";


const ProgressWrapper = styled("span")`
`;

const ProgressBar = styled("span")<{ progress: number; inverted?: boolean }>`
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
    background: ${props => props.theme.colors.primary};
    height: 4px;
    width: ${props => props.progress}%;
    border-radius: 2px;
    display: block;
  }
`;

const ProgressDescription = styled("small")`
  color: ${props => props.theme.colors.accent};
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
}> = ({ description, content, progress = 0, inverted = false }) => {
  return (
    <ProgressWrapper>
      {content && <span data-name="content">{content}</span>}
      <ProgressBar
        data-name="progress"
        progress={progress}
        inverted={inverted}
      ></ProgressBar>
      {description && (
        <ProgressDescription data-name="description">
          {description}
        </ProgressDescription>
      )}
    </ProgressWrapper>
  );
};

export default Progress;

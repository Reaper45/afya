import React from 'react'

import styled from "lib/emotion";


const ProgressWrapper = styled("span")``;

const ProgressBar = styled("span")<{ progress: number; inverted?: boolean }>``;

const Progress: React.FC<{
  description?: string;
  content?: string;
  progress?: number;
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
      {description && <span data-name="description">{description}</span>}
    </ProgressWrapper>
  );
};

export default Progress;

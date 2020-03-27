import React from "react";

// Local Files
import styled from "lib/emotion";
import Button from "components/common/Button";
import Progress from "components/common/Progress";

const HeaderWrapper = styled("header")`
  display: flex;
  background: #fff;
  padding: 1.5rem 2rem;
  justify-content: space-between;
  align-items: center;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Button>Add Assesment +</Button>
      <div>
        <Progress inverted progress={40} description="24k / 40k patients seen" />
      </div>
    </HeaderWrapper>
  );
}

export default Header

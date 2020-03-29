import React from "react";

// Local Files
import styled from "lib/emotion";
import Button from "components/common/Button";
import Progress from "components/common/Progress";
import Avatar from "components/common/Avatar";

import avatar from "static/avatar.jpg";

const HeaderWrapper = styled("header")`
  display: flex;
  background: #fff;
  padding: 1.5rem 2em;
  justify-content: space-between;
  align-items: center;
`;

const RightSection = styled("div")`
  display: flex;
  align-items: center;
  > span:first-of-type {
    width: 160px;
  }
  > div:last-of-type {
    margin-left: 3em;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Button>Add Assessment +</Button>
      <RightSection>
        <Progress
          inverted
          progress={40}
          description="24k / 40k patients seen"
        />
        <Avatar
          img={avatar}
          title="Sandra Mamai"
          description="sandra.mamai@test.com"
        />
      </RightSection>
    </HeaderWrapper>
  );
};

export default Header;

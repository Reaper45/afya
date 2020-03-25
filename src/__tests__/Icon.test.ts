import React from "react";
import { shallow } from "enzyme";

import Icon from "components/common/Icon";

const src = "static/file.svg"

it("Shows icon given src file", () => {
  const component = shallow(<Icon src={src} />);
  expect(component.containsMatchingElement(<img src={src} />)).toBe(true);
});

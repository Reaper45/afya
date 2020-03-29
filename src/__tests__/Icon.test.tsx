import React from "react";
import { shallow } from "enzyme";

import Icon, { chatIcon } from "components/common/Icon";

it("render icon correctly", () => {
  const component = shallow(<Icon icon={chatIcon} />);
  expect(component).toMatchSnapshot();
});

it("render active icon", () => {
  const component = shallow(<Icon icon={chatIcon} active />);
  expect(component.containsMatchingElement(chatIcon)).toBe(true);
});

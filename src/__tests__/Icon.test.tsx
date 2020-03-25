import React from "react";
import { shallow } from "enzyme";

import Icon from "components/common/Icon";

const src = "static/file.svg"

it("render icon correctly", () => {
  const component = shallow(<Icon src={src} />);
  expect(component).toMatchSnapshot();
});

it("render active icon", () => {
  const component = shallow(<Icon src={src} active />);
  expect(component).toMatchSnapshot();
});
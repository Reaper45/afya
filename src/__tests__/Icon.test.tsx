import React from "react";
import { shallow } from "enzyme";

import Icon from "components/common/Icon";

const src = "static/file.svg"

it("Shows icon given src file", () => {
  const component = shallow(<Icon src={src} />);
  expect(component).toMatchSnapshot();
});

it("Active prop is undefined", () => {
  const component = shallow(<Icon src={src} />);
  expect(component.props().isActive).toBe(undefined);
});

it("Receives active prop", () => {
  const component = shallow(<Icon src={src} isActive={true} />);
  expect(component.props().isActive).toBe(true);
});

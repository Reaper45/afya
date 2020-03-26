import React from "react";
import { shallow } from "enzyme";

import VisitLink from "components/common/VisitLink";
import Icon from "components/common/Icon";

import icon from "static/icons/menu.svg";

const visit: { count: number; title: string } = { count: 4, title: "Kiambu" };

it("renders without crashing", () => {
  const component = shallow(<VisitLink {...visit} />);
  expect(component).toMatchSnapshot();
});

it("renders props correctly", () => {
  const component = shallow(<VisitLink {...visit} />);
  expect(component.find('[data-name="count"]').text()).toEqual("4");
  expect(component.find('[data-name="title"]').text()).toEqual("Kiambu");
});

it("contains more menu", () => {
  const component = shallow(<VisitLink {...visit} />);
  expect(component.containsMatchingElement(<Icon src={icon} />)).toBe(true);
});

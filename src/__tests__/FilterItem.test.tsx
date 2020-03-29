import React from "react";
import { shallow, mount } from "enzyme";

import { ThemeProvider } from "emotion-theming";

import { theme } from "theme";
import FilterItem, { IFilterItemProps } from "components/common/FilterItem";
import Icon, { moreHorizontalIcon } from "components/common/Icon";

import icon from "static/icons/menu.svg";

const filter: IFilterItemProps = {
  count: 4,
  title: "Kiambu",
  description: "Test Description",
};

it("renders without crashing", () => {
  const component = shallow(<FilterItem {...filter} />);
  expect(component).toMatchSnapshot();
});

it("renders props correctly", () => {
  const component = shallow(<FilterItem {...filter} />);
  expect(component.find('[data-name="count"]').text()).toEqual("4");
  expect(component.find('[data-name="title"]').text()).toEqual("Kiambu");
  expect(component.find('[data-name="description"]').text()).toEqual(
    "Test Description"
  );
});

it("contains more menu", () => {
  const component = mount(
    <ThemeProvider theme={theme}>
      <FilterItem {...filter} />
    </ThemeProvider>
  );
  expect(component.containsMatchingElement(moreHorizontalIcon)).toBe(true);
});

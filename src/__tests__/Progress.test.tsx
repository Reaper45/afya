import * as React from "react";
import { shallow } from "enzyme";

import Progress from "components/common/Progress";

it("render correctly", () => {
  const component = shallow(<Progress />);
  expect(component).toMatchSnapshot();
})

it("should render description", () => {
  const component = shallow(<Progress description="24k / 40k patients seen"/>);
  expect(component.find('[data-name="description"]').text()).toEqual(
    "24k / 40k patients seen"
  );
});

it("should render content value", () => {
  const component = shallow(<Progress progress={50} content="50%" />);
  expect(component.find('[data-name="content"]').text()).toEqual("50%");
});

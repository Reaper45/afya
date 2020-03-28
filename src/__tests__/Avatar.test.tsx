import * as React from "react";
import { shallow } from "enzyme";

import Avatar from "components/common/Avatar";

import avatar from "static/avatar.jpg";

it("renders correctly", () => {
  const component = shallow(<Avatar img={avatar} />);
  expect(component).toMatchSnapshot();
});

it("should renders title", () => {
  const component = shallow(<Avatar img={avatar} title="Sandra Mamai" />);
  expect(component.find('[data-name="title"]').text()).toEqual("Sandra Mamai");
});

it("should renders description", () => {
  const component = shallow(
    <Avatar img={avatar} description="sandra.mamai@test.com" />
  );
  expect(component.find('[data-name="description"]').text()).toEqual(
    "sandra.mamai@test.com"
  );
});


import React from "react";
import { shallow } from "enzyme";

import Home from "components/home";

describe("Test Home component", () => {
  it("renders without crashing", () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });
});

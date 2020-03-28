import React from "react";
import { shallow, mount } from "enzyme";

import Home from "components/home";
import Nav from "components/home/Nav";
import Header from "components/home/Header";

describe("Test correct home layout", () => {
  it("renders without crashing", () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });

  it("should contain the nav bar", () => {
    const component = shallow(<Home />);
    expect(component.containsMatchingElement(<Nav />));
  });

  it("should container the main content section", () => {
    const component = shallow(<Home />);
    expect(component.containsMatchingElement(<main />));
  });

  it("should contain the header", () => {
    const component = shallow(<Home />);
    expect(component.containsMatchingElement(<Header />));
  });
});


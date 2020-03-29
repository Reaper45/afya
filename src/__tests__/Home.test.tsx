import React from "react";
import { shallow, mount } from "enzyme";
import { ThemeProvider } from "emotion-theming";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { theme } from "theme";

import Home from "components/home";
import Nav from "components/home/Nav";
import Header from "components/home/Header";

const history = createBrowserHistory();

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

it("renders visits correctly", () => {
  const component = mount(
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Home />
      </Router>
    </ThemeProvider>
  );
  expect(
    component.find('[data-name="visit-items"]').find("button")
  ).toHaveLength(6);
});


it("renders issues correctly", () => {
  const component = mount(
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Home />
      </Router>
    </ThemeProvider>
  );
  expect(component.find('[data-name="issues"]').find("button")).toHaveLength(6);
});

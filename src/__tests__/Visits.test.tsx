import * as React from "react";
import { shallow, mount } from "enzyme";
import { ThemeProvider } from "emotion-theming";

import { theme } from "theme";

import Visits from "components/home/Visits";

const hospitalVisits: Array<{
  count: number;
  title: string;
  key: string;
}> = [
  {count: 7, title: "Kiambiu", key: "1" },
  {count: 12, title: "Mkuru Kwa Ruben", key: "2" },
  {count: 26, title: "Mkuru Kwa Njenga", key: "3" },
  {count: 38, title: "Baba dogo", key: "4" },
  {count: 41, title: "Kosovo", key: "5" },
  {count: 24, title: "Mukuru Kayaba", key: "6" },
];
 
it("renders without crashing", () => {
  const component = shallow(<Visits visits={hospitalVisits} />);
  expect(component).toMatchSnapshot();
})
  
it("renders all visits", () => {
  const component = mount(
    <ThemeProvider theme={theme}>
      <Visits visits={hospitalVisits} />
    </ThemeProvider>);
  expect(component.find("button")).toHaveLength(6);
})
 
import React, { SyntheticEvent } from "react";
import { shallow, mount } from "enzyme";
import { ThemeProvider } from "emotion-theming";

import { theme } from "theme";

import Button from "components/common/Button";
import Icon from "components/common/Icon";

import icon from "static/icons/icon-file.svg";

it("renders button correctly", () => {
  const component = shallow(<Button>Add Item</Button>);
  expect(component).toMatchSnapshot();
  expect(component.text()).toEqual("Add Item");
});

it("renders button with icon", () => {
  const component = shallow(<Button icon={icon}>Add Item</Button>);
  expect(component.containsMatchingElement(<Icon src={icon} />)).toBe(true);
});

it("handles click event", () => {
  const onClickHandler = jest.fn();
  const component = mount(
    <ThemeProvider theme={theme}>
      <Button onClick={onClickHandler}>Add Item</Button>
    </ThemeProvider>
  );

  component.find('button').at(0).simulate('click', { value: "clicked" })
  expect(onClickHandler).toHaveBeenCalled();
  expect(onClickHandler.mock.calls[0][0].value).toBe("clicked");
});
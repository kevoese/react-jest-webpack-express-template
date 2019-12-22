// react libraries
import React from "react";

// third party libraries
import { mount } from "enzyme";

// components
import Main from "./Main";

it("renders without crashing", () => {
  const wrapper = mount(<Main />);
  expect(wrapper).toMatchSnapshot();
});
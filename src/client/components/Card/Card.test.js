import React from "react";
import { findByTestAtrr, checkProps } from "../../../../Utils";
import { shallow,mount } from "enzyme";
import configureStore from "../../store";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";


import Card from "./index";

const store = configureStore();

describe("Card Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        title:"Job Title",
        employment_type:"full_time",
        description:"description test"
      };
      const propsErr = checkProps(Card, expectedProps);
      
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    const props =  {
        title:"Job Title",
        employment_type:"full_time",
        description:"description test"
    };
    beforeEach(() => {
      wrapper = mount(
        <ReduxProvider store={store}>
            <BrowserRouter>
                <Card info = {props} />
            </BrowserRouter>
        </ReduxProvider>
      );

    });

    it("Should Render Without errors", () => {
      const table = findByTestAtrr(wrapper, "CardComponent");
        
      expect(table.length).toBe(3);
    });

    it("Should Render a button", () => {
        const table = findByTestAtrr(wrapper, "Button");
          
        expect(table.length).toBe(1);
      });
  });
});

import React from "react";
import {  shallow } from "enzyme";
import Home from "./index";
import configureStore from "../../store";


import { findByTestAtrr, checkProps } from "../../../../Utils";

const store = configureStore();

const setUp = (props = {}) => {
  const component = shallow(<Home {...props} store={store}/>).childAt(0).dive();
  
  return component;
};

describe("Home Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        currentPage: 1,
        data: {},
        jobCount: 0,
        loading: false,
        totalPages: 3,
        viewed: []
      };
      const propsErr = checkProps(Home.WrappedComponent, expectedProps);
      
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have props', () => {

      let wrapper;
      let mockFunc;
      beforeEach(() => {
          mockFunc = jest.fn(1, 1 ,[]);
          const props = {
            currentPage: 1,
            data: {},
            jobCount: 0,
            changePage: mockFunc
          };
          wrapper = setUp(props);
      });

      it('Should render without errors', () => {
          const component = findByTestAtrr(wrapper, 'HomeComponent');
          
          expect(component.length).toBe(1);
      });

      it('Should render a TableList', () => {
          const h1 = findByTestAtrr(wrapper, 'Table');
          expect(h1.length).toBe(1);
      });

      it('Should render Buttons', () => {
          const desc = findByTestAtrr(wrapper, 'Buttons');
          expect(desc.length).toBe(1);
      });

  });

});

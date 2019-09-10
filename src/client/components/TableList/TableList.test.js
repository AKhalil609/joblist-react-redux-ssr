import React from "react";
import { findByTestAtrr, checkProps } from "../../../../Utils";
import { shallow,mount } from "enzyme";
import configureStore from "../../store";
import { Provider as ReduxProvider } from "react-redux";

import Table from "./index";

const store = configureStore();

describe("Table Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        currentPage: 1,
        data: {},
        jobCount: 0,
        loading: false,
        totalPages: 3,
        viewed: []
      };
      const propsErr = checkProps(Table.WrappedComponent, expectedProps);

      expect(propsErr).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    const props = {
      currentPage: 1,
      data: {},
      jobCount: 0,
      loading: false,
      totalPages: 3,
      viewed: []
    };
    beforeEach(() => {
      wrapper = mount(
        <ReduxProvider store={store}>
          <Table jobData={props} />
        </ReduxProvider>
      );

    });

    it("Should Render a button", () => {
      const table = findByTestAtrr(wrapper, "tableComponent");
        
      expect(table.length).toBe(3);
    });
  });
});

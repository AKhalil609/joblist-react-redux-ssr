import React from "react";
import { shallow } from "enzyme";
import Details from "./index";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { findByTestAtrr, checkProps } from "../../../../Utils";

const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  jobs: {
    loading: false,
    jobCount: 0,
    totalPages: 0,
    data: [],
    viewed: [],
    currentPage: 0
  }
};

const storeStateMockLoad = {
  jobs: {
    loading: true,
    jobCount: 0,
    totalPages: 0,
    data: [],
    viewed: [],
    currentPage: 0
  }
};

// const store = configureStore();

let store;
const setUp = (props = {}) => {
  store = mockStore(storeStateMock);
  const component = shallow(<Details {...props} store={store} />)
    .childAt(0)
    .dive();

  return component;
};

describe("Details Component", () => {
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
      const propsErr = checkProps(Details.WrappedComponent, expectedProps);

      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        data: {
          loading: false,
          jobCount: 0,
          totalPages: 0,
          data: [],
          viewed: [],
          currentPage: 0
        }
      };

      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAtrr(wrapper, "DetailsComponent");

      expect(component.length).toBe(1);
    });

    it("Should render a Card", () => {
      const h1 = findByTestAtrr(wrapper, "Card");
      expect(h1.length).toBe(1);
    });
  });

  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        data: {
          loading: true,
          jobCount: 0,
          totalPages: 0,
          data: [],
          viewed: [],
          currentPage: 0
        }
      };

      store = mockStore(storeStateMockLoad);
      wrapper = shallow(<Details {...props} store={store} />)
        .childAt(0)
        .dive();
    });

    it("Should render loading without errors", () => {
      const component = findByTestAtrr(wrapper, "LoadingComponent");

      expect(component.length).toBe(1);
    });

    it("Should render a Card", () => {
      const h1 = findByTestAtrr(wrapper, "DetailsComponent");
      expect(h1.length).toBe(0);
    });
  });
});

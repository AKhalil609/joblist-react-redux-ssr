import App from './App';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from './../Utils';
import React from 'react';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    
    return wrapper;
};

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            jobs: [{
                title: 'Example Job 1',
                descreption: 'Some text'
            }, {
                title: 'Example Job 2',
                descreption: 'Some text'
            }, {
                title: 'Example Job 3',
                descreption: 'Some text'
            }]
        }
        wrapper = setUp(initialState);
    });

    it('Should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });

    it('Should render Header without errors', () => {
        const component = findByTestAtrr(wrapper, 'Head');
        expect(component.length).toBe(1);
    });
});
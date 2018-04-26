import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from './LoginPage';

configure({adapter: new Adapter()});

describe('<LoginPage />', () => {
    it('should render something', () => {
        const wrapper = shallow(<LoginPage />);
        expect(wrapper.contains(<h1></h1>)).toEqual(true);
    })
})
import React from 'react'
import Header from './header'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'


describe('Testing <Header/>', ()=>{
    it('Header have rendered correctly', () => {
        const header = shallow(<Header/>);
        expect(toJSON(header)).toMatchSnapshot();
    })
})
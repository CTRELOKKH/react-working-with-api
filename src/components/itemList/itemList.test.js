import React from 'react'
import ItemList from './itemList'
import {mount} from 'enzyme'
import toJSON from 'enzyme-to-json'
import gotService from '../../services/gotService'


describe('Testing <ItemList/>', () => {
    const service = new gotService();
    const list = mount(<ItemList 
                            getData={service.getAllHouses}
                            renderItem={({name}) => name}/>)

    it('Click on item list must rerender all list in 1 instance', () => {
        list.setState({itemList: [{name: 'qwerty', id: 1},{name: 'qwerty2', id: 2}]});
        list.simulate('click');
        expect(list.find('ul')).toHaveLength(1)
    })
});
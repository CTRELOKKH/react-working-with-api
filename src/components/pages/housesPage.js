import React, {Component} from 'react';
import './characterPage.css';
import gotService from '../../services/gotService'

import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import RowBlock from '../rowBlock'


export default class HousesPage extends Component {
    gotService = new gotService()
    state = {
        error: false,
        selectedHouse: null
    }
    onItemSelected=(id)=>{
        this.setState({
            selectedHouse: id,
            error:false
        })
    }

    componentDidCatch(){
        console.log("ERROR")
        this.setState({
            error:true
        })
    }

    render(){
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllHouses}
            renderItem={({name})=> `${name}`}/>
        )

        const houseDetails = (
            <ItemDetails itemId={this.state.selectedHouse}
            getData={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                {/* <Field field='coatOfArms' label='Coat Of Arms'/> */}
                <Field field='titles' label='Titles'/>
                
            </ItemDetails>
        )
        return(
            <RowBlock left={itemList} right={houseDetails}/>
        )
        
    }
   
}
import React, {Component} from 'react';
import './characterPage.css';
import gotService from '../../services/gotService'
import {Col, Row, Container} from 'reactstrap';

import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import RowBlock from '../rowBlock'


export default class CharacterPage extends Component {
    gotService = new gotService()
    state = {
        
        selectedChar: null
    }
    onItemSelected=(id)=>{
        this.setState({
            selectedChar: id,
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
            getData={this.gotService.getAllCharacters}
            renderItem={({name, gender})=> `${name} (${gender})`}/>
        )

        const charDetails = (
            <ItemDetails itemId={this.state.selectedChar}
            getData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )
        return(
            <RowBlock left={itemList} right={charDetails}/>
        )
        
    }
   
}
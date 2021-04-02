import React, {Component} from 'react';
import './characterPage.css';

import gotService from '../../services/gotService'
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';



export default class SingleBookPage extends Component {
    gotService = new gotService()
    
   

    render(){  
       
        return(
            <ItemDetails itemId={this.props.bookId}
            getData={this.gotService.getBook}>
                <Field field='numberOfPages' label='Number Of Pages'/>
                <Field field='numberOfPages' label='NumberOfPages'/>
                <Field field='isbn' label='ISBN'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
        
    }
   
}
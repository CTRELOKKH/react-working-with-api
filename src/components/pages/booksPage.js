import React, {Component} from 'react';
import './characterPage.css';
import gotService from '../../services/gotService'
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import RowBlock from '../rowBlock'
import {withRouter} from 'react-router-dom'


class BooksPage extends Component {
    gotService = new gotService()
    state = {
        
        selectedBook: null
    }
    onItemSelected=(id)=>{
        this.setState({
            selectedBook: id,
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
            getData={this.gotService.getAllBooks}
            renderItem={({name, isbn})=> `${name} (${isbn})`}/>
            
        )

        const bookDetails = (
            
            <ItemDetails itemId={this.state.selectedBook}
            getData={this.gotService.getBook}>
                <Field field='numberOfPages' label='Number Of Pages'/>
                <Field field='numberOfPages' label='NumberOfPages'/>
                <Field field='isbn' label='ISBN'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
        return(
            <ItemList 
            onItemSelected={(itemId)=>{
               this.props.history.push(itemId)
            }}
            getData={this.gotService.getAllBooks}
            renderItem={({name, isbn})=> `${name} (${isbn})`}/>
           
            // <RowBlock left={itemList} right={bookDetails}/>
        )
        
    }
   
}

export default withRouter(BooksPage)
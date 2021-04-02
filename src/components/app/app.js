import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage'
import gotService from '../../services/gotService';
import {BooksPage, CharacterPage, HousesPage, SingleBookPage}  from  '../pages'

import './app.css';

export default class App extends Component {
    gotService = new gotService()
    state = {
        showRandomChar: true,
        error: false,
    }

    componentDidCatch(){
        console.log("ERROR")
        this.setState({
            error:true
        })
    }
    onToggleClick = () =>{
        this.setState((state)=>{
            return {
                showRandomChar: !state.showRandomChar
            }
        })

    }

    
    render(){
        if (this.state.error) {
            return <ErrorMessage/>
        }
        const char = this.state.showRandomChar ? <RandomChar/> : null
        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button className='btn btn-primary' type='button' onClick={this.onToggleClick}>Toggle Random Char</button>
                            </Col>
                        </Row>
                        <Route path='/characters' exact component={CharacterPage}/>
                        <Route path='/books' exact component={BooksPage}/>
                        <Route path='/houses' exact component={HousesPage}/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params
                           return <SingleBookPage bookId ={id}/>
                        }}/>
                        
                        
                    </Container>
                </div>
            </Router>
        );
    }
    
};
import nanoajax from "nanoajax";
import React from "react"
import {Component} from "react"
import Characters from "./Characters"

const fetchCharacters = (url, callback, current = []) => {
    nanoajax.ajax({url:url}, (code, responseText) => {
        const {next, results} = JSON.parse(responseText);
        next ? fetchCharacters(next, callback, current.concat(results)) : callback(current);
    });
};


export default class App extends Component {
    constructor(){
        super(...arguments); this.state={ characters: [] };
    }

    componentDidMount() {
        fetchCharacters('http://swapi.co/api/people/', (characters) => {
            this.setState({characters});
        })
    }

    render() {
        if (this.state.characters.length > 0) {
            return <Characters data={this.state.characters}/>;
        }
        return (<div className="loading">
            <img width={80} height={80} src="loading.gif"/>
            <span>Loading...</span>
        </div>);

    }
}

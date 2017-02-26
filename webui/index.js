
import nanoajax from 'nanoajax'
import React from "react"
import ReactDOM from "react-dom"
import Characters from "./Characters"

const fetchCharacters = (url, callback, current=[]) => {
    nanoajax.ajax({url:url}, (code, responseText) => {
        const json = JSON.parse(responseText);
        const {next, results} = json;
        next ? fetchCharacters(next, callback, current.concat(results)) : callback(current);
    });
};

fetchCharacters('http://swapi.co/api/people/', (characters) => {
    ReactDOM.render(<Characters data={characters}/>, document.getElementById('characters'));
});

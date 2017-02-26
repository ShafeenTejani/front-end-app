
import nanoajax from 'nanoajax'

const fetchCharacters = (url, callback, current=[]) => {
    nanoajax.ajax({url:url}, (code, responseText) => {
        const json = JSON.parse(responseText);
        const {next, results} = json;
        next ? fetchCharacters(next, callback, current.concat(results)) : callback(current);
    });
};

fetchCharacters('http://swapi.co/api/people/', (characters) => {
    const html = characters.map((c) => `<div>${c.name}</div>`).join("");
    document.getElementById("characters").innerHTML = `<div>${html}</div>`;
});

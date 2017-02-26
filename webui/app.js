
function fetchCharacters(url, current, callback) {
    nanoajax.ajax({url:url}, function (code, responseText) {
        var json = JSON.parse(responseText);
        if (json.next) {
            fetchCharacters(json.next, current.concat(json.results), callback);
        }
        else {
            callback(current);
        }
    });
}

fetchCharacters('http://swapi.co/api/people/', [], function (characters) {
    console.log("done with  " + characters);
    var html = "";
    characters.forEach(function(character) {
        html = html + "<div>" + character.name + "</div>";
    });

    document.getElementById("characters").innerHTML = "<div>" + html + "</div>";
});

// $(function() {

//     //use ?jsoncallback to avoid cross origin errors
//     const pokemon = "https://pokeapi.co/api/v2/generation/1"

//     $.getJSON(pokemon, {
//         format: "json",
//         tagmode: "any"
//     }).done(function(pokemonData) {
//         console.log(pokemonData)
//         $.each(pokemonData.pokemon_species, function(idx, pokemon) {
//             const pokeName = pokemon.name
//             const para = $("<p>").html("name of pokemon is " + (pokeName) + " idx no is " + idx)
//             para.appendTo("#pokeApi")
//         })
//     }).fail(function() {
//         console.log("Failed")
//     })
// })
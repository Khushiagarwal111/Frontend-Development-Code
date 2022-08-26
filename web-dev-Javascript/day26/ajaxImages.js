 //codeshare.io/4e4yOj
 //codeshare.io/4e4yOj
 //codeshare.io/4e4yOj
 /*$(function() {

             // use ? jsoncallback to avoid cross origin errors
             const flickrImages = "https://api.www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"

             $.getJSON(flickrImages, {
                 format: "json",
                 tagemode: "any"
             }).done(function(imageData) {
                     console.log(imageData)
                     $.each(imageData.items, function(idx, name) {
                             console.log(name)
                             $("<img>").attr("src", name.media.m).appendTo("#flickrApi")
                             if (idx == 5) {
                                 return false
                             })

                     })
             }).fail(function() {
             console.log("Failed....")
         })*/
 //  })
 //  /*
 $(function() {

         //use ?jsoncallback to avoid cross origin errors
         const flickrImages = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"

         $.getJSON(flickrImages, {
             format: "json",
             tagmode: "any"
         }).done(function(imageData) {
             console.log(imageData)
             $.each(imageData.items, function(idx, name) {
                 console.log(name)
                 $("<img>").attr("src", name.media.m).appendTo("#flickrApi")

                 if (idx == 5) {
                     return false;
                 }
             })

         }).fail(function() {
             console.log("Failed")
         })
     })
     //      // $(function() {

 //  //     //use ?jsoncallback to avoid cross origin errors
 //  //     const pokemon = "https://pokeapi.co/api/v2/generation/1"

 //  //     getJSON(pokemon, {
 //  //             format: JSON,
 //  //             tagmode: "any"
 //  //         }).done(function(imageData) {
 //  //             console.log(imageData)
 //  //             $.each(pokemonData.pokemon_species, function(idx, pokemon) {
 //  //                 const pokeName = capitalize(pokemon.name)

 //  //                 const para = $("<p>".html("Pokemon no" + (idx) + "name of pokemon is" + (pokeName)))
 //  //             ))
 //  //         })
 //  //         .fail(function() {
 //  //             console.log("Failed")
 //  //         })
 //  // })
//jQueryjQuery is lightweight js library
//syntax

//$('selector ').action('selector');
// $('selector').action();
//element selector
$('p').dblclick(function() {
    console.log('you DOUBLE clicked on a paragraph')
})
$('p').click(function() {
    console.log('you SINGLE clicked on a paragraph')
})
$('*').hover(function() {
    console.log('you HOVER on a paragraph')
})
$('#p').mouseenter(function() {
        console.log('you mouse enter event on a paragraph')
    })
    //on method
$('.para').on({
    mouseenter: function() {
        console.log(' mouse enter event')
    },
    dblclick: function() {
        console.log('you DOUBLE clicked on a paragraph')
    }

})

// })
$(document).ready()
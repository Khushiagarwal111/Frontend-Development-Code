// //theme color-26/5/2022
// rgb(255, 255, 255)
// rgb(255, 0, 0)
// rgb(0, 255, 0)
// rgb(0, 0, 255)
// rgba(255, 0, 0, 0.5)

rgb(140, 120, 0)

//theme
// # FFFFFF
function makeColors(r, g, b) { //255 255 255

    //ff=>factory fn
    // fn creates object every time it is called

    const color = {} //empt obj
    color.r = r // ppty of color obj
    color.g = g
    color.b = b
    color.rgb = function() { //method inside color  object
        const { r, g, b } = this
        return `rgb(${this.r},${this.g},${this.b})`
    }
    color.hex = function() {
        const { r, g, b } = this
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

    }
    return color // its sending a value 
}
const myColor = makeColors(140, 120, 0)
console.log("Object 1", myColor)
myColor.hex();
const textColor = makeColors(255, 255, 255)
console.log("Object 2", textColor)
textColor.rgb();
document.querySelector('h1').style.backgroundColor = myColor.rgb()
document.querySelector('h1').style.Color = textColor.hex()
// constructors function
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    color.prototype.rgb = function() { //method inside color  object
        console.log("the rgb method to prototype will have all the object", this)
            // const { r, g, b } = this
        return `rgb(${this.r},${this.g},${this.b})`
    }

}
const newColor = Color(120, 45, 90) // fn calling
console.log(newColor)

rgb(120, 120, 100)

const color1 = new Color(120, 120, 100); // constructor calling with new keyword
console.log(color1)

const color2 = new Color(120, 120, 210);
console.log(color2)
const color3 = new Color(120, 120, 210);
console.log(color3)
const color4 = new Color(120, 120, 210);
console.log(color4)
    //new operator
    //creates a new blank object
    //e.log(color1)
    //new operator
    //creates a new blank object
    //
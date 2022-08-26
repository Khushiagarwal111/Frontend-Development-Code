class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    rgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }
}
const newColor = new Color(120, 140, 255)
console.log(newColor)

const newColor1 = new Color(120, 140, 255)
console.log(newColor1)
const newColor2 = new Color(120, 140, 255)
console.log(newColor2)
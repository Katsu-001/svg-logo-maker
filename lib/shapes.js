// Class for shapes
class Shape {
    constructor() {
        this.color = ""
    }
    // Sets the color to user input
    setColor(userColor) {
        this.color = userColor
    }
}

// Extensions for basic shapes class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="40" width="150" height="150" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="120" r="75" fill="${this.color}"/>`
    }
}

module.exports = { Triangle, Square, Circle }
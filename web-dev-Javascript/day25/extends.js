class Pet {
    constructor(name, nickName) {
        console.log("this is coming from constructor")
        this.name = name,
            this.nickName = nickName
    }
    loving() {
        return `my ${this.nickName} is adorable`
    }
}

//parent---->pet(any pet like cat, dog, cow)
//child--->rabbit

class Rabbit extends Pet {
    constructor(name, nickName, food) {
        console.log("this is coming from rabbit constructor")
        super.this.name = name,
            this.nickName = nickName,
            this.food = food
    }
    sayHello() {
        return `"Helloooooooo"`
    }
}

class Cat extends Pet {
    sayhii() {
        return `"hii frommmmmm ${this.nickName}"`
    }
}
const newPet = new Pet("Geogiaaaa", "gia")
console.log(newPet);
const newCat = new Cat("Geogiiiiiiiiii", "giaaaaaaaaaaaaaaaaaaaa")
console.log(newCat.sayhii());
const newRabbit = new Rabbit("Gorge")
console.log(newRabbit.sayHello());
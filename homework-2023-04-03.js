/* You can find the homework assignment below:
Create a prototype (blueprint) for three of your favorite animals (for example, Cat, Dog, Elephant). Give them each a name, an age, and at least one other property, and at least two methods. For example, a bird may have a variable that indicates whether or not it can fly, and it may be able to perform two actions: jump and sleep.
Create a prototype for a Zoo, giving it at least 4 attributes. Specify a limit to the number of animals allowed in the Zoo
Create an instance of your animals, and set the values of the properties for each of them
Create at least two instances of a Zoo. Add your animals to whichever Zoo you would like
Please let me know if you have any questions. When you have completed the assignment, please place it a public file in your Github, and share the link with Salem and me.
Good luck! */

function Cat(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.meow = function (loudness = "medium") {
        switch (loudness) {
            case "low":
                console.log("meow.");
                break;
            case "medium":
                console.log("Meow!");
                break;
            case "high":
                console.log("MEOW!!!");
                break;
        }
    }
    this.drop = function (size = "average") {
        switch (size) {
            case "small":
                console.log(`${this.name} drops something ${size}.`);
                break;
            case "average":
                console.log(`${this.name} drops something ${size}.`);
                break;
            case "big":
                console.log(`${this.name} drops something ${size}.`);
                break;
        }
    }
}

function Dog(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.bark = function (times = 2) {
        console.log("Woof! ".repeat(times));
    }
    this.fetch = function (object = "stick") {
        console.log(`${this.name} fetches ${object}.`);
    }
}

function Rabbit(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.jump = function (distance = "short") {
        switch (distance) {
            case "short":
                console.log("*silent hop*");
                break;
            case "long":
                console.log("*silent leap*");
                break;
        }
    }
    this.flop = function (side = "right") {
        console.log(`${this.name} flops on the ${side} side.`);
    }
}

function Shelter(name, capacity = 0, works247 = true, private = false) {
    this.name = name;
    this.capacity = capacity;
    this.works247 = works247;
    this.private = private;
    this.places = Array();
    this.foster = function (animal) {
        if (this.places.length < this.capacity) {
            this.places.push(animal);
            console.log(`${animal.name} arrives at "${this.name}" shelter. ${this.capacity - this.places.length} places left.`);
        } else {
            console.log(`"${this.name}" shelter is full. Please choose another one for ${animal.name}.`);
        }
    }
}

animal_1 = new Cat("Jinx", 4, "Tabby");
animal_1.meow("high");
animal_1.drop("small");

animal_2 = new Dog("Charlie", 7, "Mutt");
animal_2.bark(3);
animal_2.fetch("ball");

animal_3 = new Rabbit("Hazel", 2, "Dutch");
animal_3.jump("long");
animal_3.flop("left");

shelter_1 = new Shelter("Happy Tree Friends", 1);
shelter_1.foster(animal_1);
shelter_1.foster(animal_2);

shelter_2 = new Shelter("Candy Mountain", 5)
shelter_2.foster(animal_2);
shelter_2.foster(animal_3);

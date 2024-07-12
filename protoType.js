// let person = new Array();

// console.log(Array.prototype);

//function / Object based prototype inheritance

function Person(name,age) {
    this.name = name;
    this.age = age;
}

function Cricketer(name,age,type,country) {
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Person.prototype = {
    eat: function () {
        console.log(`${this.name} is eating`)
    }
}

Cricketer.prototype = Object.create(Person.prototype)
Cricketer.prototype.constructor = Cricketer;

Cricketer.prototype.play = function () {
    console.log(`${this.name} is Playing`)
};

let sakib = new Cricketer('Shahin',47,'Engineer','Bd');
console.log(sakib.eat());
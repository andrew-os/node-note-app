var square = x => x * x;
console.log(square(9));

var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguements);
        console.log(`hi I'm ${this.name }`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`hi I'm ${this.name }`);
    }
};

user.sayHiAlt(1, 2 , 3);
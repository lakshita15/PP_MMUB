class abc{
    constructor(person)
    {
        this.person=person;
        this.age = 25;
    }
    sayHi(){
        console.log('Hello');
        console.log(this.person);
    }
}

let obj = new abc('Alexander');
console.log(obj);

// /***********output***********/
// abc {person: "Alexander", age: 25}
// age: 25
// person: "Alexander"


let obj2 = new abc('Lax');
console.log(obj2);
// /***********output***********/
// abc {person: "Lax", age: 25}

obj.sayHi();

// /***********output***********/
// hello
//alex


let fn =obj.sayHi;
fn();

 /***********output***********/
//undefined as class ke member function me automatically this is undefined bcos of 'use strict' when nrmlly called



let btn = document.querySelector('button');
btn.addEventListener('click',obj.sayHi);

 /***********output***********/
//  <button>click</button> this sayhi fnc is being called bcos of button to this will be eual to button(dom tree)



/************************BIND ON CLASS************************/

class abc{
    constructor(person)
    {
        this.person=person;
        this.age = 25;
        this.sayHi= this.sayHi.bind(this); //jisme change usme catch krrna GOOD PRACTISE
    }
    sayHi(){
        console.log('Hello');
        console.log(this.person);
    }
}

let obj = new abc('Alexander');
 let obj2 = new abc('lk');
console.log(obj); // o/p me 3 Data member

console.log(obj2);
let fn =obj.sayHi;
fn();

let btn = document.querySelector('button');
btn.addEventListener('click',obj.sayHi);

// /***********output***********/
 // hello
 //Alexander


 /************************ARROW FUNCTION ON CLASS************************/


class abc{
    constructor(person)
    {
        this.person=person;
        this.age = 25;
    }
    sayHi=()=>{ 
        console.log('Hello');
        console.log(this.person);
    }
}
//sayhi ka this is equal to obj ka this... 
// let obj = new abc('Alexander');

let obj2 = new abc('lk');
console.log(obj2); // automatically makes  sayHi as data member //sayhi acts as variable now


/*******OUTPUT********/
// abc {person: "lk", age: 25, sayHi: ƒ}
// age: 25
// person: "lk"
// sayHi: ()=> {…}
// arguments: (...)
// caller: (...)
// length: 0
// name: "sayHi"
// __proto__: ƒ ()
// [[FunctionLocation]]: class.js:90
// [[Scopes]]: Scopes[2]
// __proto__: Object

// let fn =obj.sayHi;
// fn();

let btn = document.querySelector('button');
btn.addEventListener('click',obj2.sayHi);

/*******OUTPUT********/

// Hello
//  lk
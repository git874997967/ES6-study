'use strict'
/* works in the block only */
/*for the import we should use babel and webpack or something else*/
/*import {Dad,Mom} from './module';
console.log(Dad+" "+Mom);*/
let fruit = 'apple';
/*works in the whole scope*/
let meat = 'pork';
console.log('fruit ' + fruit);
/*cannot be changed and also block scope*/
const vegs = 'eggplant';
//vegs = 'water';
console.log("vegs " + vegs + " " + meat + " meat");

//construct object
function Breakfast() {
    return ['cake', 'coffee', 'bread'];
}

/* consponse to [ & {*/
/* origin obj is a array cons so the obj to copy its value must be a array cons [] as well*/
let temp, dessert, drink, main;
temp = new Breakfast();
dessert = temp[0];
drink = temp[1];
main = temp[2];
let [dessert1, drink1, main1] = Breakfast();
console.log("obj in the array " + dessert1, drink1, main1);
console.log('obj in the obj ' + dessert, drink, main);
//deconstract a object
/*origin obj is a obj cons so the obj wanna copy its value must be a obj cons{} as well*/
function be() {
    return {
        de: "cake",
        dr: "cofe",
        ma: "bread"
    };
}

let {
    de: de,
    dr: dr,
    ma: ma
} = be();
console.log(de, dr, ma);
/*string template*/
/* the space is controlled by the real space wrapped with inverse `` */
console.log(`today's breakfast is${dessert},${drink},and,${main}`);

/*tagged template*/
function kitchen(strings, ...values) {
    console.log('tagged template demo');
    let result = '';
    for (let i = 0; i < values.length; i++) {
        result += strings[i];
        result += '-';
        result += values[i];
    }
    result += '?' + strings[strings.length - 1];
    return result;
}

let br = kitchen `today's breakfast is ${dessert},${drink},and,${main}`;
console.log(br);
/* operation on strings*/
let headphone = 'sony';
let watch = 'swatch';
let accer = `my favourite is ${headphone} and ${watch}`;
console.log(accer.startsWith('my') + ' ' + accer.endsWith('rado') + " " + accer.includes('and'));

/*default values in function*/
function lunch(meal = 'hotdog', drink = 'leamonmade') {

    return `${meal} 'and' ${drink} is today's lunch`;
}

console.log(lunch('big mac', 'tea'));
/*...Rest*/
/* use it in the array   will append array values to a new array vars in array could be different type*/
let array = [1, 2, 3];
let supercars = ['bmw', 'audi', 'poshche', 'saab', ...array];
console.log(...supercars);

/*... let function support more variables that defualt*/
function supper(meal, drink, ...others) {
    return `"my supper is " ${meal} and ${drink},${others}`;
}

console.log(supper('abc', 'def', 'ijk', 'hhh'));
/*destruct parameters*/
let buffet = function superBuffet(desert, drink, {
    location,
    restaurant
} = {}) {
    console.log(desert, drink, location, restaurant);

};
/* to use it must pass whole object*/
buffet('sushi', 'ice tea', {
    location: '9th',
    restaurant: 'new china buffet'
});
/*name attribute
to get function name*/
console.log(buffet.name + " name of the function");
/* arrow functions*/
/* let  name =function name=>{ return vale this part
could be empty}*/
let arrowFunction = (abc, def = 'def', ...ff) => {
    console.log(`this
is called by  arrowfunction and the param value is ${abc} and ${def} and ${ff}`);
};
arrowFunction("abc", 'ddfe', 'fff', 'dfgfbd');
/*use the same refname out side convenient.*/
let car = 'farrari',
    moto = 'harray';
let life = {
    car,
    moto,
    yahat() {
        return 'just a small boat'
    }
};
/* operate the object as java or array but that import so much chaos*/
life.house = 'village';
life['second carrer'] = 'cook';
console.log(life);
/*to tell two parts are exact the same use Object.is instead of '==' or '==='*/
isNaN(NaN);
console.log(Object.is(NaN, NaN) + " " +
    Object.is(+0, -0));
/*Object.assign  append  or cover write value from one object to another one*/
Object.assign(life, {
    car: 'young girl'
});
/* wife attr in the life object*/
/*Object.setPrototypeOf*/
let secondLife = Object.create(life);
console.log(Object.is(Object.getPrototypeOf(secondLife), life));
/*__proto__ and super*/
let thirdLife = {
    __proto__: life,
    yahat: 'a hugh luxary ferry',
    boat: Object.getPrototypeOf(secondLife).yahat
};
console.log(thirdLife);
/*iterators
return two things {value: xx,done: true/false}*/
let chef = function (foods) {
    let i = 0;
    return {
        next() {
            let done = (i >= foods.length),
                value = !done ? foods[i++] : undefined;
            return {
                value: value,
                done: done
            }
        }
    }
};
let wanghao = chef(['tomato', 'egg']);
console.log(wanghao.next());
console.log(wanghao.next());
/*generators go generate a iterator*/
let cook = function* (foods) {
    for (let i = foods.length - 1; i >= 0; i--) {
        yield foods[i];
    }
};
let yanghao = cook(['111', '222', '333', '444 wings']);
console.log(yanghao.next());
console.log(yanghao.next());
console.log(yanghao.next());

/*constructor   like java */
class boss {
    constructor(food) {
        this.food = food;
        this.dish=[];
    };
    get menu(){
        return this.dish;
    };
    /* to use the set function use object.menu='xxx' instead of obj.menu(XXX)*/
    set menu(dish){
        this.dish.push(dish);
    };
    cook() {
        console.log(this.food);
    };
    static bake(food){
        console.log(food);
    };
}
let sunhao = new boss('vegs');
sunhao.cook();
/*get and set functions in class */
let zhanghao=new boss();
console.log(zhanghao.menu='kongbao chicken');
console.log(zhanghao.menu='beijing beef');
/* static function  use the function directly instead of inital one class*/
boss.bake('big mac I lovin\'t');
/*extends   */
class  Person{
    constructor(name,birthday){
        this.name=name;
        this.birthday=birthday;
    }
    intro(){
        return `${this.name} ${this.birthday}`;
    }

};

class Chef extends Person{
    constructor (name,birthday,salary){
        /* extend another class must use the super method inside itself constructor!!!!*/
        super(name,birthday);
        this.salary=salary;
    }
    intro(){
        return `${this.name} ${this.birthday} ${this.salary}`;
    }
}

let zhaohao=new Chef('abc','def',4555);
console.log(zhaohao.intro());
/* new data collection  Set   a collection of data none of them are duplicate*/
let cars=new Set();
cars.add('bmw');
cars.add('honda');
/*none of them are dulicate*/
cars.add('bmw');
console.log(cars);
cars.delete('bmw');
cars.delete('benz');
cars.add('acura');
cars.add('chevolet');
cars.forEach( car=>{
    console.log(car);
});
console.log(cars.size+' '+cars+' '+cars.has('bmw'));
/* new data collection Map   a collection of key-value pair collection*/
let lectures =new Map();
let dataBase={};
let errorCoding=function(){

};
let cyberSecure='';
lectures.set(dataBase,'cs540');
lectures.set(errorCoding,'cs527');
lectures.set(cyberSecure,'cs578');
console.log(lectures+' ' +lectures.size);
console.log(lectures.get(dataBase));
lectures.forEach((value,key)=>{
console.log(`${value} ${key}`);
});
lectures.delete(errorCoding);
console.log(lectures.has(cyberSecure));
lectures.clear();
console.log(lectures);
/* Module */

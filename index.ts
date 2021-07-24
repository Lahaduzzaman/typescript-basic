// Any, Number, String, Boolean, Object, Array, Function, Tuple, Enum, Undefined, Null, void, never, unknown



// Any
let myName = "Lahaduzzaman Lahad";


// Number
let age: number;
age = 22;


// Boolean
let isHungry: boolean = false;


// StringOrNumber
type StringOrNumber = number | string;

type direction = 'left' | 'right' | 'top' | 'bottom';
let gameDirection: direction = "right" 

let studentId: StringOrNumber = 11181078;
studentId = 'web4-11181078'
studentId = 2018138;



// Object

interface Person {
    name: string;
    age: number;
    hobby?: string;
}

type PersonType =  { age: number, name: string,  hobby: string };
let person: Person  = {
    name: "Lahaduzzaman Lahad",
    age: 22,
    hobby: "Playing Cricket"
}

let person2 : Person = {
    name: "Someone",
    age: 50,
}


// Array 
const numbers: (number| string)[] = [24, 74, 67, 91, 'ytttjte'];
const persons: Person[] = [
    { 
        name: "Lahaduzzaman Lahad",
        age: 22,
        hobby: "Playing Cricket"
    },
    { 
        name: "Lahaduzzaman Lahad",
        age: 22,
        hobby: "Playing Cricket"
    },
    { 
        name: "Lahaduzzaman Lahad",
        age: 22,
        hobby: "Playing Cricket"
    }
];




// Functions

const greeting = (name: string) : void => {
    console.log(`Hello ${name}`)
}

greeting("TypeScript");

const add = (a: number, b: number): number => {
    return a + b 
}

const introduce = ({name, age} : Person) : void => {
    console.log(`Hello, My name is ${name}, and I'm ${age} year old!`)
}

introduce({
    name: "Lahaduzzaman Lahad",
    age: 22,
    hobby: "Playing Cricket"
});

const getArray = <T>(arr: T[]): T[] => {

    return arr
}

getArray<string>(['2fdhtrh', 'drfeeekioi gdfgd' ]);
getArray<number>([ 2, 32,47, 7 ]);



// Enum
enum Week  {
    Sat = 'SAT',
    Sun = "SUN",
    Mon = "MON",
    Tue = "TUE",
    Wed = "WED",
    Thr = "THR",
    Fri = "FRI"
}

console.log(Week.Mon)
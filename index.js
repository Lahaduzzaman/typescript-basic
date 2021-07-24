"use strict";
// Any, Number, String, Boolean, Object, Array, Function, Tuple, Enum, Undefined, Null, void, never, unknown
// Any
var myName = "Lahaduzzaman Lahad";
// Number
var age;
age = 22;
// Boolean
var isHungry = false;
var gameDirection = "right";
var studentId = 11181078;
studentId = 'web4-11181078';
studentId = 2018138;
var person = {
    name: "Lahaduzzaman Lahad",
    age: 22,
    hobby: "Playing Cricket"
};
var person2 = {
    name: "Someone",
    age: 50,
};
// Array 
var numbers = [24, 74, 67, 91, 'ytttjte'];
var persons = [
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
var greeting = function (name) {
    console.log("Hello " + name);
};
greeting("TypeScript");
var add = function (a, b) {
    return a + b;
};
var introduce = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("Hello, My name is " + name + ", and I'm " + age + " year old!");
};
introduce({
    name: "Lahaduzzaman Lahad",
    age: 22,
    hobby: "Playing Cricket"
});
var getArray = function (arr) {
    return arr;
};
getArray(['2fdhtrh', 'drfeeekioi gdfgd']);
getArray([2, 32, 47, 7]);
// Enum
var Week;
(function (Week) {
    Week["Sat"] = "SAT";
    Week["Sun"] = "SUN";
    Week["Mon"] = "MON";
    Week["Tue"] = "TUE";
    Week["Wed"] = "WED";
    Week["Thr"] = "THR";
    Week["Fri"] = "FRI";
})(Week || (Week = {}));
console.log(Week.Mon);

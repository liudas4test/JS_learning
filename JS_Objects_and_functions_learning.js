//-------------creating objects--------------

/*var testPerson = {
    name: 'Bird',
    yearOfBirth: 1919,
    job: 'jobless'
};*/
/*
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person.prototype.calculateAge = function(){
    console.log(2017 - this.yearOfBirth);
};

Person.prototype.lastName = 'Tree';

var testPerson = new Person('Bird',1912,'jobless');
var secondTestPerson = new Person('Ell', 1933, 'retired');

testPerson.calculateAge();
secondTestPerson.calculateAge();

console.log(testPerson.lastName);
console.log(secondTestPerson.lastName);
*/

//---------Object create--------
/*
var personProto = {
    calculateAge: function() {
        console.log(2017-this.yearOfBirth);
    }
};

var ppp = Object.create(personProto);
ppp.name= 'PPP';
ppp.yearOfBirth = 1955;
ppp.job = 'jobless';

var x = Object.create(personProto, {
    name: {value: 'xxx'},
    yearOfBirth: {value: 1999},
    job: {value: 'student'}
});
*/

//-55---primitives vs. objects---
//Primitives
/*var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects

var obj1 = {
    name: 'name1',
    age: 55
};
var obj2 = obj1;
obj1.age = 33;
console.log(obj1.age);
console.log(obj2.age);

//Functions

var age = 22;
var obj = {
    name : 'name1',
    city : 'Country'
};

function change(a,b){
    a = 33;
    obj.city = 'City';
};

change(age, obj);
console.log(age);
console.log(obj.city);*/

//----56--functions passing as arguments
/*
var yers = [1990, 2000, 2010, 1991, 2015];
function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2017 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxRate(el){
    if(el >= 18)
    {
        return Math.round(206.9 - (0.67*el));
    }
    else
    {
        return -1;
    }
    
}


var ages = arrayCalc(yers,calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rate = arrayCalc(ages,maxRate);
console.log(ages);
console.log(fullAges);
console.log(rate);
*/

//---57--functions returning function--
/*
function interviewQuestion(job){
    if(job === 'worker'){
        return function(name){
            console.log(name + 'What do you work?');
        }
    } else if (job === 'driver'){
        return function(name){
            return function(name2){
                console.log(name + ' What do you drive? '+ name2);
            }
            
        }
    } else {
        return function(name){
            console.log('What do you do?');
        }
    }
}

var workerQuestion = interviewQuestion('worker');
var driverQuestion = interviewQuestion('driver');
driverQuestion('XXX')('MB');
workerQuestion('Mark');
interviewQuestion('driver')('Micius')('Tractor');
*/

//---58--immediately invoked function expressions IIFE---
/*
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (x){
    var score = Math.random() * 10;
    console.log(score >= 5 - x);
})(5);
*/

//---59---closures---
/*
function retirement(retirementAge) {
    var a = 'some text here.';
    return function(yearOfBirth){
        var age = 2017 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retireUS = retirement(66);
var retireDE = retirement(65);

retireUS(1999);
retireDE(1988);
*/

//---60--bind_call_apply---
/*
var person = {
    name: 'Name1',
    age: 99,
    job: 'plumber',
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('Ipsum lorum '+ timeOfDay +' lopon '+ this.name +' darum ipsum '+ this.age + this.job);
        } else if (style === 'work') { 
            console.log('Wipsum workum '+ timeOfDay +' wowon '+ this.name +' warum wipsum '+ this.age + this.job);
        }
    }
}

var person2 = {
    name: 'Name2',
    age: 88,
    job: 'pilot'
};

person.presentation('formal','evening');
person.presentation.call(person2,'work','morning');

var personFriendly = person.presentation.bind(person,'work');

personFriendly('morning');

var person2Formal = person.presentation.bind(person2,'formal');
person2Formal('night');
*/

var years = [1990, 2000, 2010, 1991, 2015];
function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2017 - el;
}

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullNZ = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullNZ);
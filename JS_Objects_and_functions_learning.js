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
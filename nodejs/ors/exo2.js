/*
== == == == == == == == == ==
Write the necessary code so that the following code works

const pupils = [{
    name: 'Alice',
    age: 7
}, {
    name: 'Bob',
    age: 6
}, {
    name: 'Charlie',
    age: 8
}];

const pupilNames = pupils.pick('name');
console.log(pupilNames); // outputs ['Alice', 'Bob', 'Charlie']
== == == == == == == == == ==
*/

const pupils = [{
    name: 'Alice',
    age: 7
}, {
    name: 'Bob',
    age: 6
}, {
    name: 'Charlie',
    age: 8
}];
pupils.pick = () => pupils.map(({ name }) => name);

const pupilNames = pupils.pick('name');
console.log(pupilNames);
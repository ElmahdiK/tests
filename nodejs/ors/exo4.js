/*
== == == == == == == == == ==
Construire un tableau de N entiers aléatoires dans l'intervalle [0..1E9[
trouver le min et le max de 2 façons : une élégante "à la javascript" et une plus efficace
tester pour N = 10, 1000, 100 000 en faisant un timing précis de chaque étape (création et min/max)
== == == == == == == == == ==
*/

// construction du tableau à N entiers
const arrayNumbers = (n) => {
    console.time("timing_création");
    let array = [];
    for (let i = 0; i < n; i++) array.push(getRandomInt(n));
    console.timeEnd("timing_création");
    return (array);
}
const getRandomInt = (max) => Math.floor(Math.random() * max);

// version javascript
// min
const findMinJS = arr => {
    console.time("timing_min_JS");
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    console.timeEnd("timing_min_JS");
    return min;
}
// max
const findMaxJS = arr => {
    console.time("timing_max_JS");
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
    }
    console.timeEnd("timing_max_JS");
    return max;
}

// version efficace
// min
const findMin = arr => {
    console.time("timing_min");
    let min = Math.min(...arr);
    console.timeEnd("timing_min");
    return min;
}
// max
const findMax = arr => {
    console.time("timing_max");
    let max = Math.max(...arr);
    console.timeEnd("timing_max");
    return max;
}

let arrNum = arrayNumbers(1000); // 10 - 1000 - 100000
console.log(arrNum);
console.log({ min: { js: findMinJS(arrNum), efficace: findMin(arrNum) } });
console.log({ max: { js: findMaxJS(arrNum), efficace: findMax(arrNum) } });
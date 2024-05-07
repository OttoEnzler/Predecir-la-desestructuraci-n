/*PRIMERA PREDICCION
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)//logs Tesla
console.log(otherRandomCar)//logs Mercedes*/

/*SEGUNDA PREDICCION
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);//Reference Error, name no esta definido
console.log(otherName);//logs Elon*/
/*TERCERA PREDICCION
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);//logs 12345
console.log(hashedPassword);//undefined, password no esta definido en person*/

/*CUARTA PREDICCION
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);//logs false
console.log(first == third);//lofs true
*/


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);//logs value
console.log(secondKey);// logs [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);// logs 1
console.log(willThisWork);// mi prediccion: undefined --- lo que logeo: 5





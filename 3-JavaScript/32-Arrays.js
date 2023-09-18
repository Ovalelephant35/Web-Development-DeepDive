let cars = ["Maruti" , "Honda" , "Toyota"];
console.log(cars[1]);
cars[1] = "Suzuki";
console.log(cars);
cars.push("Mercedes");//added at the end
console.log(cars);
cars.pop();//remove last element
console.log(cars);
cars.unshift("Mahindra");//added at the beginning
console.log(cars);
cars.shift();//remove the first element
console.log(cars);
let len = cars.length;
console.log(len);
let lent = cars.indexOf("Suzuk");//return -1 if element is not present
console.log(lent);
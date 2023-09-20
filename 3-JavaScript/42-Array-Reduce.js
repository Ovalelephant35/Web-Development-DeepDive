//array.reduce() = reduces an array to single value one of the best way is to sum up the given array 

let  prices = [1,2,3,4,5,6,7,87];
let total = prices.reduce(checkout);
console.log(total);
function checkout(total, element){
    return total+element;
}
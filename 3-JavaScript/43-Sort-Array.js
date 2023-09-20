let grades = [100,30,40,50,120];

grades = grades.sort(ascending);
grades.forEach(print);
function ascending(x,y){
    return x-y;
}
function print(element){
    console.log(element);
}
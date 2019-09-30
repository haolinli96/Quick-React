
    function sum(x,y,z) {
         print(this);
    return x+y+z;
    }
const num = [1,2,3];

console.log(sum(...num));
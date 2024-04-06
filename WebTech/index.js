let a=[1,3,4,2,3,1,2];
let result=0;
a.forEach(element => {
    result=result^element;
    console.log(result)
});
console.log("-----",result);
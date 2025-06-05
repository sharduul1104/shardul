// console.log("hello world");
// let number=10;
// if(number%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
// }
// let num=23;
// const prompt = require ('prompt-sync')();
// const name = prompt("what is your name? ");
// console.log ("hello," " + name +"!");
    // function square (num) {
    //     return num*num
    // }
    // console.log(square(1000))
    function pokemon(name,type){
        console.log("pokemon name: " + name);
        type();

    }
    function pikachu () {
        console.log("pikachu is an electric pokemon.");
    }

    console.log(pokemon("pikachu", pikachu));
    
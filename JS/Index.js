
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = "<h1>JS Starter Carlos Piza</h1>";
init();

function init()
{
    // variables();
    // hoisting();
    // bucles();
    //continue_Exmpl();
    funciones();
}

function funciones(){
    var myCar = {make:"honda", model:"Accord", year:1998},x,y;

    x = myCar.make;
    console.log(x);
    debugger;
    myFunc(myCar);
    y = myCar.make;

    console.log(y);
}

function myFunc(theObject){
   theObject.make = "Toyota"; 
}

function continue_Exmpl(){
    var i = 0;
    var j = 0;
    //checkiandj:

    while(i<4){
        console.log(i);
        i+=1;
        checkj:
        
        while (j>4) {
          console.log(j);
          j-=1;

          if((j % 2)==0){
              continue checkj;
          }
            console.log(j + " is odd.");
        }
        console.log(" i = " + i);
        console.log(" j = " + j);       
    
    }
}


function bucles(){
    let arr = [3,5,7];

    arr.foo= "Hello";

    for(let i in arr){
        console.log(i);
    }

    for(let i of arr){
        console.log(i);
    }
}


function hoisting(){
    console.log(x===undefined);
    var x = 3;

    var x;
    console.log(x===undefined);
    x = 3;

    foo();
    var baz = function(){
        console.log("bar2");
    };
    baz();   

}

function foo(){
    console.log("bar");
}


function variables(){

    var a;
    console.log('el valor de a es ' + a);

    console.log('el valor de b es ' + b);
    var b;

    var c;
    console.log('el valor de c es ' + c);

    let z;
    console.log('el valor de z es ' + z);

    console.log('el valor de y es ' + y);
    let y;

    if(true){
    var x = 5;
    }

    console.log(x);

    if(true){
    let y = 5;
    }

    console.log(y);

}
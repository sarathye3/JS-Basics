
//variables
let country="India";
let continent="Asia";
let population="1846 million";
console.log("I am from"+country+"which is in continent"+continent+"of population"+population);

//data types

let isIsland=false;
let language;
console.log(typeof
    (isIsland));
    console.log(typeof(language));
    console.log(typeof country)

//BMI

    function bmi(height,weight){
        let result=weight/(height*height);
        return result;
    }
    let mark=bmi(1.88,95);
    let john=bmi(1.76,85);
    if(mark>john){
    let markHigherBmi=mark;
    console.log("Mark has the higher bmi of"+markHigherBmi);
    }
    else{
        let markHigherBmi=john;
        console.log("john has the higher bmi of"+markHigherBmi);
        }

//Template literal

let description=`${population} of peoples live in ${country} of continent ${continent}`;
console.log(description);


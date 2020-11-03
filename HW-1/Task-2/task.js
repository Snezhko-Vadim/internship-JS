let fizzBuzz = function (n) {
    let arrAnswer = [];
    for (let i = 1; i<=n; i++){
        if(i%3===0 && i%5===0){
            arrAnswer.push('fizzBuzz');
            continue;
        }
        else if(i%3===0){
            arrAnswer.push('fizz');
            continue;
        }
        else if(i%5===0){
            arrAnswer.push('buzz');
            continue;
        }
        else{
            arrAnswer.push(String(i));
        }
    }
    return arrAnswer;
}

let n = 15;
console.log(fizzBuzz(15));
let plusOne = function(digits) {
    for(let i = digits.length-1; i>=0; i--){
        if(digits[i]>=9){
            digits[i]=0;
        }
        else{
            digits[i]=digits[i]+1;
            break;
        }
    }
    return digits;
};
let digits = [1,2,3];
plusOne(digits);
console.log(digits);
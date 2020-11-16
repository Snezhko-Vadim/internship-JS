const letterCombinations = function(digits) {
    if(digits === ''){
        return [];
    }
    let mappingOfDigitToLetters = {
        1: undefined,
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    const combinations = function (arr1,arr2) {
        let answer = [];
        for(let i = 0; i<arr1.length; i++){
            for(let j = 0; j<arr2.length; j++){
                answer.push(arr1[i]+arr2[j]);
            }
        }
        return answer;
    }
    let answer = [...mappingOfDigitToLetters[digits[0]]];
    for(let i = 1; i<digits.length; i++){
        answer = combinations(answer,mappingOfDigitToLetters[digits[i]])
    }
    return answer;
};
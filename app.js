(function() {
    'use strict';
    const lastName = '山田';
    const firstName = '太郎';
    const fullName = (lastName + ' ' + firstName);

    const myAge = 10;
    const friendAge = 13;
    const totalAge = myAge + friendAge;
    const numberOfDays = totalAge * 365;

    const numberOfChildren = 3;
    const numberOfCakes = 10;
    const numberOfCakesByChild = numberOfCakes / numberOfChildren;
    const numberOfRestOfCakes = numberOfCakes % numberOfChildren;

    const variableContainer = [lastName,firstName,fullName,myAge,friendAge,totalAge,numberOfDays,numberOfChildren,numberOfCakes,numberOfCakesByChild,numberOfRestOfCakes];
    Object.freeze(variableContainer); //Arrayオブジェクトの改変を禁止する
    // variableContainer[0] = 'テスト';  
    // variableContainer.push('test');

    for (let i of variableContainer) {
        console.log(i);
    };

    for (let i in variableContainer) {
        console.log(variableContainer[i]);
    };


})();
"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input){
    return input === true;
}

function isFalse(input){
    return input === false;
}

function not(input){
    let notInput = !(input);
    return notInput;
}

function addOne(input){
    let addedOne = Number(input) + 1 || input + 1;
    return addedOne;
}

function isEven(input){
    let evenInput = input % 2 == 0;
    return evenInput;
}

function isIdentical(input1, input2){
    let identicalInput = input1 === input2;
    return identicalInput;
}

function isEqual(input1, input2) {
    let equalInput = input1 == input2;
    return equalInput;
}

function or(input1, input2){
    let resultOr = input1 || input2;
    return resultOr;
}

function and(input1, input2){
    let resultAnd = input1 && input2;
    return resultAnd;
}

function concat(input1, input2){
    let resultConcat = input1 + "" + input2;
    return resultConcat;
}

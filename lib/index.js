function bigNumbers(array) {
    let newArray = array.filter(item => item >= 5);
    newArray = newArray.map(item => 'Wow, ' + item + ' is big!');
    return newArray;
}

module.exports = { bigNumbers };

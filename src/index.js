// You should implement your task here.
// module.exports = 

module.exports = function towelSort(matrix) {
    // console.log(Array.isArray(matrix) && matrix[0].length > 0 ? 1 : 2);
    // !matrix || matrix.length === 0
    // Array.isArray(matrix) && matrix.length > 0
    return !matrix || matrix.length === 0 ? [] : matrix.reduce(function(arr, item, index) {
        return arr.concat(index % 2 != 0 ? item.reverse() : item);
    });
}


// let matrix = [
//     [1, 2, 3]
// ];

// console.log(towelSort([
//     [1],
//     [1, 2]
// ]));
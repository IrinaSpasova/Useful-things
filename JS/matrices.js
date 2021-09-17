function createMatrix(row, column, isEmpty) {
    let matrix = [];
    let array = [];
    let rowColumn = row * column;
    for (let i = 1; i <= rowColumn; i++) {
        isEmpty ?  array.push([]) :  array.push(i);

        if (i % column === 0) {
            matrix.push(array);
            array = [];
        }
    }
    console.log(matrix);
    return matrix;
}

createMatrix(5, 3, true);

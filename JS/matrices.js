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


/*----------------------------------------------*/

var matrix = [];
for(var i=0; i<9; i++) {
    matrix[i] = [];
    for(var j=0; j<9; j++) {
        matrix[i][j] = undefined;
    }
}
console.log(matrix);

/*------------------------------------------------------*/

function Matrix(m, n, d){
    var mat = Array.apply(null, new Array(m)).map(
        Array.prototype.valueOf,
        Array.apply(null, new Array(n)).map(
            function() {
               return d;
            }
        )
    );
    console.log(mat);
    return mat;
}

Matrix(4,5,1)

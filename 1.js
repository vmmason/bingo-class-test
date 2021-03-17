const grid = [
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]
]

// const bColumn = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const iColumn = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]; 

// const nColumn = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

// const gColumn = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];

// const oColumn = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];

// let bNumber = bColumn.pop(...bColumn);
// console.log( bNumber );

// const cellB1 = bColumn[Math.floor(Math.random()*bColumn.length)];

for ( let i = 0; i < grid.length; i++) {
    for ( let j = 0; j < 5; j++) {
        // const cell = grid[i][Math.floor(Math.random()*bColumn.length)];
        const cell = grid[i][Math.floor(Math.random()*grid[i].length)];
        grid[i] = grid[i].filter((element) => cell !== element);
    }
}

for ( let i = 0; i < 5; i++ ) {
    console.log(cellB1);
}

document.querySelector("").innerHTML = ``;
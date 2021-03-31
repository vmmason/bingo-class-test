// I built a multidimensional array to access the numbers for each row, the 0th index of the grid array is for the first (B) column of the bingo card grid, and so on till the 4th index for the fifth (O) column. 
const grid = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]
]

// I used the values generated by the for loop (lines 21-28) and stored them in the bingoCard array to prepare them to be rendered within their respective divs on the page. 
// Every time the for loop is completed and the values are stored, it moves to the next array inside of the matrix, using the filter method to remove each random value stored to ensure no values are repeated.
const bingoCard = [ 
    [],
    [],
    [],
    [],
    []
 ]


for ( let i = 0; i < grid.length; i++) {
    for ( let j = 0; j < 5; j++) {
        const randomIndex = Math.floor(Math.random()*grid[i].length);
        const cell = grid[i][randomIndex];
        bingoCard[j].push(cell);
        grid[i] = grid[i].filter((element) => cell !== element);
    }
}

// The values stored in the bingoCard array are entered into the cells based on this for loop's operation, it puts the number generated into each div based on where the for loop is (variables i and j). 
// The if statement skips the free space, which evaluates to true because it doesn't have a cell-## class.
for ( let i = 0; i < bingoCard.length; i++) {
    for ( let j = 0; j < 5; j++) {
        const element = document.querySelector(`.cell-${i}${j}`);
        if (element !== null) {
            element.innerHTML = bingoCard[i][j];
        }
    }
}
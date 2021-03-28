// add a comment of why i used a matrix
const grid = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]
]

//why i have the bingoCard structure, building a data structure
const bingoCard = [ 
    [],
    [],
    [],
    [],
    []
 ]

//what the for loop does ie getting the numbers for the card
for ( let i = 0; i < grid.length; i++) {
    for ( let j = 0; j < 5; j++) {
        const randomIndex = Math.floor(Math.random()*grid[i].length);
        const cell = grid[i][randomIndex];
        bingoCard[j].push(cell);
        grid[i] = grid[i].filter((element) => cell !== element);
    }
}

//explain rendering the text on the page
for ( let i = 0; i < bingoCard.length; i++) {
    for ( let j = 0; j < 5; j++) {
        const element = document.querySelector(`.cell-${i}${j}`);
        if (element !== null) {
            element.innerHTML = bingoCard[i][j];
        }
    }
}
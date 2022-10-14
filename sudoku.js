/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {


  
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
let board = '135862---3957764-52004--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
let newArr = []

for (let i = 0; i < board.length; i= i+9) {
  let str = board.slice(i, i+9)
  newArr.push(str.split(''))
}


function prettyBoard(board) {
  let newBoard = board.slice()
  
  newBoard.splice(3,0,['---------+-----------+---------']);
  newBoard.splice(7,0,['---------+-----------+---------']);
  console.log(newBoard);
  for (let i = 0; i < newBoard.length; i++) {
    for (let l = 0; l < newBoard[i].length; l++) {
      if(l === 2 || l === 5) {
        newBoard[i][l] = `${newBoard[i][l]}  |`
      }
    }
    if (i === 2) {
      
    }
    newBoard[i] = newBoard[i].map((el)=> el= `${el}  `)    
    newBoard[i].unshift('|  ')
    newBoard[i].push('|\n')


  }

  return newBoard.toString().replace(/,/g, '')

}
console.log(prettyBoard(newArr));

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

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

function prettyBoard(board) {
  let newBoard = board.slice()
  
  newBoard.splice(4,0,['---------+-----------+---------']);
  newBoard.splice(8,0,['---------+-----------+---------']);
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

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

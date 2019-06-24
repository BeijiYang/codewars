/*
Validate Sudoku with size `NxN`
Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.

The data structure is a multi-dimensional Array(in Rust: Vec<Vec<u32>>) , ie:

[
  [7,8,4,  1,5,9,  3,2,6],
  [5,3,9,  6,7,2,  8,4,1],
  [6,1,2,  4,3,8,  7,5,9],

  [9,2,8,  7,1,5,  4,6,3],
  [3,5,7,  8,4,6,  1,9,2],
  [4,6,1,  9,2,3,  5,8,7],

  [8,7,6,  3,9,4,  2,1,5],
  [2,4,3,  5,6,1,  9,7,8],
  [1,9,5,  2,8,7,  6,3,4]
]
Rules for validation

Data structure dimension: NxN where N > 0 and √N == integer
Rows may only contain integers: 1..N (N included)
Columns may only contain integers: 1..N (N included)
'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)
Note: the matrix may include non-integer elements.
*/


const Sudoku = function (data) {
  //   Private methods
  // -------------------------
  const rows = data.length
  const cubeRows = Math.sqrt(rows)



  const createSet = n => {
    const set = new Set()
    for (let i = 1; i <= n; i++) {
      set.add(i)
    }
    return set
  }

  const useSet = (set, item) => {
    if (set.has(item)) set.delete(item)
  }


  const checkRows = row => {
    const rowSet = createSet(rows)
    row.forEach(item => useSet(rowSet, item)) // 柯里化？
    return rowSet.size === 0
  }

  const checkColumns = () => {
    for (let i = 1; i <= rows; i++) {
      if (!checkColumn(i)) return false
    }
    return true
  }

  const checkColumn = columnIndex => {
    const columnSet = createSet(rows)
    data.forEach(row => {
      const item = row[columnIndex - 1]
      useSet(columnSet, item)
    })
    return columnSet.size === 0
  }

  // 难点
  const checkCubes = () => {
    const cubeSize = cubeRows
    // 大二维数组中取一个个小块的方法
    for (let i = 0; i < cubeSize; i++) {
      for (let j = 0; j < cubeSize; j++) {
        let cubeRowStart = i * cubeSize
        let cubeColumnStart = j * cubeSize

        let cubeRowEnd = cubeRowStart + cubeSize
        let cubeColumnEnd = cubeColumnStart + cubeSize
        // 每个小二维数组中取各个元素进行比较
        const cubeSet = createSet(cubeSize)
        for (let i = cubeRowStart; i < cubeRowEnd; i++) {
          for (let j = cubeColumnStart; j < cubeColumnEnd; j++) {
            let item = data[i][j]
            useSet(cubeSet, item)
          }
        }
        if (cubeSet.size !== 0) return false
      }
    }
    return true
  }

  //   Public methods
  // -------------------------
  return {
    isValid: function () {
      const isNxN = data.every(arr => arr.length === rows)
      const isNvalid = Number.isInteger(cubeRows)
      const isRowsValid = data.every(checkRows)
      const isColumnValid = checkColumns()
      const isCubesValid = checkCubes()

      return isNxN
        && isNvalid
        && isRowsValid
        && isColumnValid
        && isCubesValid
    }
  }
}

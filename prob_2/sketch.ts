class Matrix {
  private rows: number;
  private cols: number;
  private elements: number[][];

  constructor(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;
    //Initialize all elements of the matrix to 0
    this.elements = new Array(rows)
      .fill(null)
      .map(() => new Array(cols).fill(0));
  }

  getRowCount(): number {
    return this.rows;
  }

  getColCount(): number {
    return this.cols;
  }

  setElement(row: number, col: number, value: number): void {
    if (row >= this.rows || col >= this.cols) {
      console.log("Invalid position");
      return;
    }
    this.elements[row][col] = value;
  }

  /**
   * add takes a parameter matrix of type Matrix 
   * @param matrix which is the matrix to be added to the current matrix
   * @returns a value of type Matrix or null if the two matrices have compatible dimensions for addition
   */

  add(matrix: Matrix): Matrix | null {
    if (
      this.rows !== matrix.getRowCount() ||
      this.cols !== matrix.getColCount()
    ) {
      console.log("NOOP");
      return null;
    }
    const result = new Matrix(this.rows, this.cols);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result.setElement(i, j, this.elements[i][j] + matrix.elements[i][j]);
      }
    }
    return result;
  }

 /**
  * multiply  takes a parameter matrix of type Matrix , 
  * @param matrix - which is the matrix to be multiply to the current matrix.
  * @returns a value of type Matrix or null
  */
 
  multiply(matrix: Matrix): Matrix | null {
    if (this.cols !== matrix.getRowCount()) {
      console.log("NOOP");
      return null;
    }
    const result = new Matrix(this.rows, matrix.getColCount());
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < matrix.getColCount(); j++) {
        let sum = 0;
        for (let k = 0; k < this.cols; k++) {
          sum += this.elements[i][k] * matrix.elements[k][j];
        }
        result.setElement(i, j, sum);
      }
    }
    return result;
  }
}

//TESTING
const matrix1 = new Matrix(2, 3);
const matrix2 = new Matrix(2, 3);
const matrix3 = new Matrix(3, 2);

matrix1.setElement(0, 0, 1);
matrix1.setElement(0, 1, 2);
matrix1.setElement(0, 2, 3);
matrix1.setElement(1, 0, 4);
matrix1.setElement(1, 1, 5);
matrix1.setElement(1, 2, 6);

matrix2.setElement(0, 0, 7);
matrix2.setElement(0, 1, 8);
matrix2.setElement(0, 2, 9);
matrix2.setElement(1, 0, 10);
matrix2.setElement(1, 1, 11);
matrix2.setElement(1, 2, 12);

matrix3.setElement(0, 0, 1);
matrix3.setElement(0, 1, 2);
matrix3.setElement(1, 0, 3);
matrix3.setElement(1, 1, 4);
matrix3.setElement(2, 0, 5);
matrix3.setElement(2, 1, 6);

const result1 = matrix1.add(matrix2);
const result2 = matrix1.multiply(matrix3);

console.log(result1);
console.log(result2);

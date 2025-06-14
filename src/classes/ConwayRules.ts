export default class ConwayRules {


    /**
     * Counts the number of live neighbors for a cell at the given position
     * @param data - The 2D boolean array representing the game grid
     * @param row - The row index of the cell
     * @param col - The column index of the cell
     * @returns The number of live neighbors (0-8)
     */
    public countLiveNeighbors(data: boolean[][], row: number, col: number): number {
        let count = 0;
        const rows = data.length;
        const cols = data[0].length;

        // Check all 8 neighboring positions
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                // Skip the center cell (the cell itself)
                if (i === 0 && j === 0) continue;

                const newRow = row + i;
                const newCol = col + j;

                // Check if the neighbor is within bounds and alive
                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                    if (data[newRow][newCol]) {
                        count++;
                    }
                }
            }
        }

        return count;
    }

    /**
     * Applies Conway's Game of Life first rule: Any live cell with fewer than two live neighbours dies, as if by underpopulation.
     * @param data - The 2D boolean array representing the game grid where true indicates a live cell
     */
    public applyFirstRule(data: boolean[][], row: number, col: number): void {
        let cellIsAlive = data[row][col];

        if (!cellIsAlive)
            return;

        const liveNeighbors = this.countLiveNeighbors(data, row, col);
        if (liveNeighbors < 2) {
            data[row][col] = false;
        }
    }



    /**
     * Applies Conway's Game of Life second rule: Any live cell with two or three live neighbours lives on to the next generation.
     * @param data - The 2D boolean array representing the game grid where true indicates a live cell
     */
    public applySecondRule(data: boolean[][], row: number, col: number): void {
        let cellIsAlive = data[row][col];

        if (!cellIsAlive)
            return;

        const liveNeighbors = this.countLiveNeighbors(data, row, col);
        data[row][col] = (liveNeighbors === 2 || liveNeighbors === 3);
    }


    /**
     * Applies Conway's Game of Life third rule: Any live cell with more than three live neighbours dies, as if by overpopulation.
     * @param data - The 2D boolean array representing the game grid where true indicates a live cell
     */
    public applyThirdRule(data: boolean[][], row: number, col: number): void {
        let cellIsAlive = data[row][col];

        if (!cellIsAlive)
            return;

        const liveNeighbors = this.countLiveNeighbors(data, row, col);
        if (liveNeighbors > 3) {
            data[row][col] = false;
        }
    }


    /**
     * Applies Conway's Game of Life fourth rule: Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
     * @param data - The 2D boolean array representing the game grid where true indicates a live cell
     */
    public applyFourthRule(data: boolean[][], row: number, col: number): void {
        let cellIsAlive = data[row][col];

        if (cellIsAlive)
            return;

        const liveNeighbors = this.countLiveNeighbors(data, row, col);
        if (liveNeighbors === 3) {
            data[row][col] = true;
        }
    }


    public applyRules(data: boolean[][]): void {
        for (let row = 0; row < data.length; row++) {
            for (let col = 0; col < data[row].length; col++) {
                this.applyFirstRule(data, row, col);
                this.applySecondRule(data, row, col);
                this.applyThirdRule(data, row, col);
                this.applyFourthRule(data, row, col);
            }
        }
    }
}
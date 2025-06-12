import { useState, useEffect } from "react";

type GridProps = {
    rows: number;
    cols: number;
};

const Grid = ({ rows, cols }: GridProps) => {
    const [gridData, setGridData] = useState<boolean[][]>([]);

    const createGridData = () => {
        let _rows = new Array(rows).fill(0);
        return _rows.map(() => new Array(cols).fill(0));
    }

    useEffect(() => {
        const grid = createGridData();
        setGridData(grid);
        console.log(grid);
    }, [rows, cols]);

    const onCellClick = (rowIndex: number, colIndex: number) => {
        gridData[rowIndex][colIndex] = !gridData[rowIndex][colIndex];
        setGridData([...gridData]);
    }


    return (<div className="grid" style={{

        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,

    }}>{
            gridData.map((row, rowIndex) => (
                <>
                    {row.map((cell, colIndex) => (
                        <div key={`${rowIndex}${colIndex}`} data-alive={gridData[rowIndex][colIndex]===true} className="cell" onClick={() => onCellClick(rowIndex, colIndex)}></div>
                    ))}
                </>
            ))
        }</div>);
};
export default Grid;
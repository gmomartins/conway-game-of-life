import { useState, useEffect } from "react";

type GridProps = {
    rows: number;
    cols: number;
    data: boolean[][];
    onCellClick(row:number, col:number, cellValue:boolean):void;
};

const Grid = ({ rows, cols, data, onCellClick }: GridProps) => {


    const _onCellClick = (rowIndex: number, colIndex: number) => {
        let newValue:boolean = !data[rowIndex][colIndex];
        onCellClick(rowIndex, colIndex, newValue);
    }


    return (<div className="grid" style={{

        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,

    }}>{
            data?.map((row, rowIndex) => (
                <>
                    {row.map((cell, colIndex) => (
                        <div key={`key${rowIndex}${colIndex}`} data-alive={data[rowIndex][colIndex] === true} className="cell" onClick={() => _onCellClick(rowIndex, colIndex)}></div>
                    ))}
                </>
            ))
        }</div>);
};
export default Grid;
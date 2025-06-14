import { useEffect, useState } from "react";
import ControlBar from "../components/control-bar/ControlBar";
import Grid from "../components/grid/Grid";
import usePlayStop from "../hooks/usePlayStop";
import ConwayRules from "../classes/ConwayRules";

const Home = () => {
    const [gridSize, setGridSize] = useState({ rows: 20, cols: 20 });
    const conwayRules = new ConwayRules();

    const createGridData = () => {
        let _rows = new Array(gridSize.rows).fill(false);
        return _rows.map(() => new Array(gridSize.cols).fill(false));
    }

    const clearGrid = () => {
        stop();
        setGridData(createGridData());
    }

    const [gridData, setGridData] = useState<boolean[][]>([]);

    useEffect(() => {
        setGridData(createGridData());
    }, []);


    const randomizeGrid = () => {
        let data = Array.from({ length: gridSize.rows }, () =>
            Array.from({ length: gridSize.cols }, () => (Math.random() > 0.7 ? true : false))
        );

        setGridData(data);
    }

    const onCellClick = (rowIndex: number, colIndex: number, cellValue: boolean) => {
        gridData[rowIndex][colIndex] = cellValue;
        setGridData([...gridData]);
    }

    const askNumberOfGenerationsToJump = () => {
        let generations: number = parseInt(prompt("How many generations do you like to jump?") || "0");
        if (!isNaN(generations) && generations > 0) {
            jumpGenerations(generations);
        }
    }

    const jumpGenerations = (numberOfGenerations: number) => {
        setGridData(currentGridData => {
            let newGridData = [...currentGridData];
            for (let gen = 0; gen < numberOfGenerations; gen++) {
                newGridData = conwayRules.applyRules([...newGridData]);
            }
            return newGridData;
        });
    }

    const jumpOneGeneration = () => {
        console.log("Jumping one generation");
        jumpGenerations(1);
    }

    const { play, stop } = usePlayStop(100, jumpOneGeneration);

    return (<div className="container">
        <ControlBar onClearClick={clearGrid}
            onStopClick={stop}
            onPlayClick={play}
            onRandomizeClick={randomizeGrid}
            onJumpGenerationsClick={askNumberOfGenerationsToJump}
            onNextGenerationClick={jumpOneGeneration} />
        <Grid rows={gridSize.rows}
            cols={gridSize.cols}
            data={gridData}
            onCellClick={onCellClick} />
    </div>);
}

export default Home;
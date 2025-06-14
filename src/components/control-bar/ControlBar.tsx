import "./style.scss";
type ControlBarProps = {
    onPlayClick(): void
    onStopClick(): void
    onRandomizeClick(): void
    onNextGenerationClick(): void;
    onClearClick(): void
    onJumpGenerationsClick(): void;
}


const ControlBar = (props: ControlBarProps) => {

    const { onPlayClick, onStopClick, onRandomizeClick, onClearClick, onNextGenerationClick, onJumpGenerationsClick } = props;

    return (
        <div className="control-bar">
            <button onClick={onPlayClick}>Play</button>
            <button onClick={onStopClick}>Stop</button>
            <button onClick={onNextGenerationClick}>Next generation</button>
            <button onClick={onJumpGenerationsClick}>Jump generations</button>
            <button onClick={onRandomizeClick}>Random</button>
            <button onClick={onClearClick}>Clear</button>
        </div>
    );
};

export default ControlBar;  
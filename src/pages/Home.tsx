import ControlBar from "../components/control-bar/ControlBar";
import Grid from "../components/grid/Grid";

const Home = ()=>{
    return (<div className="container">
        <ControlBar />
        <Grid rows={20} cols={20} />
    </div>);
}

export default Home;
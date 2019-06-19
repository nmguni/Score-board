// header 
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players:{props.totalPlayers} </span>
        </header>
    )
}



// player component
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter score={props.socre} />
        </div>
    )
}

// counter component 
const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decremen"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={1} />

            {/* player list */}
            <Player name="Vegita" socre={50} />
            <Player name="Vegita" socre={50} />
            <Player name="Vegita" socre={50} />
            <Player name="Vegita" socre={50} />
            <Player name="Vegita" socre={50} />
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
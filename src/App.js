import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";


function App() {
    const [playerName, setPlayerName] = useState("")
    const [players, setPlayers] = useState([])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <title>Street Fighter</title>
            </header>
            <main className="App-content">
                <p>
                    My favorite Street Fighter players
                </p>
                <form>
                    <input value={playerName} onChange={(e) => {setPlayerName(e.target.value)}} type="text" name="name"/>
                    <input type="button" value="Add" onClick={() => {
                        setPlayers([...players, playerName])
                        setPlayerName("")
                    }}/>
                </form>
                <ul>
                    { players.map((playerName, index) => <li id={index}>{playerName}</li>) }
                </ul>
            </main>
            <footer className="App-footer">
                <p>
                    Made just for you by Paquito and Nando
                </p>
            </footer>
        </div>
    );
}

export default App;

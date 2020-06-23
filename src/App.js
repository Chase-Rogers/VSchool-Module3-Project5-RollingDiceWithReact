import React from 'react';
import './App.css';
import DiceBox from './DiceBox'

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <DiceBox />
            </div>
        );
    }
}

export default App;

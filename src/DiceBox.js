import React from 'react';
import Die from './Die'

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            num: ['Die1', 'Die2', 'Die3', 'Die4', 'Die5', 'Die6']
        }
    }

    setDie = () => {
        this.setState({
            num: ['Die' + (Math.floor(Math.random() * 6) + 1),
            'Die' + (Math.floor(Math.random() * 6) + 1),
            'Die' + (Math.floor(Math.random() * 6) + 1),
            'Die' + (Math.floor(Math.random() * 6) + 1),
            'Die' + (Math.floor(Math.random() * 6) + 1),
            'Die' + (Math.floor(Math.random() * 6) + 1)]
        }) 
    }

    render() {
        return (
            <div className='App'>
                <Die dice={this.state.num}/>
                <button onClick={this.setDie} >ReRoll</button>
            </div>
        );
    }
}

export default DiceBox;
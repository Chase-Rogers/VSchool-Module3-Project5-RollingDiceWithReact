import React from 'react';

class Die extends React.Component {
    constructor() {
        super()
    }

    render() {
        console.log(this.props)
        const Dice = this.props.dice.map(die => {
            return <div className={die} />
        })

        return (
            <div className='Dice'>
                {Dice}
            </div>
        );
    }
}

export default Die;
import React, {Component} from 'react';
import Navbar from "./navbar";
import Reset from "./reset";
import Counters from "./counters";

class MainCounterApp extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    }

    componentDidMount() {
    }

    /*---------------------------------------------------------
    TODO(target): Add all values from counters(array of object)
    TODO-1: Convert an 'object of array' to a simple 'array'
        - Extract value property from counters object of array
    TODO-2: Find the sum of an array of numbers
        -  https://tinyurl.com/ynbrvc9j
        - https://tinyurl.com/33x3b6pa
    TODO-3: Return total value
    ------------------------------------------------------------*/
    getTotal = () => {
        const {counters} = this.state
        const valueArray = counters.map(counter => counter.value) // TODO-1
        const total = valueArray.reduce((prev, next) => prev + next, 0) // TODO-2
        return total // TODO-3
    }

    /*-------------------------------------------------------------------
    TODO(target): Reset all 'counter' value to 0
    TODO-1: Create a new 'counters' object of array where value = 0 and
        return that object to make an effect
    TODO-2: Update state for 'counters'
    --------------------------------------------------------------------*/
    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0
            return counter
        }) // TODO-1
        this.setState({counters }) // TODO-2
    }

    /*-------------------------------------------------------------------
    TODO(target): Delete a counter
    TODO-1: Create a new 'counters' object of array with 'Array.filter()'
    TODO-2: Update state for 'counters'
    --------------------------------------------------------------------*/
    handleDelete = id => {
        const counters = this.state.counters.filter(counter => counter.id !== id); // TODO-1
        this.setState({ counters }); // TODO-2
    }

    /*-------------------------------------------------------------------
    TODO(target): Count up
    TODO-1: Make a copy of 'counters' array and assign to a variable
    TODO-2: Find the index of the 'counter' being clicked
    TODO-3: Make a copy of 'counter' object and assign to the particular
        counter with counters[index]
    TODO-4: Add 1 to the current value of counters[index]
    TODO-5: Update state for 'counters'
    --------------------------------------------------------------------*/
    handleIncrement = counter => {
        const counters = [...this.state.counters]; // TODO-1
        const index = counters.indexOf(counter); // TODO-2
        counters[index] = { ...counter }; // TODO-3
        counters[index].value++; // TODO-4
        this.setState({ counters }); // TODO-5
    }

    /*-------------------------------------------------------------------
    TODO(target): Count up
    TODO-1: Make a copy of 'counters' array and assign to a variable
    TODO-2: Find the index of the 'counter' being clicked
    TODO-3: Make a copy of 'counter' object and assign to the particular
        counter with counters[index]
    TODO-4: Subtract 1 to the current value of counters[index]
    TODO-5: Update state for 'counters'
    --------------------------------------------------------------------*/
    handleDecrement = counter => {
        const counters = [...this.state.counters]; // TODO-1
        const index = counters.indexOf(counter); // TODO-2
        counters[index] = { ...counter }; // TODO-3
        counters[index].value--; // TODO-4
        this.setState({ counters }); // TODO-5
    }

    render() {
        return (
            <>
                <Navbar
                    counters={this.state.counters}
                    totalCount={this.getTotal()}
                />
                <div className="container">
                    <Reset
                        counters={this.state.counters}
                        onReset={this.handleReset}
                    />
                    <Counters
                        counters={this.state.counters}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete} />
                </div>
            </>
        );
    }
}

export default MainCounterApp;
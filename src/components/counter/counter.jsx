import React from 'react';
import Display from "./display";
import Increment from "./increment";
import Decrement from "./decrement";
import Delete from "./delete";

const Counter = ({ counter, onIncrement, onDecrement, onDelete }) => {
    return (
        <div className="row mt-3">
            <div className="col-1 mr-3">
                <Display value={counter.value}/>
            </div>
            <div className="col-4">
                <Increment counter={counter} onIncrement={onIncrement}/>
                <Decrement counter={counter} onDecrement={onDecrement}/>
                <Delete counter={counter} onDelete={onDelete}/>
            </div>
        </div>
    );
};

export default Counter;

//style={display}
//className="badge badge-warning mr-4"

//<div className="mt-3">
//             <Display count={count}/>
//             <Increment onIncrement={onIncrement}/>
//             <Decrement count={count} onDecrement={onDecrement}/>
//             <Delete/>
//         </div>
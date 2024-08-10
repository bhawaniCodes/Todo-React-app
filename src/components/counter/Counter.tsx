import React from "react";

type CounterPorps = {
    incrementCount: () => void; 
    decrementCount: () => void; 
    count: number
}

const Counter = ({incrementCount, decrementCount, count}: CounterPorps) => {

    return (
        <div className="flex justify-between items-center w-3/4 m-auto">
            <div className="text-xl w-10 h-10 ma-2 rounded-full border border-black flex items-center justify-center cursor-pointer" onClick={decrementCount}>-</div>
            <div className="ma-5 rounded-full text-8xl">{count}</div>
            <div className="text-xl w-10 h-10 ma-2 rounded-full border border-black flex items-center justify-center cursor-pointer" onClick={incrementCount}>+</div>
        </div>
    )
}

export default React.memo(Counter);
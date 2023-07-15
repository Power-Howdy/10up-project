import React, { useState } from 'react'
import {
    counterSlice,
    useSelector,
    useDispatch,
    selectCount,
    incrementAsync,
    incrementIfOddAsync,
} from '@/lib/redux'

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(selectCount)
    const [incrementAmount, setIncrementAmount] = useState(2)
    return (
        <div>
            <div className="w-full p-5 text-center max-auto my-10 text-7xl">
                <button
                    className="w-32 h-32 border-2 rounded-full mx-3 hover:bg-slate-300"
                    aria-label="Decrement value"
                    onClick={() => dispatch(counterSlice.actions.decrement())}
                >
                    -
                </button>
                <span className="w-8 h-8 mx-5">{count}</span>
                <button
                    className="w-32 h-32 border-2 rounded-full mx-3 hover:bg-slate-300"
                    aria-label="Increment value"
                    onClick={() => dispatch(counterSlice.actions.increment())}
                >
                    +
                </button>
            </div>
            <div className="w-full p-5 text-center max-auto my-10">
                <input
                    className="w-12 h-8 border-2 mx-3"
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
                />
                <button
                    className="w-32 h-8 border-2 mx-3 hover:bg-slate-300"
                    onClick={() =>
                        dispatch(counterSlice.actions.incrementByAmount(incrementAmount))
                    }
                >
                    Add Amount
                </button>
                <button
                    className="w-32 h-8 border-2 mx-3 hover:bg-slate-300"
                    onClick={() => dispatch(incrementAsync(incrementAmount))}
                >
                    Add Async
                </button>
                <button
                    className="w-32 h-8 border-2 mx-3 hover:bg-slate-300"
                    onClick={() => dispatch(incrementIfOddAsync(incrementAmount))}
                >
                    Add If Odd
                </button>
            </div>
        </div>
    )
}

export default Counter
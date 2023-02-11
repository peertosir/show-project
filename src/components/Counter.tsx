import { useState } from "react"
import classes from './Counter.module.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>Counter</h1>
            <p>value: {counter}</p>
            <button className={classes['btn-red']} onClick={() => setCounter(counter + 1)}>Increment</button>
            <button className={classes['btn-violet']} onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>

    )
}

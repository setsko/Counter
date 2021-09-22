import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import s from "./Counter.module.css";

export type CounterType = {
    count: number;
}

export function Counter(props: CounterType) {
    const [count, setCount] = useState(0);

    const disabledInc = () => {return count === 5}

    const disableReset = () => {return count === 0}

    return (
        <div className={s.parent}>
            <div className={s.block}>
                <div className={count==5? s.outputRed:s.outputBlack}>{count}</div>
                <div className={s.button}>
                    <button  disabled={disabledInc()} onClick={() => {setCount(count + 1)}}>Inc</button>
                    <button  disabled={disableReset()} onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
        </div>

    )
}

export default Counter;
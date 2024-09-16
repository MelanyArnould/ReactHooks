import { useCounter } from "../hooks/useCounter"

export const CounterApp = () => {

    const {counter,increment,reset,decrement} = useCounter(0)

  return (
    <>
        <h1>Counter</h1>
        <h4>{counter}</h4>
        <button className="btn btn-outline-secondary" onClick={() => increment()}>+</button>
        <button className="btn btn-outline-danger" onClick={() => reset()}>Reset</button>
        <button className="btn btn-outline-secondary" onClick={() => decrement(1, false)}>- </button>

    </>
  )
}

//import { useReducer } from 'react'
import Display from './components/Display'
import Button from './components/Button'



const App = () => {
  //const [counter, counterDispatch] = useReducer(counterReducer, 0)

  return (
    //<CounterContext.Provider value ={[counter,counterDispatch]}>
    <div>
      {/* <div>{counter}</div> */}
      <Display/>
      <div>
        {/* <button onClick={() => counterDispatch({ type: "INC"})}>+</button>
        <button onClick={() => counterDispatch({ type: "DEC"})}>-</button>
        <button onClick={() => counterDispatch({ type: "ZERO"})}>0</button> this is before creating components */ }
        
        {/* <Button dispatch={counterDispatch} type='INC' label='+'/>
        <Button dispatch={counterDispatch} type='DEC' label='-'/>
        <Button dispatch={counterDispatch} type='ZERO' label='0'/> this simply passing  down counterDispactch as prop  */}

        <Button type='INC' label='+'/>
        <Button type='DEC' label='-'/>
        <Button type='ZERO' label='0'/>
      </div>
    </div>
   // </CounterContext.Provider>
  )
}

export default App
//import { useContext } from "react"
import { useCounterValue } from '../CounterContext'
//import CounterContext from "../CounterContext"


//const Display = ({ counter }) => { no need to receive counter as prop after importing useContext 
    const Display = () => {
    //const [counter,dispatch] = useContext(CounterContext)
    const counter = useCounterValue()
    return <div>{counter}</div>
  }

  export default Display
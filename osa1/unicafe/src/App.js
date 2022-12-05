
import { useState } from 'react'

const StatisticLine = ({text, value})=>
<td>
<th>{text}</th> <td>{value}</td>
</td>


const Statistics =(props)=>{
  const {good,bad,neutral,counter}= props
  const pisteytys = (good-bad)/counter
  const p= pisteytys.toFixed(2);
  const calculate = good/ counter*100
  const c= calculate.toFixed(1)+'%'
  if (props.counter===0){
    return <div>
      <p> Not feedback given </p>
  </div>
    
  }
  return (
    <table>
      <tr>
      <h2>Statistics</h2>
      </tr>
      <tr>
      <th><StatisticLine text="Good " value ={good}/></th>
      </tr>
      <tr>
      <th><StatisticLine text="Neutral " value ={neutral}/></th>
      </tr>
      <tr>
      <th><StatisticLine text="Bad " value ={bad}/></th>
      </tr>
      <tr>
      <th><StatisticLine text="Average " value ={p}/></th>
      </tr>
      <tr>
      <th><StatisticLine text="Positive " value ={c}/></th>
      </tr>
  </table>
)
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {

  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
 })
  const [counter, setCounter] = useState(0)

  const goodClick =()=>{
    const newClicks ={
      ...clicks, 
      good: clicks.good+1,
     }
     setClicks(newClicks)
     setCounter(counter +1)
  }
  const neutralClick =()=>{
    const newClicks ={
      ...clicks, 
      neutral: clicks.neutral+1,
     }
     setClicks(newClicks)
     setCounter(counter +1)
  }

  const badClick =()=>{
    const newClicks ={
      ...clicks, 
      bad: clicks.bad+1,
     }
     setClicks(newClicks)
     setCounter(counter +1)

  }

  return (
    <div>
      <h1> Give Feeedback </h1>
      <Button
        onClick={goodClick}
        text='positive'
      />
      <Button
        onClick={neutralClick}
        text='neutral'
      />
      <Button
        onClick={badClick}
        text='bad'
      />

     <Statistics good ={clicks.good} bad = {clicks.bad} neutral = {clicks.neutral} counter={counter}/>
    </div>
  )
}

export default App
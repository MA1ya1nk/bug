import { useState } from "react"
// import Main from "./Imp/Main"


function App() {
 
const [Ans, setAns] = useState(0)

  return (
    <>
    <div>
      the value of ans is {Ans}
      </div>
      <button onClick={()=>{setAns(Ans+1)}}>
        click
      </button>
  
     {/* <Main title="card 1"/>
     <Main title="card 2"/>
     <Main title="card 3"/> */}
    </>
  )
}

export default App

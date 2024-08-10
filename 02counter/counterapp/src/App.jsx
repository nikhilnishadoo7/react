
// let counter = 24;

import { useState } from "react";




function App() {

  let [counter,setcounter] = useState(15)

  function addval(){
    console.log(counter);
    
    counter +=1;
    setcounter(counter);
  }

  return (
    <>
      <h1>counter app</h1>
      <h2>{counter}</h2>
      <button 
      onClick={addval}
      >add +1</button>
      <button>remove -1</button>
    </>
  )
}

export default App

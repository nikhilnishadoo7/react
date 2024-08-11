import { useState } from "react"

function App() {
  let [color,setColor] = useState("black")
  function redcl (){
    
    setColor("red");
  }


  return (
   <div className="w-full h-screen duration-300"
   style={{backgroundColor : color}}
   >

     <div className="bg-white w-full h-96 justify-center border-black">
    <button
    
    onClick={redcl}> red</button>
     </div>

   </div>
  )
}

export default App

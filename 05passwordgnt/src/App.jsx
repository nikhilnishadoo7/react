import { useState ,useCallback,useEffect } from 'react'


function App() {
  const [length, setlength] = useState(8);
  const [numberal,setNumberal] = useState(false);
  const [charal,setCharal] = useState(false);
  const [password,setPassword] = useState("");

  const passwordsetter = useCallback(
    () => {
      let pass ="";
      let str = "qwertyuioasdfghjklzxcvbnmQWERTYUIOOASDFGHJKLZXCVBNM";
    
      if(numberal) str += "1234567890";
      if(charal) str += "!@#$%^&*()_+" ;
      for(let i=1;i<length;i++){
        let val = Math.floor(Math.random()*str.length +1);
        pass +=str.charAt(val)
      }
      setPassword(pass);
    },
    [length,numberal,charal]
  )

  const copyclip = useCallback(()=>{
   window.navigator.clipboard.writeText(password);
  },[password])
  
  useEffect(() => {
    passwordsetter()
  }, [length,numberal,charal])
  




  return (
    <>
    <div className='bg-gray-700 w-full h-screen'>
      <h1 className='text-white text-lg justify-center'>password generator</h1>
    <div className='bg-teal-300 mb-20 w-auto h-9 '>
      <input type="text"
      value={password}
      placeholder='password'

      readOnly
      className=' justify-center left-4 mt-3' />
      <button className='text-white bg-blue-500 hover:bg-black scale-100'
      onClick={copyclip}
      >copy</button>

      <input type="range"
      
      min={0} max={100} 
      value={length}
      onChange={(e)=>{setlength(e.target.value)}}
      className='text-black'
      
      />
      <label> lenght : {length}</label>


      <div className='justify-center mx-72'>
 <div>
      <input type="checkbox"
      defaultChecked={numberal}
      id='da'
      onChange={()=>{
        setNumberal((prev) => !prev);
      }}
      />
      <label htmlFor='da' > number</label>
    </div>
    <div>
      <input type="checkbox" 
       defaultChecked={charal}
       id='ac'
       onChange={()=>{
         setCharal((prev) => !prev);
       }}
      />
      <label htmlFor='ac' > char</label>
    </div>

 </div>
    </div>

 

    </div>
    </>
  )
}

export default App

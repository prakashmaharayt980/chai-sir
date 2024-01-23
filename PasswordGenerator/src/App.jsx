import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
 const [password, setpassword] = useState('');
 const [lengthR, setlengthR] = useState(8);
 const [numberallocation, setnumberallocation] = useState(false);
 const [charAllocation, setcharAllocation] = useState(false);

 const passwordgenertor=useCallback(()=>{
  let pass=''
  let str="QWERTYUIOPSDFGHJKLZXCVBNMmnbvcxzqwertyuiopasdfghjkl"
 
if(numberallocation) str +="0123456789"
if(charAllocation) str +='@#$%^&*()_-+|/~`'


  for(let i=1;i<=lengthR;i++){
         let indexs=Math.floor(Math.random()*str.length + 1)
         pass +=str.charAt(indexs)
        //  console.log(indexs);
  }
  setpassword(pass)
 }
  ,[setpassword,lengthR,numberallocation,charAllocation])

  useEffect(
    passwordgenertor
  ,[lengthR,numberallocation,charAllocation])
 
  const usepassRef=useRef()
  const copyFN=()=>{
    usepassRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
    <>
     <div>
      <div className="inputbox">
        <input type="text" 
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        readOnly
        ref={usepassRef}
        style={{width:'60dvw'}}
        />
        <button 
        onClick={copyFN}
        type="button">copy</button>
      </div>
      <div className="condition-box">
         <input type="range" name="lengthn" id=""
         value={lengthR}
         max={100}
         onChange={(e)=>setlengthR(e.target.value)} />
         <label htmlFor="lengthn">length:{lengthR}</label>
         <br />
         <input type="checkbox" name="numbercheck" 
         value={numberallocation}
         
         onChange={()=> setnumberallocation((prev)=>!prev)} />
         <label htmlFor="numbercheck">Number</label>
         <br />
         <input type="checkbox" name="charbox"
         value={charAllocation} 
         onChange={()=> setcharAllocation((prev)=>!prev)}/>
         <label htmlFor="charbox">CharAllocation</label>
      </div>
     </div>
    </>
  )
}

export default App

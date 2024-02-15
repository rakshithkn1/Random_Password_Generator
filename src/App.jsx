import { useState,useCallback,useEffect,useRef} from 'react'

import './App.css'
import MyComponent from './jinx'

function App() {
  const[length,setLength]=useState(8)
  const [charallowed, setcharallowed] = useState(0)
const[password,setPassword]=useState('')
const [numberallowed,setnumberallowed]=useState('')

const passwordref=useRef(null)
//Logic part
const copypassword=()=>{
window.navigator.clipboard.writeText(password)
passwordref.current?.select()
passwordref.current?.setSelectionRange(0,200)
}


const generatePassword=useCallback(()=>{
  let pass=''
  let str='QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsamnbvcxz'
if(numberallowed) str+='0123456789'
if(charallowed)  str+='!@#$%^&*()_+'
 for(let i=0;i<length;i++){
 const char= Math.floor(Math.random()*str.length + 1)
 pass +=str.charAt(char)
 }
 setPassword(pass)

},[length,numberallowed,charallowed])

useEffect(()=>{
  generatePassword()
},[length,charallowed,numberallowed])










  return (
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500'>
  <h1 style={{color:"yellow",}} className='text-3xl font-bold mb-2'>Password Generator</h1>
<div className='flex shadow rounded-lg overflow-hidden mb-4'>
  <input type='text'
  value={password}
  className='outline-none w-full py-1 px-3'
  placeholder='password'
  readOnly
ref={passwordref}

  />
  <button   onClick={copypassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
</div>
<div className='flex text-sm gap-x-2'>
  <div className='flex item-center gap-x-1'>
    <input type="range" 
    min={6}
    max={200}
    name=''
    value={length}
    id=''
    className='cursor-pointer'
    onChange={(e)=>setLength(e.target.value)}
     />
     <label htmlFor="length">Length:{length}</label>
  </div>
  <div className='flex item-center gap-x-1'>
    <input type="checkbox" 
    defaultChecked={numberallowed}
    name=''
  onChange={()=>{
    setnumberallowed((prev)=>!prev)
  }}
    id=''
    className='cursor-pointer'
     />
     <label htmlFor="numbers">Numbers</label>
  </div>
  <div className='flex item-center gap-x-1'>
    <input type="checkbox" 
    defaultChecked={charallowed}
    name=''
  onChange={()=>{
    setcharallowed((prev)=>!prev)
  }}
    id=''
    className='cursor-pointer'
     />
     <label htmlFor="charcters">Charcters</label>
  </div>
  
</div>

</div>

  )
}

export default App

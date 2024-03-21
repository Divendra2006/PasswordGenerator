import { useState,useCallback,useEffect,useRef } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumberAllowed] =useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  const passwordRef=useRef(null)

   

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEfghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*_+{}[]~"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
     setPassword(pass)
    
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordtoclipboard=useCallback(()=>{ 
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])
 
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
   <div className= 'w-full max-w-md mx-auto rounded-lg px-4 my-8 text-black bg-gray-500 '> Password Generator
    
    <div className='text-orange-700 flex rounded-lg overflow-hidden mb-4'>
      <input
       type="text"
       value={password}
       className='outline-none w-full py-1 px-3'
       placeholder='password'
       readOnly
       ref={passwordRef}
      />
      <button onClick={copyPasswordtoclipboard} className='hover:bg-purple-400 hover:text-black outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      -

      <div className='flex items-center gap-x-1'>
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}
        />
        <label>length:{length}</label>
      </div>

      <div className='flex items-center ga-x-1'>
        <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={()=>{
          setNumberAllowed((prev) => !prev)
        }}
        />
        <label htmlFor='numberInput'>Numbers</label>
      </div>
       
      <div className='flex items-center ga-x-1'>
        <input
        type="checkbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={()=>{
          setcharAllowed((prev) => !prev)
        }}
/>
         <label htmlFor='characterinput'>characters</label>
      </div>
    </div>
  </div>
    </>
  )
}
  
export default App


// import {useCallback, useState, useEffect,useRef} from 'react'

// export default function() {
//   const [length,setLength]=useState(8)
//   const [password,setPassword]=useState("")
//   const [number,setNumber]=useState(false)
//   const [char,setChar]=useState(false)

//   const passwordGenerator=useCallback(()=>{
//     let pass=""
//     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//     if(number) str+="0123456789"
//     if(char) str+="!@#$%^^&*()"

//     for(let i=1;i<=length;i++){
//       let char=Math.floor(Math.random() * str.length+1)
//       pass +=str.charAt(char)
//     }
//     setPassword(pass)
//   }
//     ,[length,setPassword,number,char])

//     const passRef=useRef(null)

//     useEffect(()=>{
//       passwordGenerator()
//     }
//       ,
//       [length,setNumber,setChar,passwordGenerator])

//       const copyPasswordtoclipboard=useCallback(()=>{
//        passRef.current?.select()
//        passRef.current?.setSelectionRange(0,100)
//        window.navigator.clipboard.writeText(password)
//       },[password])
      
//   return (
//     <>
//     <div className='bg-white w-max h-30 rounded-xl justify-center text-center'>
//      Password Generator
    
//     <div className='gap-x-1 mx-20'>
//       <input
//       type="length"
//       value={password}
//       placeholder="Password"
//       className='w-auto h-max bg-gray-400 rounded text-black border-black'
//       readOnly
//       ref={passRef}

  
//       />
//       <button onClick={copyPasswordtoclipboard}
//       className='bg-blue-400 text-white text-center rounded hover:bg-purple-600 hover:text-black' >copy</button>
//       </div>

//       <div>
//       <input
//       type="range"
//       min={6}
//       max={100}
//       className='cursor-pointer gap-x-1'
//       value={length}
//       onChange={(e)=>{setLength(e.target.value)}}
//       />
//       <label > length:{length}</label>
//       <input
//       type="checkbox"
//       defaultChecked={number}
//       id="numberInput"
//       onChange={()=>
//         {setNumber((prev)=>!(prev))}
//       }
//       />
//       <label htmlFor='numberInput'>Number</label>

//       <input
//       type="checkbox"
//       defaultChecked={char}
//       id="charInput"
//       onChange={()=>{
//         setChar((prev)=>!(prev))
//       }}
//       />
//       <label htmlFor='charInput'>Character</label>
      
//     </div>
//     </div>
//     </>
//   )
// }








 
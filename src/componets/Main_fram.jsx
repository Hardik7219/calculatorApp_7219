import React, { useEffect, useState } from 'react'


function Main_fram() {
    let [inp,setInp]=useState("")
    function add()
    {   
        try {
             //   console.log('s')
                setInp(eval(inp).toString());
            
        } catch {
                
            setInp("Error");
        }

    }
    useEffect(()=> {  
        function keyAdd(e)
        {
            if(!isNaN(e.key) || ['*','+', '/','.','-'].includes(e.key))
            {
                setInp(prev => prev + e.key)
            }
        }
        addEventListener('keydown',keyAdd)
        return () => {
            removeEventListener('keydown',keyAdd)
        }
    },[])
    addEventListener('keydown',(e)=>{
        if(e.key==='Backspace')
        {
            setInp(prev=> prev.slice(0,-1))
        }
        if(e.key=='Enter')
        {
            add()
        }

    });
            
    console.log(inp)
    return (
        <>
            <div>     
                <div className="h-100 w-80 border-2 bg-gray-700" >
                    <input onChange={(e)=>setInp(e.target.value)} type="text" className="w-full h-16 text-2xl text-right bg-gray-800 text-white p-4" value={inp} placeholder="0" />
                    <div className="grid grid-cols-4 gap-2 p-4">
                        <button onClick={(e)=>setInp('')} className="bg-gray-600 text-white p-4 rounded">C</button>
                        <button onClick={(e)=>setInp(inp.slice(0,-1))}  className="bg-gray-600 text-white p-4 rounded">X</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-gray-600 text-white p-4 rounded">E</button>
                        <button onClick={add}  className="bg-blue-600 text-white p-4 rounded">=</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-gray-600 text-white p-4 rounded">9</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-gray-600 text-white p-4 rounded">8</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-gray-600 text-white p-4 rounded">7</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-blue-600 text-white p-4 rounded">/</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-gray-600 text-white p-4 rounded">6</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-gray-600 text-white p-4 rounded">5</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-gray-600 text-white p-4 rounded">4</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-blue-600 text-white p-4 rounded">*</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-gray-600 text-white p-4 rounded">3</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-gray-600 text-white p-4 rounded">2</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-gray-600 text-white p-4 rounded">1</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-blue-600 text-white p-4 rounded">+</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-gray-600 text-white p-4 rounded">.</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-gray-600 text-white p-4 rounded">0</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-gray-600 text-white p-4 rounded">00</button>
                        <button onClick={(e)=>setInp(inp+e.target.innerText)}  className="bg-blue-600 text-white p-4 rounded">-</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main_fram

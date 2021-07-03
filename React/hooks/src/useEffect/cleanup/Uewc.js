import React,{useState,useEffect} from 'react'

function Uewc() {
    const [count,setCount] =useState(0);
    console.log('Render');
    useEffect(()=>{
        console.log('useEffect');
        document.title = `Clicked ${count} times`;
        //cleanUp optional
        return ()=>{
           //2 time use effect chalne se just pehle pichle vale ka return fnc chlega 
           // acts as componentwillunmount
            alert(`I Will be called before the next useEffect is called' ${count}`)
        }
    } ,[])
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

export default Uewc

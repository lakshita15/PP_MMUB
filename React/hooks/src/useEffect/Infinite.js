import React , {useEffect , useState} from 'react'

export default function Infinite() {

    console.log("render");
    const [count , setCount ] = useState(0);

    useEffect(()=>{
        console.log("useeffect");
       let num = Math.random()*100;
       setCount(num);
    })
    //state of count
    //usestate runs on 1 st render so initially title set to def 0 clicked 0 times.
    
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick = {()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

//1st time render print useeffect ni chla use state chla ab useeffect call print useeffect ab setcount se state change compo re render render print
//  UE nhi chla 
//  US ni chla
 //count set to value given by random

// render complete again UE call
// print UE
// again set count again render ===>>> INFINITE
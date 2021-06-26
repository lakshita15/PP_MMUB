import React , {useState} from 'react'


const Counter = () => {

    const [count , setCount] = useState(0);

    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handledecrement=()=>{
        //updating state by not using this
        setCount(count-1);
    }
    return ( 
        <div>
            <h1>{count}</h1>
            {/* reading the state */}
            <button onClick = {handleIncrement}>+</button>
            <button onClick={handledecrement}>-</button>
        </div>
     );
}
 
export default Counter;
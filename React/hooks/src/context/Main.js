import React,{useState} from 'react'
import Demo from './Demo';
import MyContext from './Context';
function Main() {
    console.log('Render');
    const[count,setCount] =useState(0);
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}} >Click</button>
            {/* MyContext me hello yha pe count hai value */}
            <MyContext.Provider value={count}> {/* value=state */}
                <Demo/>
            </MyContext.Provider>
        </div>
    )
}

export default Main
// Demo render value print 0
//Demo child render value print 0
//click pe all comps re render.
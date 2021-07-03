import React, {useEffect , useState} from 'react'
import './Ue3.css'
// 3rd Variation
// non empty dependency array
// dependency array k andar
//the values that we pass only when they change useEffect runs.

function Ue3() {
    console.log('render');
    const [count,setCount] =useState(0);
    const [darkMode,setDarkMode] =useState(false);
    useEffect(()=>{
        console.log('useEffect');
        document.title= `Clicked ${count} times`;
    },[count])
    return (
        <div className={darkMode ? "view dark-mode":"view"} >
            <label htmlFor='dark Mode'>DarkMode</label>
            <input type='checkbox' checked={darkMode} onChange={()=>setDarkMode(!darkMode)}/>
            <button onClick={()=>{setCount(count+1)}}>{count}</button>
        </div>
    )
}

export default Ue3;

//button press count state chng re render render print us ni chlenge ue ni chlega as ye after render chlega ab state chng doc title 0->1.
//when dark chng hua to ue ki no sense when daark mode state chng bas ue extra chlra h need i h isko htane ke lie 2 variaion
//ab button click ue chlra value bdri all good ab check box pe click kia to ni chlra useeffect by using dependancy array we added value on which our work is dependant 
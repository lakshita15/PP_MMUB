import React , {useEffect , useState} from 'react'
/**********Variation 2 (runs after 1 render)**********/
//"Behaves like componentdidmount so it runs only aafter first render"
//dependancy array is passed. Empty dependancy array is passed
//starting me useeffect ni as it runs after render but usestate called.
//after render use effect call and document title will be set to clicked _ times. But on 2 click only render chla useeffect ni on change state.
//on click 2 time usestate wont run as it runs only on 1st render but here useeffect will also not run as it acts like componentDidMount and will only run after 1st render

export default function Ue2() {

    useEffect(()=>{
        console.log("useeffect");
        document.title = `clicked ${count} times`
    },[])
    //state of count
    //usestate runs on 1 st render so initially title set to def 0 clicked 0 times.
    
    const [count , setCount ] = useState(0);
    
    console.log("render");
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick = {()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}



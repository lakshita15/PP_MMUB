import React , {useEffect , useState} from 'react'
/**********Variation 1 (runs after every render)**********/
//it runs after every render.
//no dependancy array is passed
//starting me useeffect ni as it runs after render
//after render use effect call and document title will be set to clicked _ times.
//"Behaves partially like mixture of componentdidmount and componentdidupdate "

export default function Ue1() {

    console.log("render");
    useEffect(()=>{
        console.log("useeffect");
        document.title = `clicked ${count} times`
    })
    //state of count
    //usestate runs on 1 st render so initially title set to def 0 clicked 0 times.

    const [count , setCount ] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick = {()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

import React,{useContext} from 'react'
import MyContext from './Context'

export default function DemoChild() {
    const val = useContext(MyContext)
    console.log(val);
    return (
        <div>
            
        </div>
    )
}

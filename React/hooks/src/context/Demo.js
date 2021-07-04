import React,{useContext} from 'react'
import MyContext from './Context'
import DemoChild from './DemoChild';
export default function Demo() {
    const val = useContext(MyContext)
    console.log(val);
    return (
        <div>
    <DemoChild></DemoChild>
        </div>
    )
}

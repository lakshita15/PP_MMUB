import React from 'react'

export default function Us() {
    const [msgObj, setMessage] = useState({message:'' , id:1});
    
    const handleChange=(e)=>{
        let val = e.target.value;

        msgObj.message = val;

        console.log(msg);

        // setMessage({...msgObj , message:val}); 

        //used spread operator as w.o this aa new object will be created but on calling setmessage it'll update only the msgobj an did will be lost. As message ki value update. Jo value setmessage fnc ko denge vo jake state ki value ho jayegi usko frq ni pdta ki message ke alawa koi key hai ya ni hai.
        // SetState me aisa ni hota tha usme jo hum key ki value chng krte the vo he chng hoti thi baki pe koi effect ni but isme id ki value will be lost. if we do the below thing.To save this use spread operator.
        // on using spread message me empty string id me 1 
        // when use pread ek copy bni and value copy and isme humne message ki value chng krdi aur id ki value loose nhi hori hai 


        //let Newobj = setMessage({ message:val});

        
        let Newobj = setMessage({...msgObj , message:val})
        setMessage(Newobj);

        
    }
    return (
        <div>
            <input  type ='text' value={msgObj} onClick = {handleChange}></input>
        </div>
    )
}
h
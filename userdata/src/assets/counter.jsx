import {userState} from 'react'

export default function counter(){
    const [count,setcount]=userState(0)
    const add =()=>{
         let temp =count;
         temp++;
         setcount(temp)
    };

    return(<div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>+</button>

    </div>)
};
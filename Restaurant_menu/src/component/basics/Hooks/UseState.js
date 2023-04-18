import React , {useState} from 'react'
import "./style.css";

const UseState = () => {

  const[myNum, setMyNum] = useState(15);
  console.log(myNum);

  return (
    <div className='con'>
    <p>{myNum}</p>
    <div className='container1'>
    
        <div className='button' onClick={() => setMyNum(myNum + 1)}>
            
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCREMENT
        </div>

        <div className='button'onClick={() => myNum > 0 ? setMyNum(myNum - 1) : setMyNum((0))}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECREMENT
        </div>

      
    </div>
    </div>
  )
}

export default UseState

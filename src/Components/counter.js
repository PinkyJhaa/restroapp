import React,{useState} from 'react'

const Counter = () => {
    const [count , setCount] = useState(0);
    const handleCount = () =>{
        // sessionStorage.setItem('count',0)
        // setCount(sessionStorage.getItem('count+1')
            // )
            setCount(count+1)
    }
    return (
        <div>
            <>
                <button onClick={handleCount}>clickme</button>
                {count}
            </>
        </div>
    )
}

export default Counter

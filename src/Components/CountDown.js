import React, { useEffect, useRef,useState } from 'react'

const CountDown = ({seconds, stop, start}) => {
    const [CountDown, setCountdown] = useState(seconds);
    const timerId = useRef()

    useEffect(()=>{
        if(start){
            timerId.current = setInterval(()=>{
                setCountdown(prev => prev-1)
            },1000)
        }      
        return ()=> clearInterval(timerId.current)
    },[start])

    useEffect(()=>{
        if(stop){
            clearInterval(timerId.current)
            setCountdown(seconds)
        }
        else if(CountDown<=0){
            clearInterval(timerId.current)
            alert('end')
        }
    },[CountDown,stop,seconds])

  return (
    <div>
       {CountDown} 
    </div>
  )
}

export default CountDown
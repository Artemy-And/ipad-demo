import React, {useEffect, useState} from "react";


export const Clock = (props)=>{
    let [date, setState]=useState(new Date())

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setState(date.getHours())
    //         setState(date.getMinutes())
    //         setState(date.getSeconds())
    //     },1000)
    // })

    return <div>
        <span>{date.getHours()}</span>
        :
        <span>{date.getMinutes()}</span>
        :
        <span>{date.getSeconds()}</span>
    </div>
}
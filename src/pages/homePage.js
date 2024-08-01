import { useEffect, useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
const HomePage=()=>{
    const [isVisible,setIsVisible]=useState(false);
    useEffect(()=>{
        const timer=
        setTimeout(()=>{
            setIsVisible(true);
        },500000);

        return()=>clearTimeout(timer);
    
    },[]);
    const targetDate=new Date('2024-06-12T18:59:59').getTime();
    return (
        <>
        <div>
            {isVisible?(
                 <h1>Home Page</h1>
            ):(
                <div>
                <CountdownTimer targetDate={targetDate}/>
                </div>
            )}
        </div>
       
        </>
    )


}

export default HomePage;
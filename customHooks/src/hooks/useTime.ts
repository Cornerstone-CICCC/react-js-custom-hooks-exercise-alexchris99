import { useEffect, useState } from "react"

export function useTime(date: string){
    const [time, setTime] = useState<string>("")

    useEffect(()=>{
        const days = ["Monday","Tuesday","Wenesay","Thursday","Friday","Saturday","Sunday"]
        if(date == "day"){
            setTime(days[new Date().getUTCDay()-1])
        }else{
            setTime( (new Date().getHours()).toString())
        }
    },[date])

    return time
}
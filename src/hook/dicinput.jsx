import { useState, useCallback } from "react"

const DicInput = (inputData) =>{

    const [data, setData] = useState(inputData)

    const onchange = useCallback((e) => {
        const {name, value} = e.target;
        setData((data)=>({
            ...data, 
            [name] : value})) //[키] : 값
    },[])

    const reset = useCallback(()=>setData(inputData),[inputData])

    return[data,onchange,reset]
}

export default DicInput

//데이터 만들어서 내보낸다 (정리) custom hook

//hook~~hook~~hook~~hook~~hook~~hook~~hook~~hook~~hook~~hook~~
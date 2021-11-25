import { useState } from "react" 
export default function Function1(){
    const [input, setInput] = useState('')
    const [array, setArray] = useState([])
    const [result, setResult] = useState('')
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        // setArray(input)
        // if (array.length===0){
        //     setResult('null')
        // }else if (array.length===1){
        //     setResult(input)
        // }
        const newArray = input.split(',')
        const mapArray = newArray.map((val)=>{return parseInt(val, 10)})
        if (mapArray.length>1){
            const max = Math.max.apply(null, mapArray)
            const maxNum = mapArray.filter(element => element===max)
            console.log(maxNum.length);
            mapArray.splice(mapArray.indexOf(max), maxNum.length)
            setResult(Math.max.apply(null, mapArray))
        }
        else if (mapArray.length===0||isNaN(mapArray)){
            setResult('null')
        }else if (mapArray.length===1){
            setResult(mapArray)
        }
       
    }
    
    return (
        <div>
            <label >Enter your array:</label>
            <input onChange={(e) => handleChange(e)} type="text"  name="yourArray" />
            <button onClick={() => handleClick()}>
                Enter
            </button>
            <p>{result}</p>
        </div>
        
    )
}
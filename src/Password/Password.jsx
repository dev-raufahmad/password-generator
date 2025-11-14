import React, { useEffect, useState } from "react";
export function Password(){
    const [charon,setCharon]= useState(false);
    const [symbol,setSymbol]= useState(false);
    const [Password,setPassword]= useState("");
    const [length,setLength]= useState(30);
    
    useEffect(() =>{
        let answer="";
        let a="ABCDEFGHIJKLMNOPQRSTUVWXYZabvdefghijklmnopqrstuvwxyz";
        if(charon){ a+="1234567890" }
        if(symbol) { a+="|+_#@!^%&(){}[]]" }
        for(let i=0;i<length;i++){
            let j=Math.floor(Math.random()*a.length);
            answer+=a.charAt(j);
        }
        setPassword(answer);
    },[charon,symbol,length])

    return(
        <>
        <br />
        <label  htmlFor="786">Add numbers</label>
        <input className="bg-yellow-400" type="checkBox" id="786" value={charon} onChange={() => setCharon(!charon)} />
        <br />
        <br />
        <label htmlFor="78600">Add Symbols</label>
        <input id="78600" type="checkBox" value={symbol} onChange={() => setSymbol(!symbol)}/>
        <br />
        <br />
        <input type="range" min={8} max={30} value={length} onChange={(e) => setLength(e.target.value)}/>
        <h1>{length}</h1>
        <br />
        <br />
        <input className="bg-green-800 text-yellow-200" type="text" disabled={true} value={Password}/>

        </>
    )
}
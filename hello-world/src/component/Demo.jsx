import React, { useContext } from 'react'
import { ContextName } from './Context';
export default function Demo() {
    

    const context = useContext(ContextName)
    console.log("context",context);
    return (
        <div>
            <h1>Hiiii</h1>
        </div>
    )
}

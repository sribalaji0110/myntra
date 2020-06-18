import React from 'react'

export default function HatsList({sorted}) {
   
    return (
        <div>
        {sorted.map(x=>{
            return <h1>{x.id}</h1>
        })}
        </div>
    )
}

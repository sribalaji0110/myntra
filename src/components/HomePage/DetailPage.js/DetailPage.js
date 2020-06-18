import React from 'react'
import { Consumer } from '../../context/Context'

function DetailPage() {
    return (
        <div>
            <Consumer>
                {(value)=>{
                const newPro = value.newPro;
                return newPro.map(listout=>{
                    const {name,imageUrl,price}= listout
                    return (
                        <div key={listout.id}>
                          <img alt="detail_img" src={imageUrl}></img>
                          <h4>{name}</h4>
                          <h6>{price}</h6>
                        </div>
                    )
                })
                }}
            </Consumer>
        </div>
    )
}
export default  DetailPage
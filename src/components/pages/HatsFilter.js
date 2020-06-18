import React from 'react'
import { Consumer } from '../context/Context';

const getunique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

function HatsFilter({ product }) {
    const typeMap = product.map((x, index) => {
        return <option key={index} value={x.type}>{x.type}</option>
    })
    let types = getunique(product, "type");
    types = ["all", ...types];
    types = types.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <Consumer>
            {(values) => {
                const { type, handleChange } = values;
                return (
                    <div>
                        <select onChange={handleChange} name="filed-search" >
                            {types}
                        </select>
                    </div>
                )
            }}
        </Consumer>
    )
}
export default HatsFilter
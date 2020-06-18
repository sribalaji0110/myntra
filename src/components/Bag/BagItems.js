import React from 'react'
import { Consumer } from '../context/Context'

export default function BagItems() {
    return (
        <div>
            <Consumer>
                {(value)=>{
                   const bag = value.bag;
                   if(bag.length > 0){
                       return (
                           <div>
                               <h5>My Shopping bag ({value.bag.length} items)</h5>
                              <h4>Order Total:{value.BagTotal}</h4>
                              <h6>discount : {value.BagDiscount}</h6>
                              <h5>delivery fees:{value.deliveryFees}</h5>
                              <h2>Total:{value.Total}</h2>
                              <button>PLace Order</button>
                           </div>
                       )
                   }
                }}
            </Consumer>
        </div>
    )
}

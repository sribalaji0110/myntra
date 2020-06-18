import React from 'react';
import { Consumer } from '../context/Context';
import '../../App.css'
import BagItems from './BagItems';
function Bag() {
    return (
        <div className="container bag home">
            <BagItems></BagItems>
            <Consumer>
                {(value) => {
                    const bag = value.bag;
                    const BagListDelete = value.BagListDelete
                    const BagListAgainMoveWishPage = value.BagListAgainMoveWishPage;
                    const increment= value.increment;
                    const decrement= value.decrement
                    if (bag.length > 0) {
                        return bag.map(baglist => {
                            const { name, imageUrl, price, id, total, count } = baglist
                            return (
                                <div key={baglist.id} className="bagslist">
                                    <div className="bag_one">
                                        <div className="list">
                                            <img alt="detail_img" src={imageUrl}></img>
                                            <div className="priced">
                                                <h4>{name}</h4>
                                                <h6><span>Rs : </span>{price}</h6>
                                                <p><s>${Math.floor(Math.random() * 60) + 40}</s>
                                                    <span>Off</span> </p>
                                                 
                                            </div>
                                            <div className="quantity">
                                                <span onClick={()=>{increment(id)}}>+</span>
                                                <span>{count}</span>
                                                <span onClick={()=>{decrement(id)}}>-</span>
                                            </div>
                                        </div>

                                        <div className="remove">
                                            <ul className="ulorder">
                                                <li onClick={() => {  BagListDelete(id) }}>Remove</li>
                                                <li onClick={() => {  BagListAgainMoveWishPage(id) }}>Move To wishlist</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    } else {
                        return <h2>Empty Bag</h2>
                    }

                }}
            </Consumer>
        </div>
    )
}
export default Bag;

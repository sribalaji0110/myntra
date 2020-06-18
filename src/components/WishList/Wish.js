import React from 'react'
import { Consumer } from '../context/Context';
import '../../App.css'
import WishModel from './WishModel';

export default function Wish() {
    return (
        <div className="container home">
            <div className="overll">

                <Consumer>
                    {(value) => {
                        const wish = value.wishArr
                        const wishListDelete = value.wishListDelete;
                        // const MoveBagList = value.MoveBagList;
                        const wishmodel = value.wishmodel;
                        const {getobj}= value;

                        if (wish.length > 0) {
                            return (
                                <React.Fragment>
                                    {value.modelWish ?
                                        <WishModel></WishModel>
                                        : null}
                                    <h4>My WishList  <span> {wish.length} items</span></h4>
                                    {wish.map(wishlisted => {
                                        const { name, imageUrl, price, id, count } = wishlisted;
                                        return (

                                            <div key={wishlisted.id} className="detail_overall">
                                                <span className="closed" onClick={() => { wishListDelete(id) }}>X</span>
                                                <img alt="detail_img" src={imageUrl}></img>

                                                <h4>{name}</h4>
                                                <h6><span>Rs : </span>{price}</h6>
                                                <div className="wishlists">
                                                    <button>-</button>
                                                    <button>{count}</button>
                                                    <button >+</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </React.Fragment>
                            )

                        } else {
                            return <h1>Add some wishList</h1>
                        }

                    }}
                </Consumer>
            </div>
        </div>
    )
}

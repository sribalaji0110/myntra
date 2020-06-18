import React from 'react'
import { Consumer } from '../context/Context'
import '../../App.css'

export default function WishModel() {
    return (
        <Consumer>
            {(value) => {
                return value.wishModel.map(item => {
                    const { name, imageUrl, price ,small,medium,large,extralarge,id} = item;
                    const MoveBagList = value.MoveBagList;
                  const Addtocart=value.Addtocart
                    return (
                        <div className="wish_overall" key={item.id}>
                            <div className="wish_content">
                                <h5>{name}</h5>
                                <img src={imageUrl} alt="model_img"></img>
                                <h6>Price: ${price}</h6>
                                <div className="sizes">
                                    <h6>size</h6>
                                    <ul>
                                        <li>{small}</li>
                                        <li>{medium}</li>
                                        <li>{large}</li>
                                        <li>{extralarge}</li>
                                    </ul>
                                    <button onClick={()=>{MoveBagList(id)
                                    Addtocart(id)}}>Done</button>
                                </div>
                            </div>
                        </div>

                    )
                })
            }}
        </Consumer>
    )
}

import React, { Component } from 'react'
import { Consumer } from '../context/Context';
import '../../App.css';

class Hats extends Component {
    state = {
        storeParams: this.props.match.params.routename,
    }
    uniqueGender = (sortArray) => {
        return [...new Set(sortArray.map(sort => sort.gender))]
    }
    uniqueBrand = (brandlist) => {
        return [...new Set(brandlist.map(list => list.brand))]
    }

    render() {
        return (
            <Consumer>
                {(value) => {
                    const { sorted, handleChange, filterArray, minprice, maxprice, currentPrice,
                        Movewishlist ,getobj } = value;
                   
                        if(sorted.length < 0){
                            return <p>no match</p>
                        }
                    let filterGender = this.uniqueGender(filterArray);
                    filterGender = [...filterGender];
                    filterGender = filterGender.map((gen, index) => {
                        return (
                            <React.Fragment key={index}>
                                <input type="checkbox" value={gen} name="Gender" onChange={handleChange}></input>
                                <label>{gen}</label>
                            </React.Fragment>
                        )
                    })
                    let filterBrand = this.uniqueBrand(filterArray);
                    filterBrand = [...filterBrand];
                    filterBrand = filterBrand.map((branditems, index) => {
                        return (
                            <React.Fragment key={index}>
                                <input type="checkbox" value={branditems} name="Brand" onChange={handleChange}></input>
                                <label>{branditems}</label>
                            </React.Fragment>
                        )
                    })
                    return (
                        <div className="product-overall">
                            <div className="product_list">
                                <h4>Home/product/{this.state.storeParams}</h4></div>
                              <h6>{this.state.storeParams} {sorted.length} - items</h6>
                            <div className="products">
                                <div className="side_menu">
                                    <div className="categrey">
                                        <h2>Filter </h2>
                                        <div className="gender_list">
                                            {filterGender}
                                        </div>
                                        <div className="Brand">
                                            <h4>Brand</h4>
                                            {filterBrand}
                                        </div>
                                        <div className="priceRange">
                                            <h4>PriceRange {minprice} to {maxprice}</h4>
                                            <h6>Price : {currentPrice}</h6>
                                            <input type="range" name="currentPrice"  max={maxprice} onChange={handleChange}></input>
                                        </div>
                                    </div>

                                </div>
                                <div className="overll_pro">
                                    {sorted.map(listout => {
                                        const { name, imageUrl, price, id,cart } = listout
                                        return (
                                            <div key={id} className="detail_overall">
                                                <img alt="detail_img" src={imageUrl}></img>
                                                <div className="wishlist">
                                                
                                                    <button onClick={()=>{Movewishlist(listout,id) }}>WISHLIST</button>
                                                  
                                                </div>
                                                <h4>{name}</h4>
                                                <h6><span>Rs : </span>{price}</h6>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }

}
export default Hats

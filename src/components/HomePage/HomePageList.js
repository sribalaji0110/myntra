import React from 'react'
import { Consumer } from '../context/Context'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

function HomePageList(props) {
    const { title, imageUrl,routeName ,id} = props.product
    return (
        <Consumer>
            {(value) => {
                const innerProductList = value.innerProductList
                return (
                    <div className="homepage">
                        <Link to={`/product/${routeName}`} onClick={()=>{innerProductList(id)}} 
                        ><img alt="pro" src={imageUrl} ></img>
                        </Link>
                        <h4>{title}</h4>
                    </div>
                )
            }}
        </Consumer>

    )
}

export default withRouter(HomePageList)

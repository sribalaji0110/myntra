import React,{Component} from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { Consumer } from '../context/Context';
import { withRouter } from "react-router";

class  Navbar extends Component {
    render(){
        console.log(this.props);
        return (
            <Consumer>
                {(value => {
                    const ProductList = value.products;
                    const {count}=value;
                    return (
                        <div className="navbar_overall">
                            <div className="container">
                                <div className="logo">
                                    <Link to="/"> <img src={logo} alt="logo"></img></Link>
                                </div>
                                <ul className="product">
                                    {ProductList.map(pro => {
                                        return (
                                        <Link to={`/product/${pro.routeName}`} key={pro.id} >{pro.title}</Link>
                                        )
                                    })}
                      
                                </ul>
                                <div className="cart_list">
                                    <div className="shop_list">
                                        <ul>
                                            <li><Link to="/">Profile</Link></li>
                                            <li><Link to='/wishlist'>Wish List</Link></li>
                                            <li><Link to="/bag">Bag <span>{count}</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Consumer>
    
        )
    }
    
}

export default withRouter(Navbar);
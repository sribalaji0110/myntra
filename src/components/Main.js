import React, { Component } from 'react'
import { Provider } from './context/Context'
import { SHOP_DATA } from '../orginalData'
class Main extends Component {

    state = {
        products: [],
        sorted: [],
        titleFilter: "all",
        Gender: "init",
        filterArray: [],
        Brand: "brannd",
        maxprice: 0,
        minprice: 0,
        currentPrice: 0,
        wishArr: [],
        count: 0,
        storeArr: []
    }
    initialProduct = (SHOP_DATA) => {
        let initial = [...SHOP_DATA];
        initial.map(x => {
            return x
        })
        return initial
    }
    componentDidMount = (id) => {
        const StoreInitailProduct = this.initialProduct(SHOP_DATA);
        this.setState({
            products: StoreInitailProduct
        }, () => {
            console.log(this.state, "componentDidMount");
            this.filterList();
        })
    }
    innerProductList = (id) => {
        const oldProduct = [...this.state.products];
        const storeObj = oldProduct.find(fil => fil.id === id);
        const store = storeObj.items;
        let MAXPRICE = store.map(fill => fill.price);
        let maxprices = Math.max(...MAXPRICE);
        let MINPRICE = store.map(fill => fill.price);
        let minprices = Math.min(...MINPRICE);
        this.setState({
            sorted: store,
            filterArray: store,
            maxprice: maxprices,
            minprice: minprices
        }, () => {
            console.log(this.state, "innerProductList")
        })
    }
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        }, () => {
            console.log(`${name} and ${value}`);
            this.filterList();
        })
    }
    filterList = () => {
        let sortedStore = [...this.state.filterArray];
        if (this.state.Gender !== "init") {
            sortedStore = sortedStore.filter(fill => fill.gender === this.state.Gender)
            console.log(sortedStore.length)
        }
        if (this.state.Brand !== "brannd") {
            sortedStore = sortedStore.filter(fill => fill.brand === this.state.Brand)
        }
        if (this.state.currentPrice !== 0) {
            sortedStore = sortedStore.filter(fill => fill.price <= this.state.currentPrice)
        }
        this.setState({
            sorted: sortedStore
        }, () => {
            console.log(this.state)
        })
    }
    Movewishlist = (obj,id) => {
        // let storeStortedArr = [...this.state.sorted];
        // const storeObj = storeStortedArr.find(fil => {
        //     return fil.id === id
        // });
        // const index = storeStortedArr.indexOf(storeObj);
        // const setNames = storeStortedArr[index];
        // setNames.cart = true;
        // setNames.count = 1;
        const storeWishArr = [...this.state.wishArr, { ...obj,quantity:1 }];
        const exist = storeWishArr.find(cart=>{
            return cart.id === id
        })
        if(exist){
            return storeWishArr.map(x=>(
                x.id === id?
                {...x,quantity:x.quantity+1}:
                x
            ))
            }
        this.setState({
            wishArr: storeWishArr
        }, () => {
           console.log(this.state)

        })

    }
    getobj = (obj, id) => {
  
        
    }
    render() {
        return (
            <div className="main">
                <Provider
                    value={
                        {
                            ...this.state,
                            innerProductList: this.innerProductList,
                            handleChange: this.handleChange,
                            Movewishlist: this.Movewishlist,
                            getobj: this.getobj
                        }} >
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}

export default Main








    // matchProductListFn:this.matchProductListFn
                            // ImageClickerHome: this.ImageClickerHome,
                            // wishList: this.wishList,
                            // wishListDelete: this.wishListDelete,
                            // MoveBagList: this.MoveBagList,
                            // BagListDelete: this.BagListDelete,
                            // BagListAgainMoveWishPage: this.BagListAgainMoveWishPage,
                            // wishmodel: this.wishmodel,
                            // Addtocart: this.Addtocart,
                            // increment: this.increment,
                            // decrement: this.decrement


                            // product: [],
                            // detailList: [],
                            // wish: [],
                            // bag: [],
                            // wishModel: [],
                            // modelWish: false,
                            // BagTotal: 0,
                            // BagDiscount: 20,
                            // deliveryFees: 0,
                            // Total: 0,
                            // price: 0,






    //     let tempProduct = [];
    //     SHOP_DATA.map(mapdata => {
    //         const store = mapdata
    //         tempProduct = [...tempProduct, { ...store }]
    //     })
    //     this.setState({
    //         product: tempProduct
    //     })
    // }
    // ImageClickerHome = (id) => {
    //     //each item detail view array create
    //     let EmptyArry = [];
    //     const finder = this.state.product.find(finds => {
    //         return finds.id === id
    //     })
    //     let storeItemsArr = finder.items;
    //     storeItemsArr.map(x => {
    //         const store = x
    //         EmptyArry = [...EmptyArry, { ...store, count: 0 }]
    //     })
    //     this.setState({
    //         detailList: EmptyArry
    //     })
    // }

    // wishList = (id) => {
    //     // wishlist button create wish array
    //     const oldArr = [...this.state.detailList];
    //     let storeOldarr = oldArr.find(finder =>
    //         finder.id === id
    //     )
    //     const wishNewArr = [...this.state.wish, { ...storeOldarr, total: 0, count: 0 }];

    //     this.setState({
    //         wish: wishNewArr
    //     }, () => {

    //     })
    // }
    // wishmodel = (id) => {
    //     const wisharr = [...this.state.wish];
    //     let get = wisharr.find(finder => {
    //         return finder.id === id
    //     })
    //     const store = [...this.state.wishModel, { ...get }]
    //     this.setState({
    //         wishModel: store,
    //         modelWish: true
    //     })
    // }
    // MoveBagList = (id) => {
    //     //created wish array vah tranfer bag page
    //     let initialValue = 0;
    //     const wishOldArr = [...this.state.wishModel];
    //     const store = wishOldArr.find(finder => {
    //         return finder.id === id
    //     })
    //     const bager = [...this.state.bag, { ...store, count: 1 }];
    //     const wishlist = [...this.state.wish]
    //     const fil = wishlist.filter(wish => {
    //         return wish.id !== id
    //     })
    //     this.setState({
    //         bag: bager,
    //         wish: fil,
    //         modelWish: false,
    //     }, () => {
    //         this.Addtocart(id);
    //         console.log(this.state)
    //     })

    // }
    // wishListDelete = (id) => {
    //     // X button click delete in wishlist page
    //     const store = [...this.state.wish];
    //     const filter = store.filter(fil => {
    //         return fil.id !== id;
    //     })
    //     this.setState({
    //         wish: filter
    //     })
    // }
    // BagListDelete = (id) => {
    //     // delete list in bag page
    //     const store = [...this.state.bag];
    //     const filter = store.filter(fil => {
    //         return fil.id !== id;
    //     })
    //     this.setState({
    //         bag: filter
    //     })
    // }
    // BagListAgainMoveWishPage = (id) => {
    //     // again send through wish page items
    //     const bagstore = [...this.state.bag];
    //     const finder = bagstore.find(y => {
    //         return y.id === id
    //     });
    //     const filtermovetowish = bagstore.filter(fil => {
    //         return fil.id !== id
    //     })
    //     const stored = [...this.state.wish, { ...finder }]
    //     this.setState({
    //         wish: stored,
    //         bag: filtermovetowish
    //     })
    // }
    // Addtocart = (id) => {
    //     // cuurent value geet total and price ///MoveBagList

    //     let initial = 0;
    //     this.state.bag.map(x => {
    //         return initial = initial + x.price
    //     })

    //     let discount = 20;
    //     const delivery = initial * 0.4;
    //     const deliveryFee = parseFloat(delivery.toFixed(2));
    //     const BagTotal = initial;
    //     const convertTotal = initial + deliveryFee - discount
    //     const total = parseFloat(convertTotal.toFixed(2));
    //     this.setState({
    //         BagTotal: BagTotal,
    //         deliveryFees: deliveryFee,
    //         Total: total,
    //     }, () => {
    //         console.log(this.state)
    //     })
    // }
    // increment = (id) => {
    //     const bagarr = [...this.state.bag]
    //     const store = bagarr.find(set => {
    //         return set.id === id
    //     })
    //     if (store.count >= 3) {
    //         return
    //     } else {
    //         store.count = store.count + 1;
    //     }

    //     store.price = store.price * store.count;
    //     this.setState({
    //         bag: bagarr
    //     }, () => {
    //         this.Addtocart(id);
    //     })
    // }
import React from 'react'
import { Consumer } from '../context/Context'
import HomePageList from './HomePageList'
import '../../App.css'

function HomePage() {
    return (
        <React.Fragment>
            <Consumer>
                {(values) => {
                    const {products } = values;
                   
                    return (
                        <div className="container home">
                            <div className="homepage_overall">
                                {products.map(x => {
                                    return <HomePageList key={x.id} product={x}></HomePageList>
                                })}
                            </div>
                        </div>
                    )
                }}

            </Consumer>
        </React.Fragment>
    )
}
export default HomePage
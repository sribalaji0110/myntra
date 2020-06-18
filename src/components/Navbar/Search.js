import React from 'react'

function Search({handleChange}) {
    return (
        <React.Fragment>
            <input type="search" placeholder="Search for products, brands and more" 
            onChange={handleChange}/>
        </React.Fragment>
    )
}
export default Search
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Main from './components/Main'
import Hats from './components/pages/Hats'
import Wish from './components/WishList/Wish'
import Bag from './components/Bag/Bag'

const App = () => {
  return (
   <React.Fragment>
      <Main>
        <Navbar  ></Navbar>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/product/:routename' component={Hats}></Route>
          <Route path='/wishlist' component={Wish}></Route>
          <Route path='/:bag' component={Bag}></Route>
        </Switch>
      </Main>
      </React.Fragment>
  )
}

export default App;
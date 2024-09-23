import React from 'react'
import ResturantsCards from './Resturants/ResturantsCards'
import { BrowserRouter  as Router,  Routes, Route } from "react-router-dom";
import Header from './Header/Header';
import Resturants from './ResturantComponent/Resturants';
import { Provider } from 'react-redux';

import store from './utils/store';
import Cart from './Cart/Cart';



const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Router>
        <Resturants/>
        <Header/>
        <Routes>
          <Route  index element = {<ResturantsCards/>}/>
          <Route path="/resturant/:resId" element={<Resturants/>}> </Route>
          <Route path="/cart" element={<Cart/>}></Route>

         
        </Routes>
      </Router>
      </Provider>
     
      
    </div>
  )
}

export default App

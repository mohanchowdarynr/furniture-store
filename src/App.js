import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {
  Home,
  SingleProductPage,
  Cart,
  CheckoutPage,
  ErrorPage,
  AboutPage,
  PrivateRoute,
  ProductsPage
} from './pages'

function App() {
  return (
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <AboutPage />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/products'>
            <ProductsPage />
          </Route>
          <Route exact path='/products/:id' children={<SingleProductPage />} />
          <PrivateRoute exact path='/checkout'>
            <CheckoutPage />
          </PrivateRoute>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
  )
}

export default App
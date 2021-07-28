import React, { createContext, useContext, useEffect, useReducer } from 'react';
import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
  } from '../actions';
import products_reducer from '../reducer/products_reducer';

const initialState = {
    isSidebarOpen: false,
  }

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(products_reducer, initialState)
  
    const openSidebar = () => {
      dispatch({ type: SIDEBAR_OPEN })
    }
    const closeSidebar = () => {
      dispatch({ type: SIDEBAR_CLOSE })
    }
    return (
        <ProductsContext.Provider
          value={{ ...state, openSidebar, closeSidebar }}
        >
          {children}
        </ProductsContext.Provider>
      )
}
export const useProductsContext = () => {
    return useContext(ProductsContext)
}
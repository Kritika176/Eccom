
import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import { loginReducer } from "./Login/reducer";
import { ProductReducer } from './Product/reducer';
import { applyMiddleware } from 'redux';
import  cartReducer from "./Cart"

export const store = configureStore({
    reducer: {
        login:loginReducer,
        product:ProductReducer,
        cart:cartReducer
       
        
      }
      
    },
    applyMiddleware(ReduxThunk)
    )



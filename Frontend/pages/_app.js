import '../styles/globals.css'
import NavigationBar from '../public/components/Navigation'
import { combineReducers } from "redux";

import { Provider } from 'react-redux';
import reducerauth from '../store/reducers/auth';
import reducerEdit from '../store/reducers/Editing';
import thunk from 'redux-thunk'
import { configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
  Edit: reducerEdit,
  auth: reducerauth
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],


})






function MyApp({ Component, pageProps }) {
 
  return ( <Provider store={store}>
    {/* <NavigationBar/> */}

    <Component {...pageProps}  />


  </Provider>)

  
}



export default MyApp

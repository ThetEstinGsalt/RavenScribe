import '../styles/globals.css'
import NavigationBar from '../public/components/Navigation'

import { Provider } from 'react-redux';
import reducer from '../store/reducers/auth';
import thunk from 'redux-thunk'
import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
  reducer: reducer,
  middleware: [thunk],


})





function MyApp({ Component, pageProps }) {
 
  return ( <Provider store={store}>
    <NavigationBar/>

    <Component {...pageProps} />


  </Provider>)

  
}



export default MyApp

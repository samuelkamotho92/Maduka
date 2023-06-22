import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from './redux/store'
import FormProvider from './components/Auction/FormContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
<React.StrictMode>
  <FormProvider>
    <App />
  </FormProvider>
</React.StrictMode>
      </PersistGate>

   </Provider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import store, { persiStore } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'sonner'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Provider store={store}>
      <Toaster />
      <PersistGate persistor={persiStore}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>

  </React.StrictMode>,
)

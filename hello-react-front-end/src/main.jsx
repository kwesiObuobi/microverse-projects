import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from './app/store';
import Greeting from './components/Greeting';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/greeting',
    element: <Greeting />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

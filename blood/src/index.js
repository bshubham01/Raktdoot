import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContextProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthContextProvider>
        <App />
        <Toaster  
          // toastOptions={{ style: { top: "250px" } }}
          position="top-center"
          containerStyle={{
            top: '80px', // Adjust the top distance as needed
          }}
          reverseOrder={false}/>
      </AuthContextProvider>
    </React.StrictMode>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

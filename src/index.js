import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider, ProviderMode, UserProvider }
from "../src/components/stete";
import { ToastContainer } from "react-toastify";
import { Button, Select, ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
        <ProviderMode>
          <UserProvider>
            <UsersProvider>
                <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary:  '#00b96b',
                    }, Select:{ with: "100px",},
                    
                  },
                }}
                >
                  <StyleProvider>
                    <App />
                  </StyleProvider >
                </ConfigProvider>
            </UsersProvider>
          </UserProvider>
        </ProviderMode>
    </BrowserRouter>
  </React.StrictMode>
); 
  



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

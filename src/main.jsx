import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {SelectedNodeProvider} from "./Components/Providers/SelectedNodeProvider.jsx";
import {ModalProvider} from "./Components/Providers/ModalProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ModalProvider>
            <SelectedNodeProvider>
                <App/>
            </SelectedNodeProvider>
        </ModalProvider>
    </React.StrictMode>,
)

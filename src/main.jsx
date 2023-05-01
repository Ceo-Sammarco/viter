

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/globals.css";
import Comps from "./views/components/comps-index.jsx";
import Pages from "./views/pages/pages-index.jsx";


export function Appbar( props ) {

    return( <>

    </> );
}
export default function App( props ) {
    
    return( <>
        {/* <Comps.AppBar /> */}
        <Pages.Home />
    </> );
}

ReactDOM.createRoot( document.querySelector( "appbar" ) ).render(
    <React.StrictMode>
        <Comps.AppBar />
    </React.StrictMode>
);

ReactDOM.createRoot( document.querySelector( "main" ) ).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

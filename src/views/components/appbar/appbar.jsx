

import React from "react";
import "./appbar.css";


export default class AppBar extends React.Component {
    constructor( props ) {
        super( props );
    }


    render() {
        return( <>
            <appbar-body>
                <appbar-item></appbar-item>
                <appbar-item>Sammarco</appbar-item>
                <appbar-item></appbar-item>
            </appbar-body>
        </> );
    }
}

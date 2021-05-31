require('file-loader?name=[name].[ext]!./index.html');

import React from 'react';
import Image from '../src/img/sunny.jpg';

export function App() {
    return (
        <div>
            <h1 className="blueHeader">This is an sample image</h1>
            <img src={Image}></img>
            <h1 className="redHeader">This is an text with red color</h1>
        </div>
    );
}
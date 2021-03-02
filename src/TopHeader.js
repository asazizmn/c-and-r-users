import React from 'react';



const TopHeader = props => (
    <header className="App-header">
        <img src={props.logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{props.title}</h1>
    </header>
);



export default TopHeader;
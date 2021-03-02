import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TopHeader from './TopHeader';
import VideoGameUsers from './VideoGameUsers';



/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  render() {
    return (
      <div className="App">

        <TopHeader
          logo={logo}
          title={'Video Game Users'}
        />

        <VideoGameUsers />

      </div>
    );
  }
}



export default App;

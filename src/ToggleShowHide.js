import React, { Component } from 'react';


class ToggleShowHide extends Component {

    state = {
        isShowing: false
    };


    toggleShowHide = () => {
        this.setState({ isShowing: !this.state.isShowing });
    };


    render() {
        return (
            // display error in case of empty list
            this.props.numberUsers !== 0 &&
            <button onClick={this.toggleShowHide}>
                {this.state.isShowing ? "Show" : "Hide"} the Number of Games Played
            </button>
        )
    }

}



export default ToggleShowHide;
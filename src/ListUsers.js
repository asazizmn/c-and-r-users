import React, { Component } from 'react';



class ListUsers extends Component {

    state = {
        isShowing: false
    };


    toggleShowHide = () => {
        this.setState({ isShowing: !this.state.isShowing });
    };


    render() {
        return (
            <React.Fragment>

                <h3>List of users</h3>

                <ol>
                    {
                        // display list of users
                        this.props.users.map((item, index) => (
                            <li key={index}>{item.username} played {this.state.isShowing ? "\\*" : item.numberGames} games</li>
                        ))
                    }
                </ol>

                <div>
                    {
                        // display error in case of empty list
                        this.props.users.length === 0 && "There are currently no users listed"
                    }
                </div>

                {
                    // display error in case of empty list
                    this.props.users.length !== 0 &&
                    <button onClick={this.toggleShowHide}>
                        {this.state.isShowing ? "Show" : "Hide"} the Number of Games Played
                    </button>
                }

            </React.Fragment>
        )
    }
}



export default ListUsers;
import React, { Component } from 'react';



class ListUsers extends Component {

    state = {

        // the score should be showing by default, hence `true`
        isShowing: true
    };


    toggleShowHide = () => {

        // `this.state` should NOT be accessed directly in `setState`
        // ... instead access it via the provided `prevState` argument
        this.setState(prevState => ({ 
            isShowing: !prevState.isShowing 
        }));
    };


    render() {

        const {isShowing} = this.state;
        const {users} = this.props;

        return (
            <React.Fragment>

                <h3>List of users</h3>

                <ol>
                    {
                        // display list of users
                        users.map((item, index) => (
                            <li key={index}>{item.username} played {isShowing ? item.numberGames : "\\*" } games</li>
                        ))
                    }
                </ol>

                <div>
                    {
                        // display error in case of empty list
                        users.length === 0 && "There are currently no users listed"
                    }
                </div>

                {
                    // display error in case of empty list
                    users.length !== 0 &&
                    <button className="smallButton" onClick={this.toggleShowHide}>
                        {isShowing ? "Hide": "Show"} the Number of Games Played
                    </button>
                }

            </React.Fragment>
        )
    }
}



export default ListUsers;
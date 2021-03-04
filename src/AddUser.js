import React, { Component } from 'react';



class AddUser extends Component {

    initialState = {
        user: {
            firstname: '',
            lastname: '',
            username: '',
            numberGames: 0,
        },

        isDuplicate: false
    };

    state = this.initialState;



    handleChange = event => {

        // please note that SyntheticEvent objects are pooled
        // ... and once the handler has run, the `event` is no longer available
        // ... one way around this would be to save the desired values as follows
        // 
        // alternatively `event.persist()` prevents React from resetting its properties
        // https://reactjs.org/docs/legacy-event-pooling.html
        //
        // the following can be achieved with destructuring:
        // const key = event.target.id;
        // const value = event.target.value;
        const {key, value} = event.target;

        // '[event.target.id]' allows for dynamic keys to be used
        // this.setState({ [event.target.id]: event.target.value });

        // to set a particular state object property,
        // ... the entire object needs to be re-created
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [key]: value
            }
        }));
    };


    clearForm = () => {
        this.setState(this.initialState);
    };


    isUserValid = () => {

        // check if username is a duplicate
        const userExists = this.props.isDuplicate(this.state.user.username);

        // set duplicate property in state
        this.setState({ isDuplicate: userExists });

        return userExists;
    };


    isMissingInfo = () => {
        const user = this.state.user;
        return !user.firstname || !user.lastname || !user.username;
    };


    handleAddUser = event => {

        // to prevent browser reload/refresh when submitting
        event.preventDefault();
        
        // ensure username is not a duplicate
        if (!this.isUserValid()) {
            this.props.addUser(this.state.user);
            this.clearForm();
        }
    };



    render() {
        return (
            <React.Fragment>
                <h3>Add User</h3>

                {
                    this.state.isDuplicate &&
                    <div style={{ color: "red" }}>
                        Username already exists. Please change it!
                    </div>
                }

                <form onSubmit={this.handleAddUser}>
                    <input
                        id="firstname"
                        type="text"
                        placeholder="Enter First Name"
                        value={this.state.user.firstname}
                        onChange={this.handleChange}
                    />

                    <input
                        id="lastname"
                        type="text"
                        placeholder="Enter Last Name"
                        value={this.state.user.lastname}
                        onChange={this.handleChange}
                    />

                    <input
                        id="username"
                        type="text"
                        placeholder="Enter Username"
                        value={this.state.user.username}
                        onChange={this.handleChange}
                    />

                    <button disabled={this.isMissingInfo()}>Add</button>

                </form>
            </React.Fragment>
        );
    }
}



export default AddUser;
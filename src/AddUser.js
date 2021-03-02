import React, { Component } from 'react';



class AddUser extends Component {

    state = {
        firstname: '',
        lastname: '',
        username: '',
        numberGames: 0,

        isDuplicate: false
    };


    handleChange = event => {

        // '[event.target.id]' allows for dynamic keys to be used
        this.setState({ [event.target.id]: event.target.value });
    };


    clearForm = () => {
        this.setState({
            firstname: '',
            lastname: '',
            username: '',
            numberGames: 0,

            isDuplicate: false
        });
    };


    handleAddUser = event => {

        const user = this.state;

        // check to see if username exists
        const userExists = this.props.isDuplicate(user.username);
        this.setState({ isDuplicate: userExists });

        // ensure username doesn't exist before adding user
        if (!userExists) {
            this.props.addUser(user);
            this.clearForm();
        }

        // to prevent browser reload/refresh when submitting
        event.preventDefault();
    };


    render() {
        return (
            <React.Fragment>
                <h3>Add User</h3>

                {
                    this.state.isDuplicate && <div style={{color: "red"}}>Username already exists. Please change it!</div>
                }

                <form onSubmit={this.handleAddUser}>
                    <input
                        id="firstname"
                        type="text"
                        placeholder="Enter First Name"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                    />

                    <input
                        id="lastname"
                        type="text"
                        placeholder="Enter Last Name"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                    />

                    <input
                        id="username"
                        type="text"
                        placeholder="Enter Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />

                    <button>Add</button>

                </form>
            </React.Fragment>
        );
    }
}



export default AddUser;
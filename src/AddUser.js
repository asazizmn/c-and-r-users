import React, { Component } from 'react';



class AddUser extends Component {

    state = {
        firstname: '',
        lastname: '',
        username: '',
        numberGames: 0
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
            numberGames: 0
        });
    };


    handleAddUser = event => {
        
        // to prevent browser reload/refresh when submitting
        event.preventDefault();
        
        this.props.addUser(this.state);
        this.clearForm();
    };


    render() {
        return (
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
        );
    }
}



export default AddUser;
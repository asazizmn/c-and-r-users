import React, { Component } from 'react';



class AddUser extends Component {
    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Enter First Name"
                    value=""
                    onChange=""
                />

                <input
                    type="text"
                    placeholder="Enter Last Name"
                    value=""
                    onChange=""
                />

                <input
                    type="text"
                    placeholder="Enter Username"
                    value=""
                    onChange=""
                />

                <button>Add</button>


            </form>
        );
    }
}



export default AddUser;
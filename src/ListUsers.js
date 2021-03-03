import React, { Component } from 'react';



const ListUsers = props => (
    <React.Fragment>

        {/* title */}
        <h3>List of users</h3>

        {/* display list of users */}
        <ol>
            {
                props.users.map((item, index) => (
                    <li key={index}>{item.username} played {item.numberGames} games</li>
                ))
            }
        </ol>

        {/* display error in case of empty list */}
        {
            props.users.length === 0 &&

            <div style={{ color: "lightgray" }}>
                There are currently no users listed
            </div>
        }

    </React.Fragment>
);



export default ListUsers;
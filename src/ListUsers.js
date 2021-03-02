import React, { Component } from 'react';



const ListUsers = props => (
    <React.Fragment>
        <h3>List of users</h3>

        <ol>
            {
                props.users.map((item, index) => (
                    <li>{item.username} played {item.numberGames} games</li>
                ))
            }
        </ol>

        {
            props.users.length === 0 &&

            <div style={{ color: "lightgray" }}>
                There are currently no users listed
            </div>
        }

    </React.Fragment>
);



export default ListUsers;
import React from 'react';

import { useParams } from 'react-router-dom';

export default function Friend(props) {
    const { friends } = props;
    const { id } = useParams();
    const friend = friends.find(friend => friend.id === parseInt(id));
    
    return (
        <div className="friend">
            <h2>Friend Details:</h2>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
        </div>
    )
}
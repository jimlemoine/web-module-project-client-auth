import React from 'react';

import { useParams } from 'react-router-dom';

export default function Friend(props) {
    const { friends } = props;
    const { id } = useParams();
    const friend = friends.find(friend => friend.id === parseInt(id));
    
    return (
        <div className="friend">
            <h2>Friend Details: {friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    )
}
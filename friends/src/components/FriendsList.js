import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Route, Link } from 'react-router-dom';
import Friend from './Friend';

class FriendsList extends React.Component {
    state = {
        friendsList: []
    }
    
    componentDidMount() {
    axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(resp => {
            this.setState({
                friendsList: resp.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="friends-list">
                <h2>Friends List</h2>
                <Link to="/friendform" >Add a Friend</Link>
                {this.state.friendsList.map(friend => (
                    <div>
                        <h2>{friend.name}</h2>
                        <Link to={`/friends/${friend.id}`}>See this friend's details</Link>
                    </div>
                ))}
                <Route path={`/friends/:id`}>
                    <Friend friends={this.state.friendsList} />
                </Route>

            </div>
        )
    }
}

export default FriendsList;
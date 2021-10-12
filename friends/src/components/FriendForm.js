import axios from 'axios';
import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialFormValues = {
    name: '',
    age: '',
    email: ''
}
export default function FriendForm() {
    
    const [formValues, setFormValues] = useState(initialFormValues);

    const onChange = e => {
        setFormValues({
            ...formValues,
        [e.target.name]: e.target.value
        })
    }

    const onSubmit = evt => {
        evt.preventDefault();
        const newFriend = {
            name: formValues.name,
            age: formValues.age,
            email: formValues.email
        }
        axiosWithAuth()
            .post("http://localhost:5000/api/friends", newFriend)
            .then(resp => {
                setFormValues(initialFormValues);
            })

    }

    return (
        <div>
            <header>
                <h2>Add another friend</h2>
            </header>
            <form onSubmit={onSubmit}>
                <label>Name
                    <input
                        value={formValues.name}
                        onChange={onChange}
                        name="name"
                        type="text"
                    />
                </label>
                <label>Age
                    <input
                        value={formValues.age}
                        onChange={onChange}
                        name='age'
                        type='text'
                    />
                </label>
                <label>Email
                    <input
                        value={formValues.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
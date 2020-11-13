import React, { Component } from 'react';
import './Users.css';

export default class Users extends Component {

    state = {
        users: []
    }

    goToHome = () => {
        this.props.history.push({
            pathname: '/'
        })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ users }))
    }


    render() {
        return (
            <div>
                <h2>Users</h2>
                <button class="btn btn-primary" onClick={this.goToHome}>Home</button>
                {
                    this.state.users.map(user => (
                        <div class="alert alert-primary">
                            <h3>Name: {user.name}</h3>
                            <h4>Username: {user.username}</h4>
                            <h4>Email: {user.email}</h4>
                            <hr/>
                            <div>
                                <button class="btn btn-info" onClick={() => this.props.history.push(`/users/${user.id}`)}>Show user</button>
                                <button class="btn btn-info" onClick={() => this.props.history.push(`/users/${user.id}/posts`)}>Show posts</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        )
    }
}

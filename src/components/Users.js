import React, { Component } from 'react'

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
            <div >
                <h2>Users</h2>
                <button onClick={this.goToHome}>Home</button>
                {
                    this.state.users.map(user => (
                        <div>
                            <h3>Name: {user.name}</h3>
                            <h4>Username: {user.username}</h4>
                            <h4>Email: {user.email}</h4>
                            <button onClick={() => this.props.history.push(`/users/${user.id}`)}>Show user</button>
                            <button onClick={() => this.props.history.push(`/users/${user.id}/posts`)}>Show posts</button>
                            <hr />
                        </div>
                    ))
                }
            </div>

        )
    }
}

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
        .then(users => this.setState({users}))
    }


    render() {
        return (
            <div>
                <div>
                <button onClick={this.goToHome}>Home</button>
                {
                    this.state.users.map(user=> (
                        <div>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <button onClick={() => this.props.history.push(`/users/${user.id}`)}>Show user</button>
                        <hr/>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

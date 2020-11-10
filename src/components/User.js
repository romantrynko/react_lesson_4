import React from 'react'

export default class User extends React.Component {

    state = {
        user: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(user => this.setState({ user }))
    }

    render() {

        const {user} = this.state;

        return (
            <div>
                {
                    user && (
                        <div>
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                        </div>
                    )
                }
            </div>
        )

    }
}



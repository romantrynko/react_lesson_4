import React from 'react'

export default class Comment extends React.Component {

    state = {
        comment: null
    }

    goToHome = () => {
        this.props.history.push({
            pathname: '/'
        })
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch('https://jsonplaceholder.typicode.com/comments/' + id)
            .then(response => response.json())
            .then(comment => this.setState({ comment }))
    }

    render() {

        const {comment} = this.state;

        return (
            <div>
            <button class="btn btn-primary" onClick={this.goToHome}>Home</button>
                {
                    comment && (
                        <div class="alert alert-dark">
                            <h2>Name: {comment.name}</h2> <hr/>
                            <h3>Body: {comment.body}</h3>
                            <br/>
                        </div>
                    )
                }
            </div>
        )

    }
}



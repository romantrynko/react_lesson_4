import React, { Component } from 'react'

export default class Comments extends Component {

    state = {
        comments: []
    }

    goToHome = () => {
        this.props.history.push({
            pathname: '/'
        })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments?postId' + this.props.match.params.id)
        .then(response => response.json())
        .then(comments => this.setState({comments}))
    }


    render() {
        return (
            <div>
                <h2>Comments</h2>
                <button onClick={this.goToHome}>Home</button>
                {
                    this.state.comments.map(comment => (
                        <div>
                            <h3>id: {comment.id}</h3>
                            <h3>postId: {comment.postId}</h3>
                            <h3>{comment.name}</h3>
                            <button onClick={() => this.props.history.push(`/comments/${comment.id}`)}>Show comment</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}

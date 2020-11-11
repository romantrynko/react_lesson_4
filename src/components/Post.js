import React from 'react'

export default class Post extends React.Component {

    state = {
        post: null
    }

    componentDidMount() {
        const userId = this.props.match.params.userId;

        fetch('https://jsonplaceholder.typicode.com/posts/posts?userId=' + userId)
            .then(response => response.json())
            .then(post => this.setState({ post }))
    }

    render() {

        const {post} = this.state;

        return (
            <div>
                {
                    post && (
                        <div>Post
                            <h3>id: {post.id}</h3>
                            <h3>userId: {post.userId}</h3>
                            <h3>title: {post.title}</h3>
                        </div>
                    )
                }
            </div>
        )

    }
}



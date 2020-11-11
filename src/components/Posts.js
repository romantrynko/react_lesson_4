import React, { Component } from 'react'

export default class Posts extends Component {


    state = {
        posts: []
    }

    goToHome = () => {
        this.props.history.push({
            pathname: '/'
        })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(posts => this.setState({ posts }))
    };


    render() {
        // console.log("text", this.props);
        const userId = this.props.match.params.id;
        return (
            <div>
                <h2>Posts</h2>
                <button onClick={this.goToHome}>Home</button>
                
                {
                    this.state.posts.filter(post => (
                        post.userId === Number(userId)
                    )).map(post => (
                        <div>
                            <p>id: {post.id}</p>
                            <p>userId: {post.userId}</p>
                            <p>title: {post.title}</p>
                            <button onClick={() => this.props.history.push(`/posts/${post.id}/comments`)}>Show comments</button>
                            <hr/>
                           
                        </div>
                            ))
                        }

            </div>
        )

    }
}

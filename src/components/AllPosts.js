import React from 'react'

export default class AllPosts extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({ posts }))
    }

    render() {

        return (
            <div>
                {
                   this.state.posts.map(post => (
                       <div class="alert alert-primary"><h2>Post</h2>
                           <h3>id: {post.id}</h3> <hr/>
                           <h3>userId: {post.userId}</h3> <hr/>
                           <h3>title: {post.title}</h3>
                       </div>
                   )) 
            
                }
            </div>
        )

    }
}



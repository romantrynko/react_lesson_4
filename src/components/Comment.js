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
            <button onClick={this.goToHome}>Home</button>
                {
                    comment && (
                        <div>
                            <h2>{comment.name}</h2>
                            <h3>{comment.body}</h3>
                            <br/>
                        </div>
                    )
                }
            </div>
        )

    }
}



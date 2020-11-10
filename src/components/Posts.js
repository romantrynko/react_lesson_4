import React from 'react';
import {withRouter} from 'react-router';

const Posts = (props) => {
    return (
        <div>
            <h2>Posts</h2>

            <button onClick={() => props.history.push('/')}>Home</button>
        </div>
    )
}

export default withRouter(Posts)
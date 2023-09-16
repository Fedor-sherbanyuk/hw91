import React, { Component } from 'react';

class PostCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            this.setState({ posts: data });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="posts">
                <ul className="posts__list">
                    {posts.map(post => (
                        <li key={post.id} className="posts_single-post" data-post-id={post.id}>
                            <h3 className="posts__post-title">{post.title}</h3>
                            <p className="posts__post-description">{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PostCatalog;

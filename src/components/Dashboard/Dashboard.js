import React, {Component} from 'react';
import axios from 'axios';

class Dashboard extends Component {
    constructor () {
        super ()
        this.state = {
            userInput: '',
            showUserPosts: true,
            posts: []
        }
    }

    componentDidMount () {
        this.getPosts()
    }

    getPosts = () => {
        axios.get (`/api/posts?userposts=${this.state.showUserPosts}&search=${this.state.userInput}`)
        .then ((res) => {
            this.setState ({
                posts: res.data
            })
        })
        .catch (error => console.log(error))
    }
    
    handleChange = e => {
        this.setState ({
            userInput: e.target.value
        })
    }

    handleCheckBox = e => {
        this.setState ({
            showUserPosts: !this.state.showUserPosts
        })
    }

    render () {
        // console.log(this.state.posts)
        const postsMap = this.state.posts.map (post => {
            // console.log(post)
            // post.title, post.username, post.profile_pic
            return (
            <>
            <h3>{post.title}</h3>
            <p>by {post.username}</p>
            <img src={post.profile_pic} alt="post.username"/>
            </>)
        })
        return (
            <div>
                <input placeholder="Search by Title" type="text" value={this.state.title} onChange={e => this.handleChange (e)}/>
                <button>Search</button>
                <button>Reset</button>
                <p>Show My Posts:</p>
                <input type="checkbox" defaultChecked={this.state.showUserPosts} value={this.state.showUserPosts} onChange= {e => this.handleCheckBox (e)}/>
                {postsMap}
            </div>
        )
    }
}

export default Dashboard
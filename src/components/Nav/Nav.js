import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav (props) {
    console.log(props)
    return (
        <div>
            <img src="https://robohash.org/${username}.png?set=set4" alt={props.username}/>
            <p>{props.username}</p>
            <Link to ='/dashboard'>
                <button>Home</button>
            </Link>
            <Link to = '/new'>
                <button>New Post</button>
            </Link>
            <Link to = '/'>
                <button>Logout</button>
            </Link>
        </div>
    )
}

const mapStateToProps = reduxState => ({
    username: reduxState.username,
    pic: reduxState.pic
})

export default connect (mapStateToProps)(Nav)
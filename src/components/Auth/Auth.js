import React, {Component} from 'react';
import axios from 'axios';
import picture from './wink.png';
import {connect} from 'react-redux';
import {loginUser} from './../../ducks/reducer';

class Auth extends Component {
    constructor () {
        super ()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange (e) {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    register = e => {
        e.preventDefault()
        const {username, password} = this.state
        axios.post ('/auth/register', {username, password})
        .then (res => {
            this.props.loginUser (res.data.id, res.data.username, res.data.profile_pic)
            this.props.history.push ('/dashboard')
        })
        .catch (error => {
            alert ('Unable to register. Username or password invalid.')
        })
    }

    login = e => {
        const {username, password} = this.state
        axios.post('/auth/login', {username, password})
        .then (res => {
            this.props.loginUser (res.data.id, res.data.username, res.data.profile_pic)
            this.props.history.push ('/dashboard')
        })
        .catch (error => {
            alert ('Unable to login. Username or password invalid.')
        })
    }

    render () {
        const {username, password} = this.state
        return (
            <div className = 'auth-box-container'>
            <div className='auth-box'>
                <>
                <img src={picture} alt="winking logo"/>
                <h1>Helo</h1>
                <div className='input-container'>
                    <p>Username:</p>
                    <input className='input-box' name="username" value={username} onChange = {e => this.handleChange (e)}/>
                </div>
                <div className='input-container'>
                    <p>Password:</p>
                    <input className='input-box' name="password" value={password} onChange = {e => this.handleChange (e)}/>
                </div>
                <div className='button-container'>
                    <>
                    <button className='button1' onClick = {e => this.login(e)}>Login</button>
                    <button className='button1' onClick = {e => this.register(e)}>Register</button>
                    </>
                </div>
                </>
            </div>
            </div>
        )
    }
}

export default connect (null, {loginUser})(Auth)
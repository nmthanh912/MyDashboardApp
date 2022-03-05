// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {push} from 'connected-react-router'

// import * as actions from '../../store/actions'
// import { FormattedMessage } from 'react-intl';
// import {handleLoginApi} from '../../services/userService'

import picture from '../images/loginImage.png'
import './Login.scss'

export default function Login() {
    // handleOnChangeEmail = (event) => {
    //     this.setState({
    //         email: event.target.value,
    //     })
    // }

    // handleOnChangePassword = (event) => {
    //     this.setState({
    //         password: event.target.value,
    //     })
    // }

    // handleOnClickHidden = () => {
    //     this.setState({
    //         isHiddenPasswords: !this.state.isHiddenPasswords,
    //     })
    // }

    // handleOnClickLogin = async () => {
    //     this.setState({
    //         errMessage: '',
    //     })

    //     try {
    //         let data = await handleLoginApi(
    //             this.state.email,
    //             this.state.password
    //         )
    //         if (data && data.errCode !== 0) {
    //             this.setState({
    //                 errMessage: data.message,
    //             })
    //         }

    //         if (data && data.errCode === 0) {
    //             this.props.userLoginSuccess(data.user)
    //         }
    //     } catch (error) {
    //         if (error.response) {
    //             if (error.response.data) {
    //                 this.setState({
    //                     errMessage: error.response.data.message,
    //                 })
    //             }
    //         }
    //     }
    // }

    return (
        <div className='login-background'>
            <div className='login-container'>
                <div className='login-content row flex'>
                    <div className='login-image flex'>
                        <img src={picture} alt='loginPicture' />
                    </div>

                    <div className='login-right-content'>
                        <div className='col-12 login-text'>
                            Login to your account
                        </div>
                        <div className='col-12 form-group login-input'>
                            <div> Email: </div>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Enter your email...'
                                // value={this.state.email}
                                // onChange={(event) =>
                                //     this.handleOnChangeEmail(event)
                                // }
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <div> Password: </div>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Enter your password...'
                                // value={this.state.password}
                                // onChange={(event) =>
                                //     this.handleOnChangePassword(event)
                                // }
                            />
                        </div>
                        <div className='col-12 btn-fix'>
                            <button
                                className='login-btn'
                                // onClick={() => {
                                //     this.handleOnClickLogin()
                                // }}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

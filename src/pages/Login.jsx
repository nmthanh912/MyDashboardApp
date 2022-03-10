import {useContext, useEffect, useRef, useState} from 'react'
import AuthContext from '../context/AuthProvider'

import picture from '../images/loginImage.png'
import './Login.scss'

export default function Login() {
    const email = 'minhthanh@gmail.com'
    const password = '123456'

    const errRef = useRef()

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const [sucess, setSuccess] = useState(false)

    const {setAuth} = useContext(AuthContext)

    useEffect(() => {
        setErrMsg('')
    }, [inputEmail, inputPassword])

    const handleLogin = () => {
        if (!inputEmail || !inputPassword) {
            return setErrMsg('Missing input parameters!')
        } else if (inputEmail != email) {
            return setErrMsg('Wrong email! Please try again!')
        } else if (inputPassword != password) {
            return setErrMsg('Wrong password! Please try again!')
        } else {
            setInputEmail('')
            setInputPassword('')
            setSuccess(true)
        }
    }

    return (
        <div className='login-background'>
            <div className='login-container'>
                <div className='login-content row flex'>
                    <div className='login-image flex'>
                        <img src={picture} alt='loginPicture' />
                    </div>

                    <div className='login-right-content'>
                        <div className='col-12 login-text'>Login to your account</div>
                        <div className='col-12 form-group login-input'>
                            <div> Email: </div>
                            <input
                                require
                                type='email'
                                className='form-control'
                                placeholder='Enter your email...'
                                value={inputEmail}
                                onChange={(e) => setInputEmail(e.target.value)}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <div> Password: </div>
                            <input
                                require
                                type='password'
                                className='form-control'
                                placeholder='Enter your password...'
                                value={inputPassword}
                                onChange={(e) => setInputPassword(e.target.value)}
                            />
                        </div>
                        <div ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}>
                            {errMsg}
                        </div>
                        <div className='col-12 btn-fix'>
                            <button className='login-btn' onClick={handleLogin}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

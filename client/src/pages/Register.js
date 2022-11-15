import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { register } from '../redux/actions/authAction'
import GenderInputSelect from '../components/GenderSelect/GenderInputSelect'

const Register = () => {
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useNavigate()

    const initialState = { 
        fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'male'
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, password, cf_password } = userData

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(userData))
    }

    return (
        <div className="auth_page">
            <form onSubmit={handleSubmit}>
                <h2 className="text-uppercase text-center mb-4">Deepen</h2>

                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" className="form-control" id="fullname" name="fullname"
                    onChange={handleChangeInput} value={fullname}
                    style={{background: `${alert.fullname ? '#fd2d6a14' : ''}`}} />
                    
                    <small className="form-text text-danger">
                        {alert.fullname ? alert.fullname : ''}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" className="form-control" id="username" name="username"
                    onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')}
                    style={{background: `${alert.username ? '#fd2d6a14' : ''}`}} />
                    
                    <small className="form-text text-danger">
                        {alert.username ? alert.username : ''}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                    onChange={handleChangeInput} value={email}
                    style={{background: `${alert.email ? '#fd2d6a14' : ''}`}} />
                    
                    <small className="form-text text-danger">
                        {alert.email ? alert.email : ''}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>

                    <div className="pass">
                        
                        <input type={ typePass ? "text" : "password" } 
                        className="form-control" id="exampleInputPassword1"
                        onChange={handleChangeInput} value={password} name="password"
                        style={{background: `${alert.password ? '#fd2d6a14' : ''}`}} />

                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                    </div>

                    <small className="form-text text-danger">
                        {alert.password ? alert.password : ''}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="cf_password">Confirm Password</label>

                    <div className="pass">
                        
                        <input type={ typeCfPass ? "text" : "password" } 
                        className="form-control" id="cf_password"
                        onChange={handleChangeInput} value={cf_password} name="cf_password"
                        style={{background: `${alert.cf_password ? '#fd2d6a14' : ''}`}} />

                        <small onClick={() => setTypeCfPass(!typeCfPass)}>
                            {typeCfPass ? 'Hide' : 'Show'}
                        </small>
                    </div>

                    <small className="form-text text-danger">
                        {alert.cf_password ? alert.cf_password : ''}
                    </small>
                </div>

                <div >
                    <GenderInputSelect></GenderInputSelect>                    
                </div>
                
                <button type="submit" className="btn btn-dark w-100">
                    Register
                </button>

                <p className="my-2">
                    Already have an account? <Link to="/" style={{color: "crimson"}}>Login Now</Link>
                </p>
            </form>
        </div>
    )
}

export default Register

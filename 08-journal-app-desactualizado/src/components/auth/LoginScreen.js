import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login, startLoginEmailPassword, startLoginGoogle } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        email: 'michaelwilliamsj19@gmail.com',
        password:'123456'
    })

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
        // dispatch(login(12345, 'Michael'));
    }

    const handleLoginGoogle = () => {
        dispatch(startLoginGoogle());
    }

    const { loading } = useSelector( state => state.ui); //obtengo la property loading para saber si esta cargando o no.

    return (
    <>
        <h3 className="auth__title">Login</h3>

        <form onSubmit={handleLogin}>
            <input className="auth__input" type="text" placeholder="email" name="email" value={email} onChange={handleInputChange}/>
            <input className="auth__input" type="password" placeholder="password" name="password" value={password} onChange={handleInputChange} />

            <button className="btn btn-primary btn-block" type="submit" disabled = { loading }>Login</button>
            <hr />

            <div className="auth__social-networks">
                <p>Login with social network</p>
                
                <div className="google-btn" onClick = {handleLoginGoogle}>
                
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>

                <Link to="/auth/register" className="link mt-5">Create new account</Link>
            </div>

        </form>

    </>
  )
}

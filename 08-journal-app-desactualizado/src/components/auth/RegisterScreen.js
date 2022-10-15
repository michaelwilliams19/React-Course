import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPassword } from '../../actions/auth'

export const RegistrerScreen = () => {
  
  const dispatch = useDispatch();

  const { msgError } = useSelector( state => state.ui); //me devuelve la informacion de mis reducers. Yo desestructuro para obtener la prop que me interesa.

  const initialForm = {
    name: 'Michael',
    email: 'asddd@gmail.com',
    password: '123456',
    passwordConfirm: '123456',
  }

  const [formValues, handleInputChange, reset] = useForm(initialForm)

  const {name, email, password, passwordConfirm} = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid())
    {

    }

    dispatch(startRegisterWithEmailPassword(name, email, password));
  }

  const isFormValid = () => {

    if (name.trim().length === 0){
      const nameRequired = "El nombre es requerido"
      dispatch(setError(nameRequired));
      return false;
    }
    else if (!validator.isEmail(email))
    {
      const emailInvalid = "El Email no es valido"

      dispatch(setError(emailInvalid));
      return false;
    }
    else if (password !== passwordConfirm || password.length < 5){
      const passwordIncorrect = "Contraseña incorrecta"

      dispatch(setError(passwordIncorrect));
      return false;
    }

    dispatch(removeError());
    return true;
  }


  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit= {handleRegister} >

          { msgError != null && <div className="auth__alert-error">{msgError}</div> }

          <input className="auth__input" type="text" placeholder="Name" name="name" value={name} onChange={handleInputChange} />
          <input className="auth__input" type="text" placeholder="Email" name="email" value={email} onChange={handleInputChange}/>
          <input className="auth__input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
          <input className="auth__input" type="password" placeholder="Confirm password" name="passwordConfirm" value={passwordConfirm} onChange={handleInputChange} />

          <button className="btn btn-primary btn-block" type="submit">Register</button>
          <hr />

          <Link to="/auth/register" className="link mt-5">Already registered?</Link>
      </form>
    </>
  )
}

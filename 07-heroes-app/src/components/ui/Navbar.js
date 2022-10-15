import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {

    //tengo acceso a estas 2 propiedades ya que las inclui en HeroesApp.js
    const { user, dispatch} = useContext(AuthContext);
    const { name } = user;

    console.log(user, dispatch);

    const navigate = useNavigate();

    const handleLogout = () => {
        
        const action = {
            type: types.logout,
        }

        //Al pasarle esta accion con type.logout en mi authReducer hago la logica para que me pase la prop logged a false y me desloguee de mi app.
        dispatch(action);
        navigate("/login", { replace: true})
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link className="navbar-brand" to="/"> Asociaciones </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink className="nav-item nav-link" to="/marvel"> Marvel </NavLink>

                    <NavLink className="nav-item nav-link" to="/dc"> DC </NavLink>

                    <NavLink className="nav-item nav-link" to="/search"> Search </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">{name}</span>
                    <NavLink className="nav-item nav-link" to="/login" onClick={handleLogout}> Logout </NavLink>
                </ul>
            </div>
        </nav>
    )
}
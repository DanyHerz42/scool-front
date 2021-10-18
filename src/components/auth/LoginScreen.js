import React, { useContext } from 'react';
import logo from '../../assets/imgs/logo.png';
import letras from '../../assets/imgs/letras.png';
import { UseForm } from '../../hooks/useForm';
import { startLogin } from '../../services/auth';
// import EmailIcon from '@material-ui/icons/Email';
// import VpnKeyIcon from '@material-ui/icons/VpnKey';
import jwt_decode from 'jwt-decode'
import { types } from '../../types/types';
import { AuthContext } from '../../context/authContext';
import Swal from 'sweetalert2';


export const LoginScreen = ({history}) => {
    
    const {dispatch} = useContext(AuthContext);

    const initialForm = {
        email: '',
        password: ''
    };
    const [formLoginValues, handleLoginInputChange] = UseForm(initialForm);
    
    const {email, password} = formLoginValues;

    const handleLogin = async (e) => {
        e.preventDefault();
       const loginData = await startLogin(email, password);
       if(loginData.token) {
           localStorage.setItem('token', loginData.token);
           const {id_user, name_user, id_role} = jwt_decode(loginData.token).userFound[0];
           dispatch(login({
               id: id_user,
               name: name_user,
               rol: id_role,
               token: loginData.token
           }))
       } else {
           Swal.fire('Error', loginData.message, 'error');
       }
    }

    const login = (user) => ({
        type: types.authLogin,
        payload: user
    });


    return (
        <div className="login__container">
            <div className="login__container-form">
                <div className="login__container-form-title">
                    <h1>Inicia sesión en</h1>
                    <img src={logo}  alt="logo"/>
                    <img src={letras} alt="scool" />
                </div>
                
                <form className="login__container-form-body" onSubmit={handleLogin}>
                   
                    {/* <EmailIcon /> */}
                    {/* <VpnKeyIcon /> */}
                    <input type="email" name="email" placeholder="Correo" value={email} onChange={handleLoginInputChange} />
                    <input type="password" name="password" placeholder="Contraseña" value={password} onChange={handleLoginInputChange} />
                    <button>Ingresar</button>
                </form>
                <div className="login__container-form-recovery">
                    <p>¿Olvidaste tu contraseña? </p>
                    <a href="www.google.com">Recupérala</a>
                </div>
            </div>
            <div className="login__container-space">
                <div className="login__container-space-title">
                    <h1>Un solo lugar, varias formas de APRENDER</h1>
                </div>
                <div className="login__container-space-register">
                    <p>¿Aún no tienes una cuenta?</p>
                    <button onClick={() => history.push('/auth/register')}>Registrate</button>
                </div>
            </div>
        </div>
    )
}

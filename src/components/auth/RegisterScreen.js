import React, { useContext } from 'react';
import logo from '../../assets/imgs/logo.png';
import letras from '../../assets/imgs/letras.png';
import { UseForm } from '../../hooks/useForm';
import { startRegister } from '../../services/auth';
import { AuthContext } from '../../context/authContext';
import { types } from '../../types/types';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

export const RegisterScreen = ({ history }) => {


    const { dispatch } = useContext(AuthContext)

    const initialForm = {
        name: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        rol: 1
    };
    const [formRegisterValues, handleRegisterInputChange] = UseForm(initialForm);

    const { name, lastname, username, email, password, repeatPassword, rol } = formRegisterValues;

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!name || !lastname || !username || !email || !password || !repeatPassword) {
            Swal.fire('Error', 'Completa los campos', 'error');
        } else {
            const registerData = await startRegister(name, lastname, username, email, password, repeatPassword, rol);
            console.log(registerData);
            if (registerData.token) {
                localStorage.setItem('token', registerData.token);
               
               
                const { id_user, name_user } = jwt_decode(registerData.token).userFound[0];
               
                dispatch(login({
                    id: id_user,
                    name: name_user,
                    token: registerData.token
                }))
            } else {
                Swal.fire('Error', registerData.message, 'error');
            }
        }

    }

    const login = (user) => ({
        type: types.authLogin,
        payload: user
    });

    return (
        <div className="register__container">
            <div className="register__container-space">
                <div className="register__container-space-title">
                    <h1>Un solo lugar, varias formas de APRENDER</h1>
                </div>
                <div className="register__container-space-register">
                    <p>¿Ya tienes una cuenta?</p>
                    <button onClick={() => history.push('/auth/login')}>Inicia sesión</button>
                </div>
            </div>
            <div className="register__container-form">
                <div className="register__container-form-title">
                    <h1>Regístrate en</h1>
                    <img src={logo} alt="logo" />
                    <img src={letras} alt="scool" />
                </div>
                <form className="register__container-form-body" onSubmit={handleRegister}>
                    {/* <EmailIcon /> */}
                    {/* <VpnKeyIcon /> */}
                    <input name="name" type="text" value={name} placeholder="Nombre" onChange={handleRegisterInputChange} />
                    <input name="lastname" type="text" value={lastname} placeholder="Apellidos" onChange={handleRegisterInputChange} />
                    <input name="username" type="text" value={username} placeholder="Nombre de usuario" onChange={handleRegisterInputChange} />
                    <input name="email" type="email" value={email} placeholder="Correo" onChange={handleRegisterInputChange} />
                    <input name="password" type="password" value={password} placeholder="Contraseña" onChange={handleRegisterInputChange} />
                    <input name="repeatPassword" type="password" value={repeatPassword} placeholder="Repetir contraseña" onChange={handleRegisterInputChange} />
                    <select name="rol" value={rol} onChange={handleRegisterInputChange}>
                        <option value="1">Estudiante</option>
                        <option value="2">Docente</option>
                    </select>
                    <button>Ingresar</button>
                </form>
                <div className="register__container-form-recovery">
                    <p>¿Olvidaste tu contraseña? </p>
                    <a href="www.google.com">Recupérala</a>
                </div>
            </div>

        </div>
    )
}

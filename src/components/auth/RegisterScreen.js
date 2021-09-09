import React from 'react';
import logo from '../../assets/imgs/logo.png';
import letras from '../../assets/imgs/letras.png';

export const RegisterScreen = ({history}) => {
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
                <div className="register__container-form-body">
                    {/* <EmailIcon /> */}
                    {/* <VpnKeyIcon /> */}
                    <input type="email" placeholder="Correo" />
                    <input type="password" placeholder="Contraseña" />
                    <input type="password" placeholder="Repetir contraseña" />
                    <button>Ingresar</button>
                </div>
                <div className="register__container-form-recovery">
                    <p>¿Olvidaste tu contraseña? </p>
                    <a href="www.google.com">Recupérala</a>
                </div>
            </div>

        </div>
    )
}

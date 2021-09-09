import React from 'react';
import logo from '../../assets/imgs/logo.png';
import letras from '../../assets/imgs/letras.png';
// import EmailIcon from '@material-ui/icons/Email';
// import VpnKeyIcon from '@material-ui/icons/VpnKey';

export const LoginScreen = ({history}) => {
    
    return (
        <div className="login__container">
            <div className="login__container-form">
                <div className="login__container-form-title">
                    <h1>Inicia sesión en</h1>
                    <img src={logo}  alt="logo"/>
                    <img src={letras} alt="scool" />
                </div>
                <div className="login__container-form-body">
                    {/* <EmailIcon /> */}
                    {/* <VpnKeyIcon /> */}
                    <input type="email" placeholder="Correo" />
                    <input type="password" placeholder="Contraseña" />
                    <button>Ingresar</button>
                </div>
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

import React, { useContext } from 'react';
import { AuthContext } from '../../../context/authContext';


export const Profile = ({profileData, history}) => {

    const {user} = useContext(AuthContext);
    
    return (
        <div className="profile__container">
            <div className="profile__img-container">
                <div className="profile__logoBackground">
                    <img className="profile__logoProfile" src={`/profile/${profileData.image}`} alt="profile" />
                </div>
            </div>
            <span className="profile__name">{user.name.toUpperCase()}</span>
            <div className="profile__scool">
                <h2>Escuela</h2>
                <p>{profileData.name_org}</p>
                
            </div>
            <div className="profile__biography">
                <h2>Biografía</h2>
                <p>{profileData.biography}</p>
            </div>
            {/* <div className="profile__button">
                <button onClick={() => history.push('/profile/edit')}>Editar</button>
            </div> */}
        </div>
    )
}

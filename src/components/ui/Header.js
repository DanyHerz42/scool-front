import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/imgs/logo.png';
import Letras from '../../assets/imgs/letras.png';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AuthContext } from '../../context/authContext';
import { NavLink } from 'react-router-dom';
import {getProfileData} from '../../services/profile'

export const Header = ({title}) => {

    const {user} = useContext(AuthContext);
    const [imgProfile, setImageProfile] = useState('');

    const getImgProfile = async() => {
        const {getProfile} = await getProfileData();
        // console.log(getProfile[1].image);
        if (getProfile.length > 1) {
            setImageProfile(getProfile[1].image)
        } else {
            return;
        }
        
    }

    useEffect(() => {
        getImgProfile();
    }, [])

    return (
        <div className="header__container">
            <div className="header__title">
                {title}
            </div>
            <div className="header__logo">
                <img src={Logo} alt="logo" />
                <img src={Letras} alt="logo" />
            </div>
            <div className="header__container-imgs">
                
                <span>{user.name}</span>
               
                <NotificationsNoneIcon />
                <NavLink activeClassName="header__profile-active" to="/profile">
                    {imgProfile !== '' ? (
                        <div className="header__profile-container-img">
                            <img className="header__profile-img" src={`/profile/${imgProfile}`} alt="img profile" />
                        </div>
                    )
                        :
                        <AccountCircleIcon />
                    }
                </NavLink>
                
            </div>
        </div>
    )
}

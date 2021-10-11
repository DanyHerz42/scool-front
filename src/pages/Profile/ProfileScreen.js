import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext';
import { UiContext } from '../../context/uiContext';
import { getProfileData } from '../../services/profile';
import { Chat } from '../../components/ui/Chat';
import { Header } from '../../components/ui/Header';
import { Menu } from '../../components/ui/Menu';
import { MenuShort } from '../../components/ui/MenuShort';
import { MessageProfile } from '../../components/ui/profile/MessageProfile';
import { Profile } from '../../components/ui/profile/Profile';
import { Loading } from '../../components/ui/Loading';

export const ProfileScreen = ({history}) => {
    const {menu} = useContext(UiContext);
    const {user} = useContext(AuthContext);

    const [profile, setProfile] = useState({
        existProfile: '',
        loading: true,
        profileData: []
    });

    const {existProfile, loading, profileData} = profile;

    const getProfile = async() => {
        const {getProfile} = await getProfileData(user.token);
        
        setProfile({
            ...profile,
            existProfile: getProfile.length,
            profileData: getProfile[1],
            loading: false
        })
    }


    useEffect(() => {
        getProfile();
        return () => {
            setProfile({}); 
          };
    }, [])

    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
           
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <Header title="Mis clases"/>
            <Chat />
            <div className="container-info">
                {
                    loading ? <Loading />
                    : 
                    existProfile > 1 ? <Profile profileData={profileData} history={history} /> : <MessageProfile history={history} />
                    
                }
            </div>
        </div>
    )
}

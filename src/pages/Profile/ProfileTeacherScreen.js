import React, { useContext, useEffect, useState } from 'react'
import { Chat } from '../../components/ui/chat/Chat';
import { Header } from '../../components/ui/Header';
import { Loading } from '../../components/ui/Loading';
import { MenuTeacher } from '../../components/ui/MenuTeacher';
import { MenuTeacherShort } from '../../components/ui/MenuTeacherShort';
import { MessageProfile } from '../../components/ui/profile/MessageProfile';
import { Profile } from '../../components/ui/profile/Profile';
import { AuthContext } from '../../context/authContext';
import { UiContext } from '../../context/uiContext';
import { getProfileTeacherData } from '../../services/profile';

export const ProfileTeacherScreen = ({history}) => {


    const {menu} = useContext(UiContext);
    const {user} = useContext(AuthContext);

    const [profile, setProfile] = useState({
        existProfile: '',
        loading: true,
        profileData: []
    });

    const {existProfile, loading, profileData} = profile;

    
    const getProfile = async() => {
        const {getProfile} = await getProfileTeacherData(user.token);
        console.log(getProfile.length);
        setProfile({
            ...profile,
            existProfile: getProfile.length,
            profileData: getProfile[0],
            loading: false
        })
    }

    useEffect(() => {
        getProfile();
        return () => {
            setProfile({}); 
          };
    }, [])
console.log(profile);
    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
           
        {
            menu.menuOpen ? <MenuTeacher /> : <MenuTeacherShort />
        }
        <Header title="Mis clases"/>
        <Chat />
        <div className="container-profile">
            {
                loading ? <Loading />
                : 
                existProfile !== 0 ? <Profile profileData={profileData} history={history} /> : <MessageProfile history={history} />
                
            }
        </div>
    </div>
    )
}

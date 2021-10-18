import React from 'react'

export const ProfileTeacherScreen = () => {


    const {menu} = useContext(UiContext);
    const {user} = useContext(AuthContext);

    const [profile, setProfile] = useState({
        existProfile: '',
        loading: true,
        profileData: []
    });

    const {existProfile, loading, profileData} = profile;

    return (
        <div>
            
        </div>
    )
}

import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/authContext';
import { completeProfileTeacher, getOrgs } from '../../../services/profile';

import student1 from '../../../assets/profile/student1.png';
import student2 from '../../../assets/profile/student2.png';
import student3 from '../../../assets/profile/student3.png';
import student4 from '../../../assets/profile/student4.png';

export const CreateProfileTeacher = ({history}) => {

    const { user} = useContext(AuthContext);

    const [values, setValues] = useState({
        imgProfile: '',
        orgsProfile: [],
        biography: '',
        org: ''
    });
    let { imgProfile, orgsProfile, biography, org } = values;


    const handleImage = ({ target }) => {
        setValues({
            ...values,
            imgProfile: target.name
        })
    };
    const handleInputBiographyChange = ({ target }) => {
        setValues({
            ...values,
            biography: target.value
        })
    };
    const handleSelectOrgChange = ({ target }) => {
        
        setValues({
            ...values,
            org: target.value
        })
    }


    useEffect(() => {
      
        getProfile();
        return () => {
            setValues({});
        };
    }, []);

    const getProfile = async () => {
        
        const { orgs } = await getOrgs(user.token);
            if (orgs.length === 1) {
                setValues({
                    ...values,
                    orgsProfile: orgs,
                    org: orgs[0].name_org
                })
            } else {
                setValues({
                    ...values,
                    orgsProfile: orgs
                })
            } 
    };

    const handleCompleteInfo = async (e) => {
        e.preventDefault();
        if (!biography || !org || !imgProfile) {
            Swal.fire('Error', 'Complete los campos', 'error');
        } else {
            await completeProfileTeacher(biography, imgProfile+'.png', org);
            history.push('/profile');
        }
    }

    return (
        <div className="profile-edit__container">
        <div className="profile-edit__header-container">
            <h1>Personaliza tu perfil</h1>
        </div>
        <form onSubmit={handleCompleteInfo} className="profile-edit__container-form">
            <h2>Selecciona tu foto de perfil</h2>
            <div className="profile-edit__img">
                <img className={imgProfile === 'student1' ? 'profile-edit__img-active' : ''} name="student1" src={student1} alt="img student1" onClick={handleImage} />
                <img className={imgProfile === 'student2' ? 'profile-edit__img-active' : ''} name="student2" src={student2} alt="img student2" onClick={handleImage} />
                <img className={imgProfile === 'student3' ? 'profile-edit__img-active' : ''} name="student3" src={student3} alt="img student3" onClick={handleImage} />
                <img className={imgProfile === 'student4' ? 'profile-edit__img-active' : ''} name="student4" src={student4} alt="img student4" onClick={handleImage} />
            </div>
            <div className="profile-edit__scool">
                <h2>Selecciona tu escuela</h2>
                <select name="org" value={org} onChange={handleSelectOrgChange}>
                    {
                        orgsProfile.length > 1 ? (
                            orgsProfile.map(org => (
                                <option key={org.id_org} value={org.name_org}>{org.name_org}</option>
                            ))
                        )
                        : (
                            <>
                            <option value={org}>{org}</option>
                            </>
                        )
                    }
                    
                </select>

            </div>
            <div className="profile-edit__biography">
                <h2>Escribe tu biografía</h2>
                <textarea name="biography" value={biography} onChange={handleInputBiographyChange} />
            </div>
            <div>
                <div className="profile-edit__button">
                    <button>Guardar</button>
                </div>
            </div>
        </form>
    </div>
    )
}

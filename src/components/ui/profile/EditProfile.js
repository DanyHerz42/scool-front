import React, { useContext, useEffect, useState } from 'react';
import student1 from '../../../assets/profile/student1.png';
import student2 from '../../../assets/profile/student2.png';
import student3 from '../../../assets/profile/student3.png';
import student4 from '../../../assets/profile/student4.png';
import { AuthContext } from '../../../context/authContext';
import { completeProfile, getOrgs, getProfileData } from '../../../services/profile';

export const EditProfile = ({ history }) => {

    const { user } = useContext(AuthContext);

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
        console.log(target);
    }

    useEffect(() => {
        // getOrgsProfile();    
        getProfile();
        return () => {
            setValues({});
        };
    }, [])



    const getProfile = async () => {
        const { getProfile } = await getProfileData(user.token);
        const { orgs } = await getOrgs(user.token);
        console.log(orgs.length);
        if (getProfile.length > 1 && orgs) {
            // setValues({
            //     ...values,
            //     imgProfile: getProfile[1].image,
            //     biography: getProfile[1].biography,
            //     orgsProfile: orgs
            // })
            if (orgs.length === 1) {
                setValues({
                    ...values,
                    imgProfile: getProfile[1].image,
                    biography: getProfile[1].biography,
                    org: orgs[0].name_org
                })
            }
        } else if (getProfile.length > 1 || orgs) {
            // setValues({
            //     ...values,
            //     orgsProfile: orgs
            // })
            if (orgs.length === 1) {
                setValues({
                    ...values,
                    org: orgs[0].name_org
                })
            }
        }
        else {
            setValues({
                ...values
            })
        }
    };

    const handleCompleteInfo = async (e) => {
        e.preventDefault();
        const completeInfo = await completeProfile(biography, imgProfile+'.png', org);
        history.push('/profile');
    }

    console.log(org);






    return (
        <div className="profile-edit__container">
            <div className="profile-edit__header-container">
                <h1>Personaliza tu perfil</h1>
            </div>
            <form onSubmit={handleCompleteInfo} className="profile-edit__container-form">
                <h2>Selecciona tu foto de perfil</h2>
                <div className="profile-edit__img">
                    <img className={imgProfile.includes('student1') ? 'profile-edit__img-active' : ''} name="student1" src={student1} alt="img student1" onClick={handleImage} />
                    <img className={imgProfile.includes('student2') ? 'profile-edit__img-active' : ''} name="student2" src={student2} alt="img student2" onClick={handleImage} />
                    <img className={imgProfile.includes('student3') ? 'profile-edit__img-active' : ''} name="student3" src={student3} alt="img student3" onClick={handleImage} />
                    <img className={imgProfile.includes('student4') ? 'profile-edit__img-active' : ''} name="student4" src={student4} alt="img student4" onClick={handleImage} />
                </div>
                <div className="profile-edit__scool">
                    <h2>Selecciona tu escuela</h2>
                    <select name="org" onChange={handleSelectOrgChange}>
                        {
                            orgsProfile.length > 1 ? (
                                orgsProfile.map(org => (
                                    <option key={org.id_org}>{org.name_org}</option>
                                ))
                            )
                            : (
                                <option>{org}</option>
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

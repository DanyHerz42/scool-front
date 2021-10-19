import React, { useContext, useEffect, useState } from 'react'

import { Chat } from '../../components/ui/chat/Chat';
import { Header } from '../../components/ui/Header';

import { MenuTeacher } from '../../components/ui/MenuTeacher';
import { MenuTeacherShort } from '../../components/ui/MenuTeacherShort';
import { UiContext } from '../../context/uiContext';
import SearchIcon from '@material-ui/icons/Search';

import AddIcon from '@material-ui/icons/Add';
import { ClassesModal } from '../../components/ui/home/ClassesModal';
import { getClassByTeacher } from '../../services/classes';
import { ClassesMessage } from '../../components/ui/home/ClassesMessage';
import { Loading } from '../../components/ui/Loading';
import { ClassTeacher } from '../../components/ui/home/ClassTeacher';
import { ClassNotFound } from '../../components/ui/home/ClassNotFound';




export const HomeTeacherScreen = ({history}) => {
    const { menu } = useContext(UiContext);


    const [classesState, setClassesState] = useState({
        loading: true,
        classes: [],
        filter: '',
        classesCopy: [],
        notFound: false
    })

    const [modalOpen, setModalOpen] = useState(false);
    const { loading, classes, filter, classesCopy, notFound } = classesState;

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    const handleFilterChange = ({target}) => {
        setClassesState({
            ...classesState,
            filter: target.value
        })
    }

    const getClass = async () => {
        const { ok, classes } = await getClassByTeacher();
        if (ok == true) {
            setClassesState({
                ...classesState,
                loading: false,
                classes,
                // classesCopy: []
            })
        } else {
            setClassesState({
                ...classesState,
                loading: false,
                classes: [],
                // classesCopy: []
            })
        }
    }

    useEffect(() => {
        getClass();
        return () => {
            setClassesState({});
            // setModalOpen({});
        };
    }, [])

    const handleFilter = () => {
        if (filter != '') {

            const arrayClasses = classes.map(classe => Object.values(classe).toString())
            let result = arrayClasses.filter(classe => classe.includes(filter))
            let fin = classes.filter(classe => {
                let valor;
                result.forEach(element => {
                    if (element.includes(classe.name)) {
                        valor = true;
                    }
                });
                return valor;
            });
          
            if (fin.length > 0) {
                setClassesState({
                    ...classesState,
                    'classesCopy': fin,
                    // 'Status': true
                    notFound: false
                });
            } else {
                setClassesState({
                    ...classesState,
                    'classesCopy': [],
                    notFound: true
                })
            }
        } else {
            setClassesState({
                ...classesState,
                'classesCopy': [],
                // 'Status': true
            });

        }

    }

    console.log(classes);

   
    return (
        <div className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
            {
                menu.menuOpen ? <MenuTeacher /> : <MenuTeacherShort />
            }
            <Header title="Mis clases" />
            <Chat />
            <div className="container-home-teacher">
                <div className="classes__container-header">
                    <input name="filter" type="text" className="classes__search-input" placeholder="Buscar" onChange={handleFilterChange} onKeyUp={handleFilter} />
                    <button><SearchIcon /></button>
                </div>
                <div className="classes__container-teacher-class">
                    {
                        loading ? (
                            <div className="classes__container-loading">
                                <Loading />
                            </div>
                        )
                            :
                            classes.length == 0 ? (
                                <div className="classes__container">
                                    <ClassesMessage />
                                </div>
                            )
                                :

                                notFound ? (
                                    <div className="classes__container">
                                        <ClassNotFound />
                                    </div>
                                )
                                :
                                 classesCopy.length > 0 ? (
                                    (
                                        classesCopy.map((datacard) => (
                                            <div className="container-class" key={datacard.id_class}>
                                                <ClassTeacher
                                                    datacard={datacard}
                                                />
                                            </div>
                                        ))  
                                    )
                                ) :
                                (
                                    classes.map((datacard) => (
                                        <div className="container-class" key={datacard.id_class} onClick={() => history.push(`/class/${datacard.id_class}/workflow`)} >
                                            <ClassTeacher
                                                datacard={datacard}
                                            />
                                        </div>
                                    ))
                                ) 

                    }
                    <div className="classes__teacher-newClass" onClick={openModal}>
                        <AddIcon />
                    </div>
                    <ClassesModal modalOpen={modalOpen} closeModal={closeModal} />

                </div>
            </div>
        </div>
    )
}

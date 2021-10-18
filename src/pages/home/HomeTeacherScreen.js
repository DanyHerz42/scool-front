import React, {useContext, useEffect, useState} from 'react'

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




export const HomeTeacherScreen = () => {
    const {menu} = useContext(UiContext);


    const [classesState, setClassesState] = useState({
        loading: true,
        classes: []
    })
    
    const [modalOpen, setModalOpen] = useState(false);
    const {loading, classes} = classesState;

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    const getClass = async() => {
        const {ok, classes} = await getClassByTeacher();
        if (ok ==  true) {
            setClassesState({
                loading: false,
                classes
            })
        } else {
            setClassesState({
                loading: false,
                classes: []
            })
        }
    } 
    
    useEffect(() => {
        getClass();
        return () => {
            setClassesState({}); 
          };
    }, [])

    console.log(classes);
    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
            {
                menu.menuOpen ? <MenuTeacher /> : <MenuTeacherShort />
            }
            <Header title="Mis clases"/>
            <Chat />
            <div className="container-info">
                <div className="classes__container-header">
                    <input type="text" className="classes__search-input" placeholder="Buscar" />
                    <button><SearchIcon/></button>
                </div>
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
                    //     classes.map((datacard) => (
                    //         <div className="container-class" key={datacard.id_class}> 
                    //             <ClassTeacher
                    //            datacard={datacard}
                    //        />
                    //        </div>
                    //    ))
                    (
                        classes.map((datacard) => (
                            <div className="container-class" key={datacard.id_class}> 
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
    )
}

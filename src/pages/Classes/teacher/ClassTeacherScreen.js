import React, { useContext, useState } from 'react'
import { Chat } from '../../../components/ui/chat/Chat';
import { ClassCardTeacher } from '../../../components/ui/classes/ClassCardTeacher';
import { ClassModalActs } from '../../../components/ui/classes/ClassModalActs';
import { ClassWorkFlow } from '../../../components/ui/classes/ClassWorkFlow';
import { Header } from '../../../components/ui/Header';
import { MenuTeacher } from '../../../components/ui/MenuTeacher';
import { MenuTeacherShort } from '../../../components/ui/MenuTeacherShort';
import { UiContext } from '../../../context/uiContext';
import CreateIcon from '@material-ui/icons/Create';
import { useParams } from 'react-router';


export const ClassTeacherScreen = () => {
    const {menu} = useContext(UiContext);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const {id} = useParams();
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
           
            {
                menu.menuOpen ? <MenuTeacher /> : <MenuTeacherShort />
            }
            <Header title="Actividades"/>
            <Chat />
            <div className="container-class_teacher">
               
                <ClassCardTeacher />
                <ClassWorkFlow />
                <ClassModalActs isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} id={id} />
            </div>
            <div className="classes__teacher-newAct" onClick={() =>  setIsModalOpen(true)}>
                <CreateIcon />
            </div>
        </div>
    )
}

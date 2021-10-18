import React, {useState} from 'react'
// import { useForm } from "react-hook-form";

import { Modal } from '../../share/Modal';
import { ModalCode } from './ModalCode' 
import { ModalCodeSuccess } from './ModalCodeSuccess';

export const EnrollClass = () => {
    const [active, setActive] = useState(false);
    const [activeModal, setActiveModal] = useState({
        EnrollClass: false,
        SuccessClass: false
    });

    const toggle = () => {
        setActive(!active);
    }

    const openEnrrollClass = () => {
        setActiveModal({
            EnrollClass: true,
            SuccessClass: false
        })
        setActive(true)
    }

    const openSuccessClass = () => {
        setActiveModal({
            EnrollClass: false,
            SuccessClass: true
        })
        setActive(true)
    }


    return (
        <div>
            <button className="new_class" onClick={openEnrrollClass}
            >Nueva Clase</button>
            {/* <Modal active={active} toggle={toggle}> */}
            <Modal active={active} toggle={toggle}>
                {
                    activeModal.EnrollClass ? (<ModalCode openSuccessClass={openSuccessClass} 
                    />) : (<ModalCodeSuccess setActiveModal={setActiveModal}
                        setActive={setActive} />)
                }
            </Modal>
        </div>
        
    )
}
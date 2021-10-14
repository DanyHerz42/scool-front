import React, {useState} from 'react'
// import { useForm } from "react-hook-form";

import Modal from '../../share/Modal';
import { ModalCode } from './ModalCode' 
import { ModalCodeSuccess } from './ModalCodeSuccess';

export const EnrollClass = () => {
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active);
    }

    return (
        <div>
            <button className="new_class" onClick={toggle}
            >Nueva Clase</button>
            <Modal active={active} toggle={toggle}>
                {/* <ModalCode /> */}
                <ModalCodeSuccess />
            </Modal>
        </div>
        
    )
}
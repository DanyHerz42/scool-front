import React, {useState} from 'react'
// import { useForm } from "react-hook-form";
import Modal from '../../share/Modal';
// import { SearchOfClass } from './SearchOfClass'

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
                <h1>Modal Works!</h1>
                {/* <SearchOfClass></SearchOfClass> */}
            </Modal>
        </div>
        
    )
}
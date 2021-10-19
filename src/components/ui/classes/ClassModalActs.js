import React from 'react'
import Modal from 'react-modal';
import { useHistory } from 'react-router';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        // height: '800px',
        borderRadius: '10px',
        width: '400px'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    }
};

Modal.setAppElement('#root');

export const ClassModalActs = ({isModalOpen, handleCloseModal, id}) => {
    
    const history = useHistory();

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            style={customStyles}
        // className="modal"
        // overlayClassName="modal-fondo"
        >
            <div className="classes__container-chooseActs">
                <h1>Elige</h1>
                <hr />
                <div className="classes__container-buttons" >
                    <button onClick={() => history.push(`/class/${id}/createAct`)} className="classes__btnAct">Crear actividad</button>
                    <button onClick={() => history.push(`/class/${id}/createAnnouncement`)} className="classes__btnAnnouncement">Crear anuncio</button>
                    <button onClick={() => history.push(`/class/${id}/createCalendar`)} className="classes__btnCalendar">Agendar clase</button>
                </div>
            </div>
        </Modal>
    )
}

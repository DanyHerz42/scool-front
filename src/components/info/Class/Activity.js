import React from 'react'
import SendRoundedIcon from '@material-ui/icons/SendRounded';

import pdf from '../../../assets/profilePicture/foto1.jpg'

export const ClassCalendar = () => {

    return (
        <>
            <div className="head_containerInfoOFClass">
                <p className="title_sectionClass">Flujo de trabajo</p>
                <p>Actividad 1</p>
            </div>
            <div className="containerActCompleta">
                <div>
                    <p>Realizar los ejercicios que se adjuntan en
                        esta asignación, subir en .docx.</p>
                </div>
                <div className="docContainer">
                    <img className="imgPdf" src={pdf} alt="PDF"/>
                    <p>Ejercicios.pdf</p>
                </div>
                <hr/>
                <div>
                    Arrastre o seleccione archivos
                </div>
                <div>
                    <form>
                        <input className="input_Modal" placeholder="Añadir comentario"
                            name="codeClass"/>
                        <button type="primary">
                            <SendRoundedIcon
                                color="secondary"
                                fontSize="large"
                            />
                        </button>
                    </form>
                    
                </div>
            </div>
            
        </>
    )
}

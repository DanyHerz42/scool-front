import React from 'react'
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';

import file from '../../../assets/imgs/file.png'
import { DragArea } from './DragArea';

const urlBack = "https://scool-server.herokuapp.com"

export const Activity = () => {
    const location = useLocation();
    const History = useHistory();
    const { id } = useParams();

    const datacard = location.state.datacard
    // console.log(data.id_homework);
    const sendHomeW = () => {
        History.push({
            pathname: `/clase/${id}/actividadSend/${datacard.id_homework}`,
            state: {
                datacard
            },
        });
    }

    return (
        <>
            <div className="head_containerInfoOFClass">
                <p className="title_sectionClass">Flujo de trabajo</p>
                    <ChevronRightIcon 
                        fontSize="large"
                    />
                <p className="noActivity">{datacard.title}</p>
            </div>
            <div className="containerActCompleta containerAct">
                <div className="head_containerAct">
                    <div className="name">
                        <p>{datacard.title}</p>
                    </div>
                    <div className="nameActivity">
                        <p>{datacard.subtitle}</p>
                    </div>
                    <div className="periodo">
                        <p>P{datacard.id_period}</p>
                    </div>
                </div>
                <div className="bodyComplete body_containerAct">
                    <p>{datacard.body_text}</p>
                </div>
                <div className="food_containerAct">
                    {datacard.filesAttached.map((archivo) => (
                        <>
                            <img className="imgPdf" href="" src={file} alt="File"/>
                            <a className="fileStyle" href={`${urlBack}${archivo.url}`} >
                                {archivo.filename}</a>
                        </>
                    ))}
                </div>
                <hr className="dividor"/>
                <div className="uploadFileContainter">
                    <DragArea />
                </div>
                <div className="Container_btnEnviarHw">
                    <button type="primary" className="btnEnviarHw btnAcept_modal" onClick={ ()=>sendHomeW() }>
                        Entregar actividad
                    </button>
                </div>
                <div className="containerComentario">
                    <form>
                        <input className="inputTarea input_Modal" placeholder="Añadir comentario"
                            name="codeClass"/>
                        <button className="sendHw" type="primary">
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

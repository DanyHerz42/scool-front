import React from 'react'
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useLocation } from 'react-router-dom';

import file from '../../../assets/imgs/file.png'
// import { DragArea } from './DragArea';

const urlBack = "https://scool-server.herokuapp.com"

export const ActivityPost = () => {
    const location = useLocation();
    const data = location.state.datacard
    console.log(data);

    return (
        <>
            <div className="head_containerInfoOFClass">
                <p className="title_sectionClass">Flujo de trabajo</p>
                    <ChevronRightIcon 
                        fontSize="large"
                    />
                <p className="noActivity">{data.title}</p>
            </div>
            <div className="containerAnnounCompleta containerAct">
                <div className="head_containerAct">
                    <div className="namePost">
                            <p>{data.title}</p>
                    </div>
                    <div className="nameActivity">
                            <p>{data.subtitle}</p>
                    </div>
                    <div className="periodo">
                        <p>P{data.id_period}</p>
                    </div>
                </div>
                <div className="bodyComplete body_containerAct">
                    <p>{data.body_text}</p>
                </div>
                <div className="food_containerAct">
                    {data.filesAttached.map((archivo) => (
                        <>
                            <img className="imgPdf" href="" src={file} alt="File"/>
                            <a className="fileStyle" href={`${urlBack}${archivo.url}`} >
                                {archivo.filename}</a>
                        </>
                    ))}
                </div>
                <hr className="dividor"/>
                {/* <div className="uploadFileContainter">
                    <DragArea />
                </div>
                <div className="Container_btnEnviarHw">
                    <button type="primary" className="btnEnviarHw btnAcept_modal" onClick="">
                        Entregar actividad
                    </button>
                </div> */}
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

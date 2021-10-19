import React from 'react'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';

import file from '../../../assets/imgs/file.png'

export const HomeWork = (props) => {
    const { datacard } = props;
    const { filesAttached } = datacard;

    const History = useHistory();
    const { id } = useParams();

    const id_homework = datacard.id_homework;
    const urlBack = "https://scool-server.herokuapp.com"

    const openHw = () => {
        // History.push("/detallesDeClase")
        History.push({
            pathname: `/clase/${id}/actividad/${id_homework}`,
            state: {
                datacard
            },
        });
    }
    
    return (
        <>
            <div className="containerAct">
                <div className="head_containerAct" onClick={ ()=>openHw() }>
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
                <div className="body_containerAct" onClick={ ()=>openHw() }>
                    <p>{datacard.body_text}</p>
                </div>
                <div className="food_containerAct">
                    {filesAttached.map((archivo) => (
                        <>
                            <img className="imgPdf" href={archivo.url} src={file} alt="File"/>
                            <a className="fileStyle" href={`${urlBack}${archivo.url}`} >{archivo.filename}</a>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

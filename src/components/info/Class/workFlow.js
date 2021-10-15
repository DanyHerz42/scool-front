import React from 'react'

import pdf from '../../../assets/imgs/pdf.PNG'

export const WorkFlow = () => {

    return (
        <>
            <div className="head_containerInfoOFClass">
                <p className="title_sectionClass">Flujo de trabajo</p>
            </div>
            <div className="containerAct">
                <div className="head_containerAct">
                    <div className="name">
                        <p>Actividad 1</p>
                    </div>
                    <div className="nameActivity">
                        <p>Ejercicios de Diagnostico</p>
                    </div>
                </div>
                <div className="body_containerAct">
                    <p>Realizar los siguiente ejercicios que se adjutan
                        en esta asignación, subir en .doc.</p>
                </div>
                <div className="food_containerAct">
                    <img className="imgPdf" src={pdf} alt="PDF"/>
                    <p>Ejercicios.pdf</p>
                </div>
            </div>

            <div className="containerAct">
                <div className="head_containerAct">
                    <div className="namePost">
                        <p>Anuncio 1</p>
                    </div>
                    <div className="nameActivity">
                        <p>Bienvenida al curso</p>
                    </div>
                </div>
                <div className="body_containerAct">
                    <p>Bienvenidos estudiantes a este nuevo curso de Cálculo 2021.
                        Por favor revisar el plan de trabajo</p>
                </div>
                <div className="food_containerAct">
                    <img className="imgPdf" src={pdf} alt="PDF"/>
                    <p>Plan-de-trabajo.pdf</p>
                </div>
            </div>
        </>
    )
}

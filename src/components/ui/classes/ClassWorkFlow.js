import React from 'react';
import LogoPdf from '../../../assets/imgs/pdfLogo.png'
// import CreateIcon from '@material-ui/icons/Create';

export const ClassWorkFlow = () => {
    return (
        <div className="class__container-workflow">
            <div className="classWorkflow__header">
                <h2>Flujo de trabajo</h2>
            </div>
            <div className="classWorkflow__body">

                <div className="classWorkflow__card">
                    <div className="classWorkflow__card-header">
                        <div className="classWorkflow__header-color">
                            <h2>Actividad 1</h2>
                        </div>
                        <div className="classWorkflow__header-name">
                            <h2>Programación básica</h2>
                        </div>
                    </div>
                    <div className="classWorkflow__card-body">
                        <p>Realizar las actividades que se mencionan en la asignación.</p>
                        <div className="classWorkflow__file">
                            <img src={LogoPdf} alt="logo pdf" />
                            <span>Ejemplo1.pdf</span>
                        </div>
                        <button>Ver</button>
                    </div>
                </div>
                <div className="classWorkflow__card">
                    <div className="classWorkflow__card-header">
                        <div className="classWorkflow__header-color">
                            <h2>Actividad 2</h2>
                        </div>
                        <div className="classWorkflow__header-name">
                            <h2>Estructura de datos</h2>
                        </div>
                    </div>
                    <div className="classWorkflow__card-body">
                        <p>Realizar las actividades que se mencionan en la asignación.</p>
                        <div className="classWorkflow__file">
                            <img src={LogoPdf} alt="logo pdf" />
                            <span>Ejemplo1.pdf</span>
                        </div>
                        <button>Ver</button>
                    </div>
                </div>
                
            </div>
            {/* <div className="classes__teacher-newAct">
                    <CreateIcon />
            </div> */}
        </div>
    )
}

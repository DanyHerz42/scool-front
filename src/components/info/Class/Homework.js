import React from 'react'

import file from '../../../assets/imgs/file.png'

export const HomeWork = (props) => {
    const { datacard } = props;
    const { filesAttached } = datacard;
    const urlBack = "https://scool-server.herokuapp.com"
    
    return (
        <>
            <div className="containerAct">
                <div className="head_containerAct">
                    <div className="name">
                    <p>{datacard.title}</p>
                    </div>
                    <div className="nameActivity">
                    <p>{datacard.subtitle}</p>
                    </div>
                </div>
                <div className="body_containerAct">
                    <p>{datacard.body_text}</p>
                </div>
                <div className="food_containerAct">
                    {
                        filesAttached.map((archivo) => (
                            <>
                                <img className="imgPdf" href={archivo.url} src={file} alt="File"/>
                                <a className="fileStyle" href={`${urlBack}${archivo.url}`} >{archivo.filename}</a>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

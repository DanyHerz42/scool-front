import React from 'react'

export const IntegrantsRow = (props) => {
    const { datacard } = props;

    return (
        <>
            <div className="containerIntegrant">
                <div className="containerFlex">
                    <img className="picIntegrant" src={datacard.image} alt="Integrant"/>
                    <div className="containerFlexJustCenter">
                        <p className="name_integrant">{datacard.name_user} {datacard.lastname}</p>
                    </div>
                </div>
                <hr/>
            </div>
        </>
    )
}

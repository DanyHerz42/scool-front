import React from 'react'

export const NameStudent = (props) => {
    const { name, clearName } = props

    return (
        <>
            <div className="nameOfRaffle">
                <div className="contentName">
                    <p>{name}</p>
                </div>
            </div>
            <div className="btnClearSort">
                <button onClick={clearName}>Limpiar</button>
            </div>
        </>
    )
}


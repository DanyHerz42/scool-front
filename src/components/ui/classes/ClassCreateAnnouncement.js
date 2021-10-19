import React from 'react'

export const ClassCreateAnnouncement = () => {
    return (
        <div className="class_container-createAnnouncement">
            <div className="classCreateAnnouncement__header">
                <h2>Crear anuncio</h2>
            </div>
            <div className="classCreateAnnouncement__body">
                <div className="classCreateAnnouncement__cardForm">
                    <form className="classCreateAnnouncement__formAnnouncement">
                        <h2>Anuncio</h2>
                        <label>Título del anuncio</label>
                        <input type="text" name="title" placeholder="Título" />
                        <label>Tema del anuncio</label>
                        <input type="text" name="subtitle" placeholder="Tema" />
                        <label>Mensaje del anuncio</label>
                        <textarea  placeholder="Indicaciones"/>
                        <input type="file" />
                        <button>Crear</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

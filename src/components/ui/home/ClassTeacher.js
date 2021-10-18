import React from 'react'



export const ClassTeacher = (props) => {

    const { datacard } = props;

    return (
        <>
            <div className="container-class-head">
                <div className="carpeta">
                    <svg className="icon--plus">
                        <polygon fill={datacard.color}
                            points="40 85, 40 30, 70 30, 90 45, 240 45, 240 85" />
                        <polygon fill="#A9D9FF"
                            points="53 78, 190 25, 228 78" />
                        <polygon fill={datacard.color}
                            points="38 185, 25 65, 257 65, 242 185" />
                        <text className="nameProfe" x="60" y="125" fill="white">
                            Prof. {datacard.teacher_username}
                        </text>
                    </svg>
                    {/* < img className="fotoPerfil-profe"
                    src={datacard.Profile_picture} alt="fotoPerfil"/> */}
                </div>
            </div>
            <div className="container-class-body">
                <p className="name-class">{datacard.name}</p>
                <p>Próxima clase:</p>
                <p className="nextClass">{datacard.next_class}</p>
            </div>
        </>
    )
}
import React, { useState, useEffect } from 'react'
import { SearchOfClass } from '../../info/SearchOfClass'

export const Autodidact = () => {
    return (
        <>
            <div className="head-info">
                <p className="title_sectionClass">Video-cursos extra clase</p>
                <SearchOfClass/>
            </div>
            <div className="headAutodi head-info">
                <p className="headAutoLeft title_sectionClass">Disponibles sin pago</p>
            </div>
            <div className="container-classes">
                <div className="container-classAutodi">
                    <div className="container-class-head">
                        <div className="carpeta">
                            <svg className="icon--plus">
                                <polygon fill="#3cb3e2"
                                    points="40 85, 40 30, 70 30, 90 45, 240 45, 240 85" />
                                <polygon fill="#A9D9FF"
                                    points="53 78, 190 25, 228 78" />
                                <polygon fill="#3cb3e2"
                                    points="38 185, 25 65, 257 65, 242 185" />
                                <text className="nameProfe" x="60" y="125" fill="white">
                                    Prof. Solari
                                </text>
                            </svg>
                        </div>
                    </div>
                    <div className="container-class-body">
                        <p className="name-class">React Native & Firebase</p>
                        <p className="nextClass">300 estudiantes inscritos</p>
                    </div>
                    <div className="container-class-footer">
                        <button>Inscribirme</button>
                    </div>
                </div>
                <div className="container-classAutodi">
                    <div className="container-class-head">
                        <div className="carpeta">
                            <svg className="icon--plus">
                                <polygon fill="#b92323"
                                    points="40 85, 40 30, 70 30, 90 45, 240 45, 240 85" />
                                <polygon fill="#A9D9FF"
                                    points="53 78, 190 25, 228 78" />
                                <polygon fill="#b92323"
                                    points="38 185, 25 65, 257 65, 242 185" />
                                <text className="nameProfe" x="60" y="125" fill="white">
                                    Prof. Simeone
                                </text>
                            </svg>
                        </div>
                    </div>
                    <div className="container-class-body">
                        <p className="name-class">Flutter</p>
                        <p className="nextClass">350 estudiantes inscritos</p>
                    </div>
                    <div className="container-class-footer">
                        <button>Inscribirme</button>
                    </div>
                </div>
                <div className="container-classAutodi">
                    <div className="container-class-head">
                        <div className="carpeta">
                            <svg className="icon--plus">
                                <polygon fill="#a1cf4a"
                                    points="40 85, 40 30, 70 30, 90 45, 240 45, 240 85" />
                                <polygon fill="#A9D9FF"
                                    points="53 78, 190 25, 228 78" />
                                <polygon fill="#a1cf4a"
                                    points="38 185, 25 65, 257 65, 242 185" />
                                <text className="nameProfe" x="60" y="125" fill="white">
                                    Prof. Pedro
                                </text>
                            </svg>
                        </div>
                    </div>
                    <div className="container-class-body">
                        <p className="name-class">Kotlin</p>
                        <p className="nextClass">350 estudiantes inscritos</p>
                    </div>
                    <div className="container-class-footer">
                        <button>Inscribirme</button>
                    </div>
                </div>
            </div>
        </>
    )
}
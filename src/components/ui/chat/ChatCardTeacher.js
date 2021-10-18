import React, { useState } from 'react';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import 'animate.css';
const data = [
    {
        id: 1,
        name: 'Jona',
        org: "udc",
        img: 'student1.png'
    },
    {
        id: 2,
        name: 'ili',
        org: "isenco",
        img: 'student2.png'
    },
    {
        id: 3,
        name: 'rami',
        org: "tec",
        img: 'student4.png'
    },
    {
        id: 4,
        name: 'Yesenia',
        org: "tec",
        img: 'student3.png'
    }
];

export const ChatCardTeacher = ({setShowChat}) => {

    const [contador, setContador] = useState(0)
    const [animation, setAnimation] = useState(false)

    const handleAdd = () => {

        if (contador < data.length - 1) {
            setAnimation(true)
            setContador(contador + 1)
            setShowChat(false)


        } else {
            return
        }
    }
    const handleSubstract = () => {
        if (contador > 0) {
            setAnimation(true)
            setContador(contador - 1)
            setShowChat(false)
        } else {
            return
        }
    }

    return (
        <div className={`chat__container-card ${animation ? 'animate__animated animate__fadeInRightBig' : ''}`} onAnimationEnd={() => setAnimation(false)}>
            <div className="chat__card-header">
                <KeyboardArrowLeftIcon onClick={handleSubstract} />
                <div className="chat__backgorund-imgProfile">
                    <img className="" src={`/profile/${data.at(contador).img}`} alt="img profile" />
                </div>
                <KeyboardArrowRightIcon onClick={handleAdd} />
            </div>
            <div className="chat__card-body">
                <p>Estudiante</p>
                <span>{data.at(contador).name}</span>
                <button onClick={() => setShowChat(true)}>Iniciar conversación</button>
            </div>
        </div>
    )
}

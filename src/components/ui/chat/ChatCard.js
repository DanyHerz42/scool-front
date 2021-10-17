import React, { useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import 'animate.css';
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
export const ChatCard = () => {

   
    const [contador, setContador] = useState(0)
    const [animation, setAnimation] = useState(false)

    // useEffect(() => {
    //     setAnimation(true)
    //     return () => {
    //         setAnimation(false)
    //     }
    // }, [contador])
    const plus = () => {
       
        if(contador < data.length-1) {
            setAnimation(true)
            setContador(contador+1)
            
            
            
        } else {
            return
        }
    }
    const restar = () => {
        if(contador > 0) {
            setAnimation(true)
            setContador(contador-1)
        } else {
            return
        }
    }



    return (
        <div  className={`chat__container-card ${animation ? 'animate__animated animate__fadeInRightBig' : ''}` } onAnimationEnd={() => setAnimation(false)}>
            <div className="chat__card-header">
                <KeyboardArrowLeftIcon onClick={restar} />
                <div className="chat__backgorund-imgProfile">
                    <img className="" src={`/profile/${data.at(contador).img}`} alt="img profile"/>
                </div>
                <KeyboardArrowRightIcon onClick={plus} />
            </div>
            <div className="chat__card-body">
                <p>Profesor</p>
                <span>{data.at(contador).name}</span>
                <button>Iniciar conversación</button>
            </div>
        </div>
    )
}

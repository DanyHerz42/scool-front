import React, { useContext, useState, useEffect } from 'react'
import { UiContext } from '../context/uiContext'
import { Menu } from './ui/Menu'
import { MenuShort } from './ui/MenuShort';
import { Header } from './ui/Header';
import { Chat } from './ui/Chat';

import { AuthContext } from '../context/authContext';
import { getClassesStudent } from '../services/class'

import { ClassStudent } from './info/ClassStudent';
import { SearchOfClass } from './info/SearchOfClass';
import { EnrollClass } from './info/EnrollClass';


export const HomeScreen = () => {
    const {menu} = useContext(UiContext);

    const { user } = useContext(AuthContext);

    const [classes, setClasses] = useState(
        {
            loading: true,
            classes: []
        }
    );

    const getClasses = async () => {
        const { classes } = await getClassesStudent();
        // console.log(classes);
        setClasses({
            classes: classes

        })
        
    }

    useEffect(() => {
        getClasses();
        return () => {
            setClasses({});
        };
    }, [])

    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <Header title="Mis clases"/>
            <Chat />
            <div className="container-info">
                <div className="head-info">
                    <EnrollClass />
                    <SearchOfClass/>
                </div>
                <div className="container-classes">
                    {classes.classes.map((datacard) => (
                        // console.log(datacard)
                        <ClassStudent
                            datacard={datacard}
                            // key={datacard.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

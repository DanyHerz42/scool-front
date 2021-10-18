import React, { useState, useEffect } from 'react'

import { getClassesStudent } from '../services/class'
import { ClassStudent } from './info/ClassStudent';
import { SearchOfClass } from './info/SearchOfClass';
import { EnrollClass } from './info/EnrollClass'

export const HomeScreen = () => {
    const [classes, setClasses] = useState(
        {
            loading: true,
            classes: []
        }
    );

    const getClasses = async () => {
        const { classes } = await getClassesStudent();
        console.log(classes);
        setClasses({
            classes: classes
        })
    };

    useEffect(() => {
        getClasses();
        return () => {
            setClasses({});
        };
    }, []);
    // console.log(classes.classes[1]["name"]);
    // console.log(classes);

    return (
        <>
            <div className="head-info">
                <EnrollClass />
                <SearchOfClass/>
            </div>
            <div className="container-classes">
                {classes.classes.map((datacard) => (
                    // console.log(datacard)
                    <ClassStudent
                        datacard={datacard}
                        key={datacard.id_class}
                    />
                ))}
            </div>
        </>
    )
}
import React from 'react'
import { Announcement } from './Announcement';
import { HomeWork } from './Homework';

export const Period = (props) => {
    const { datacard } = props
    console.log(datacard);

    return (
        <>
            <details>
                <summary className="separadorPeriod">
                    {datacard.period_name}
                </summary>
                <div>
                    {datacard.workflow.map((datacard) => (
                        datacard.type_ === "ANNOUNCEMENT" ? (<Announcement
                            datacard={datacard} />) : (<HomeWork datacard={datacard} />)
                    ))}
                </div>
            </details>
        </>
    )
}


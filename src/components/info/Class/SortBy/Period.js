import React from 'react'
import { Announcement } from './Announcement';
import { HomeWork } from './Homework';

export const Period = (props) => {
    const { datacard } = props
    console.log(datacard);

    const hola = () => {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }

    hola()

    return (
        <>
            <div className="separadorPeriod">
                {/* <button class="accordion ">Section 1</button> */}
                <p>{datacard.period_name}</p>
            </div>
            {/* <div class="panel"> */}
            <div>
                {datacard.workflow.map((datacard) => (
                    datacard.type_ === "ANNOUNCEMENT" ? (<Announcement
                        datacard={datacard} />) : (<HomeWork datacard={datacard} />)
                ))}
            </div>

        </>
    )
}
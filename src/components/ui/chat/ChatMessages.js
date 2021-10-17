import React from 'react'
import SendIcon from '@material-ui/icons/Send';
export const ChatMessages = () => {
    return (
        <div className="chat__container-chatMessages">
            <div className="chat__container-ContactActive">
                <div className="chat-container-imgContact">
                    <img src={`/profile/student1.png`} alt="img profile" />
                </div>
                <span>Marcos</span>
            </div>
            <div className="chat__container-messages">
                <div className="chat__mesagge-contact">
                    <p>Buenas tardes</p>
                    <span>1:30 P.M</span>
                </div>
                <div className="chat__mesagge-me">
                    <p>Buenas tardes </p>
                    <span>1:40: P.M</span>
                </div>
                <div className="chat__mesagge-contact">
                    <p>La clase de mañana será a las 10:00 AM</p>
                    <span>1:43: PM</span>
                </div>
                <div className="chat__mesagge-me">
                    <p>Go easy on mе, baby
                        I was still a child
                        Didn't get the chance to

                        Feel thе world around me
                        Had no time to choose what I chose to do
                        So go easy on me

                        I had good intentions
                        And the highest hopes
                        But I know right now
                        It probably doesn't even show

                        Go easy on me, baby
                        I was still a child
                        I didn't get the chance to

                        Letra: https://letrasbd.com/adele/easy-on-me/</p>
                    <span>1:43: PM</span>
                </div>
                <div className="chat__mesagge-contact">
                    <p>Buenas tardes</p>
                    <span>1:30 P.M</span>
                </div>
                <div className="chat__mesagge-me">
                    <p>Buenas tardes </p>
                    <span>1:40: P.M</span>
                </div>
                <div className="chat__mesagge-contact">
                    <p>La clase de mañana será a las 10:00 AM</p>
                    <span>1:43: PM</span>
                </div>
                <div className="chat__mesagge-me">
                    <p>Go easy on mе, baby
                        I was still a child
                        Didn't get the chance to

                        Feel thе world around me
                        Had no time to choose what I chose to do
                        So go easy on me

                        I had good intentions
                        And the highest hopes
                        But I know right now
                        It probably doesn't even show

                        Go easy on me, baby
                        I was still a child
                        I didn't get the chance to

                        Letra: https://letrasbd.com/adele/easy-on-me/</p>
                    <span>1:43: PM</span>
                </div>
                <div className="chat__mesagge-contact">
                    <p>Buenas tardes</p>
                    <span>1:30 P.M</span>
                </div>
                <div className="chat__mesagge-me">
                    <p>Buenas tardes </p>
                    <span>1:40: P.M</span>
                </div>
                <div className="chat__mesagge-contact">
                    <p>La clase de mañana será a las 10:00 AM</p>
                    <span>1:43: PM</span>
                </div>
                <div className="chat__mesagge-me">
                    <p>Go easy on mе, baby
                        I was still a child
                        Didn't get the chance to

                        Feel thе world around me
                        Had no time to choose what I chose to do
                        So go easy on me

                        I had good intentions
                        And the highest hopes
                        But I know right now
                        It probably doesn't even show

                        Go easy on me, baby
                        I was still a child
                        I didn't get the chance to

                        Letra: https://letrasbd.com/adele/easy-on-me/</p>
                    <span>1:43: PM</span>
                </div>
            </div>
            <div className="chat__container-write">
                <input name="message" type="text" placeholder="Escribe tu mensaje" />
                <SendIcon />
            </div>
        </div>
    )
}

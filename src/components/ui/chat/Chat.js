import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CommentIcon from '@material-ui/icons/Comment';

export const Chat = () => {
    return (
        <div className="chat__container">
            <CommentIcon className="chat__icon-msg"/>
            <div className="chat__img-profile">
                <img src="/profile/student1.png" alt="img profile"/>
            </div>
            <div className="chat__img-profile">
                <img src="/profile/student2.png" alt="img profile"/>
            </div>
            <AccountCircleIcon />
            <div className="chat__img-profile">
                <img src="/profile/student3.png" alt="img profile"/>
            </div>
            <AccountCircleIcon />
            <div className="chat__img-profile">
                <img src="/profile/student4.png" alt="img profile"/>
            </div>
            <AccountCircleIcon />
            <AccountCircleIcon />
            <AccountCircleIcon />
            <AccountCircleIcon />
         
        
        </div>
    )
}

import React from 'react'
import Portal from '../Portal'

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export const Modal = ({ children, toggle, active} ) => {
        // const { children, toggle, active} = this.props;

        return (
            <Portal>
                {active && (
                    <div className="wrapper">
                        <div className="window">
                            <button className="closeBtn" onClick={toggle}>
                                <HighlightOffIcon
                                    color="secondary"
                                    fontSize="large"
                                />
                            </button>
                            <div>{children}</div>
                        </div>
                        <div onClick={toggle} className="backgroundModal"/>
                    </div>
                )}
            </Portal>
        )
}

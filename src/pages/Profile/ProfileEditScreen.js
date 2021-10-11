import React, { useContext} from 'react'
import { Chat } from '../../components/ui/Chat';
import { Header } from '../../components/ui/Header';
import { Menu } from '../../components/ui/Menu';
import { MenuShort } from '../../components/ui/MenuShort';
import { CreateProfile } from '../../components/ui/profile/CreateProfile';
// import { EditProfile } from '../../components/ui/profile/EditProfile';
import { UiContext } from '../../context/uiContext';


export const ProfileEditScreen = ({history}) => {
    
    const {menu} = useContext(UiContext);
 
    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
           
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <Header title="Mis clases"/>
            <Chat />
            <div className="container-info">
                {/* <EditProfile history={history} /> */}
                <CreateProfile />
            </div>
        </div>
    )
}

import React from 'react'
// import { UiContext } from '../../context/uiContext'
// import { Menu } from '..//ui/Menu'
// import { MenuShort } from './ui/MenuShort';
// import { Header } from './ui/Header';
// import { Chat } from './ui/Chat';

export const Class = () => {
    return (
        <div>
            <h1>Hola perros</h1>
        </div>
    )
}


// import React, { useContext } from 'react'
// import { UiContext } from '../context/uiContext'
// import { Menu } from './ui/Menu'
// import { MenuShort } from './ui/MenuShort';
// import { Header } from './ui/Header';
// import { Chat } from './ui/Chat';

// export const Class = () => {
//     const {menu} = useContext(UiContext);

//     // const [datos, setDatos] = useState([]);

//     // useEffect(() => {
//     //     const getStudent = async() => {
//     //         const response = await fetch('https://scool-server.herokuapp.com/students/get-student-classes', {
//     //             method: 'GET',
//     //             headers: {
//     //                 'Content-type': 'application/json',
//     //                 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRm91bmQiOlt7ImlkX3VzZXIiOjI4LCJuYW1lX3VzZXIiOiJFc3R1ZGlhbnRlMSIsImxhc3RuYW1lIjoiZXN0dWRpYW50ZTEiLCJuaWNrbmFtZSI6ImVzdHVkaWFudGUxIiwiZW1haWwiOiJlc3R1ZGlhbnRlMUBnbWFpbC5jb20iLCJwYXNzd29yZF8iOiIkMmIkMTAkb0l1eDBMdXYxL0ZCQ2cwYXZlNlZZdTJtLjN6b25TZU8vNUlGLmVtN2xJb0RMc1hsTnk5c3UiLCJpZF9yb2xlIjoxLCJpZF9zdGF0dXMiOjEsImNyZWF0aW9uX2RhdGUiOiIyMDIxLTEwLTEzVDAwOjA5OjEwLjAwMFoifV0sImlhdCI6MTYzNDA2NTc1MSwiZXhwIjoxNjM0MDcyOTUxfQ.Vn7Y8CDz_8CpK00pe5dQJ60L_AkiW462pQ8AhAP1RrA'
//     //             }
//     //         }) 
//     //         const datosFetch = await response.json()

//     //         setDatos( [...datos,datosFetch.classes] )
//     //         // console.log(datos);
//     //         // console.log(response.json());   
//     //     }
//     //     getStudent()
//     // }, [])

//     return (
//         <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
//             {
//                 menu.menuOpen ? <Menu /> : <MenuShort />
//             }
//             <Header title="Mis clases"/>
//             <Chat />
//             <div className="container-info">
                
//             </div>
//         </div>
//     )
// }

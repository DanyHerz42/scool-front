import React from 'react';
import LoadingLogo from '../../assets/imgs/loading.png'
export const Loading = () => {
    return (
        <div className="container-loading">
            <img className="loading-spinner" src={LoadingLogo} alt="loading img" />
            <span>Cargando...</span>
        </div>
    )
}

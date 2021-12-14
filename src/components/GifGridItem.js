import React from 'react';

const GrifGridItem = ( {title,imgUrl} ) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={imgUrl} alt={title}/>
            <p>{title}</p>
        </div>
    );
};

export default GrifGridItem;

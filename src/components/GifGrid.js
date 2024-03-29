import React from 'react';
import { useFetchGifs } from "../hooks/useFetchGifs";
import GrifGridItem from "./GifGridItem";
// import PropTypes from 'prop-types';

const GifGrid = ( { category } ) => {

   const {data:images, loading} =  useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                {images.map( image =>
                    <GrifGridItem
                        key={image.id}
                        {...image}
                    />
                )}
            </div>
        </>

    );
};

// GifGrid.propTypes = {
//
// };

export default GifGrid;

import React, { useState } from 'react';
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
// import PropTypes from 'prop-types';

const GifExpertApp = ( props ) => {

    const [categories, setCategories] = useState( ['One Punch'] )



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={setCategories}
            />
            <hr/>
            <ol>
                {categories.map( ( category ) =>
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )}
            </ol>

        </>
    );
};

// GifExpertApp.propTypes = {
//
// };

export default GifExpertApp;


// const handleAdd = () => {
//     setCategories((cats)=>{
//         return [...cats, 'HunterXHunter']
//     })
//      setCategories([...categories, 'HunterXHunter'])
// }

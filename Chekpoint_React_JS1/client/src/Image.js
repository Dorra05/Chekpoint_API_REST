import React from 'react';
import product from './product';
 const Image = () => {
    return <img src={product.image} alt={product.name} style={{height:'auto', width:'auto', marginTop:'5px', marginLeft:'3px'}}></img>
 }
 export default Image ;
 // image
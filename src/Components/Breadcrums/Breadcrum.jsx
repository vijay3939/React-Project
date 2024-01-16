import React from 'react';
import './Breadcrum.css';
import arrow_ircon from '../Assets/breadcrum_arrow.png';



const Breadcrum = (props) => {
    const { product } = props;

    return (
        <div className='breadcrum'>
            HOME <img src={arrow_ircon} alt="" /> SHOP <img src={arrow_ircon} alt="" /> {product.category} <img src={arrow_ircon} alt="" /> {product.name}
        </div>
    )
}

export default Breadcrum;




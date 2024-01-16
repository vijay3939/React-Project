import React from 'react';
import './DescriptionBox.css';


const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>

            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>

            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilitate the buying and selling of product or
                    services over the internet. It serves as a virtual marketplace where businesses and individuals
                    can showcase their products, interact with customers, and conduct transactions without the need
                    for a physical presence. E-commerce website have gained immence popularity due to their conveniece,
                    accessibility. and the global reach they offer.
                </p>

                <p>
                    E-coomerce website typically display products or service along with details description,
                    price, and any available variations (e.g. sizes, colors). Each product usally has its
                    own dedicated page with relevant information.
                </p>


            </div>

        </div>
    )
}

export default DescriptionBox
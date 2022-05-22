import React from 'react';

const Tool = ({ tool }) => {
    const { name, img, description, min_order_quan, quantity, price } = tool;
    return (
        <div className='rounded-2xl bg-base-100 shadow-lg relative'>
            <figure className='px-10 pt-10 mb-56'>
                <img className='mx-auto' src={img} alt="" />
            </figure>
            <div className='card-body items-center text-center absolute bottom-1'>
                <h2 className='card-title'>{name}</h2>
                <p><strong>Minimum Order Quantity:</strong>{min_order_quan}</p>
                <p><strong>Total Quantity:</strong>{quantity}</p>
                <p>{description}</p>
                <p><strong>Price per Piece:</strong> {price}</p>
            </div>
        </div>
    );
};

export default Tool;
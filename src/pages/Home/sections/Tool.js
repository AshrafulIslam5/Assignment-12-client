import React from 'react';

const Tool = ({ tool }) => {
    const { name, img, description, min_order_quan, quantity, price } = tool;
    return (

        <div class="card w-full bg-base-100 shadow-xl relative pb-4">
            <figure className='p-6 mb-56 md:mb-44'><img src={img} alt="" /></figure>
            <div class="absolute bottom-2 flex flex-col text-center px-8">
                <h2 className='text-2xl font-semibold text-center'>{name}</h2>
                <p><strong>Minimum Order Quantity:</strong>{min_order_quan}</p>
                <p><strong>Total Quantity:</strong>{quantity}</p>
                <p>{description}</p>
                <p><strong>Price per Piece:</strong> {price}</p>
                <button className="btn btn-primary my-4 text-white">Order</button>
            </div>
        </div>
    );
};

export default Tool;
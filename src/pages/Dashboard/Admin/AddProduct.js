import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const AddPro = data => {
        const name = data.name;
        const img = data.img;
        const description = data.description;
        const min_order_quan = parseInt(data.min_order_quan);
        const quantity = parseInt(data.quantity);
        const Perprice = data.Perprice;
        const price = parseInt(data.Perprice);

        const product = {
            name: name,
            img: img,
            description: description,
            min_order_quan: min_order_quan,
            quantity: quantity,
            Perprice: `$${Perprice}`,
            price: price
        }

        fetch('http://localhost:5000/tools', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        }).then(res => res.json()).then(data => {
            navigate('/dashboard/manageProducts');
            toast.success("Product Added")
        })
    }



    return (
        <div className='p-10 bg-base-200'>
            <div className='bg-base-100 p-10'>
                <form onSubmit={handleSubmit(AddPro)}>
                    <div className='my-10 md:flex'>
                        <div className='w-full'>
                            <label htmlFor="name" className="text-secondary">
                                Change Your Name
                            </label>
                            <input
                                {...register("name")}
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="off"
                                required
                                className="shadow-lg input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2"
                                placeholder="Product Name"
                            />
                        </div>
                        <div className='divider divider-horizontal'></div>
                        <div className='w-full'>
                            <label htmlFor="img" className="text-secondary">
                                img of Product
                            </label>
                            <input
                                {...register("img")}
                                id="img"
                                name="img"
                                type="text"
                                required
                                className="shadow-lg input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2"
                                placeholder="image Url"
                            />
                        </div>
                    </div>
                    <div className='my-10 md:flex'>
                        <div className='w-full'>
                            <label htmlFor="quantity" className="text-secondary">
                                Total Quantity
                            </label>
                            <input
                                {...register("quantity")}
                                id="quantity"
                                name="quantity"
                                type="number"
                                required
                                className="shadow-lg input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2"
                                placeholder="Total quantity"
                            />
                        </div>
                        <div className='divider divider-horizontal'></div>
                        <div className='w-full'>
                            <label htmlFor="min_order_quan" className="text-secondary">
                                Minimum Order Quantity
                            </label>
                            <input
                                {...register("min_order_quan")}
                                id="min_order_quan"
                                name="min_order_quan"
                                type="number"
                                required
                                className="shadow-lg input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2"
                                placeholder="Minimum Order Quantity"
                            />
                        </div>
                        <div className='divider divider-horizontal'></div>
                        <div className='w-full'>
                            <label htmlFor="Perprice" className="text-secondary">
                                Price Per piece
                            </label>
                            <input
                                {...register("Perprice")}
                                id="Perprice"
                                name="Perprice"
                                type="number"
                                required
                                className="shadow-lg input border-b-2 border-slate-400 border-t-0 placeholder:text-center text-center border-x-0 rounded-none focus:input-primary focus:outline-0 focus:outline-offset-0 hover:input-primary w-full mb-2"
                                placeholder="Price Per piece"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="Description" className="text-secondary">
                            description
                        </label>
                        <textarea {...register("description")} name='description' className='textarea textarea-primary w-full'></textarea>
                    </div>


                    <input type="submit" className='btn btn-secondary text-white' value={'Add The Product'} />
                </form>
                <button onClick={() => navigate('/dashboard/manageProducts')} className='btn btn-primary rounded-none mt-10 text-lg gap-3'> <ion-icon name="arrow-back-sharp"></ion-icon> Go back</button>
            </div>
        </div>
    );
};

export default AddProduct;
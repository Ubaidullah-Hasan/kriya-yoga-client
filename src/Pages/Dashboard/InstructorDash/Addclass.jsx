import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';

const Addclass = () => {
    const { user } = useContext(AuthContext);
    const token = "13454554"


    const imageHostingToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
    const hostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        fetch(hostingURL, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse)
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, email, instructor, price, availableSeats } = data;
                    const newItem = { name, price: parseFloat(price), email, instructor, image: imgURL, availableSeats };
                    console.log(newItem)
                    console.log(data)

                    fetch("http://localhost:4000/classes", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            autorization: `Bearer ${token}`
                        },
                        body: JSON.stringify(newItem)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.insertedId) {
                                reset();
                                Swal.fire(
                                    'Item add Successfully',
                                    'success'
                                )
                            }
                        })
                }
            })
    };

    return (

        <div className="w-[90%] mx-auto bg-[#F3F3F3] p-[50px] ">
            <div className=" mx-auto w-full   rounded-none">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class name*</span>
                            </label>
                            <input type="text" {...register("name", { required: true, maxLength: 180 })} placeholder="Class name" className="input rounded-none py-6 px-8 border-none focus:outline-none" />
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Class Image*</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className="file-input w-full max-w-xs " />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor*</span>
                            </label>
                            <input type="text" {...register("instructor", { required: true, maxLength: 180 })} defaultValue={user?.displayName} readOnly placeholder="Instructor name" className="input rounded-none py-6 px-8 border-none focus:outline-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price", { required: true })} type="text" placeholder="Price" className="input rounded-none py-6 px-8 border-none focus:outline-none" />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="text" {...register("email", { required: true, maxLength: 180 })} defaultValue={user?.email} readOnly  placeholder="Class name" className="input rounded-none py-6 px-8 border-none focus:outline-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">AvailableSeats*</span>
                            </label>
                            <input {...register("availableSeats", { required: true })} type="number" placeholder="AvailableSeats" className="input rounded-none py-6 px-8 border-none focus:outline-none" />
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className='capitalize btn bg-green-500 hover:bg-green-600 rounded-none border-none' type="submit"> Add Item </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addclass;
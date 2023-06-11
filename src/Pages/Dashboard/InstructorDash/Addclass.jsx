import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Addclass = () => {
    const { user } = useContext(AuthContext);

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.className.value;
        const image = form.photo.value;
        const instructor = form.iName.value;
        const email = form.email.value;
        const price = parseInt(form.price.value);
        const availableSeats = form.sets.value;

        const newClass = { instructor, name, image, email, price, availableSeats}
        console.log(newClass)

        // fetch("http://localhost:4000/classes", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(newClass)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.insertedId) {
        //             Swal.fire(
        //                 'Good job!',
        //                 'You added a class!',
        //                 'success'
        //             )
        //         }
        //     })

    }
    return (
        <div className='w-[90%] mx-auto'>
            <form onSubmit={handleAddProduct} className=" bg-base-200 px-[97px] py-[60px] rounded-md space-y-6 my-[90px]">
                <h1 className='mb-12 font-bold text-5xl text-slate-800 text-center '>Add Class!</h1>                
                {/* row 2 */}
                <div className='flex justify-between gap-6'>
                    <div className="form-control w-full">
                        <input type="text" placeholder="Class Name" name='className' className="input focus:outline-none" />
                    </div>
                    <div className="form-control w-full">
                        <input type="file" name='photo' className="" />
                    </div>
                </div>
                {/* row 1 */}
                <div className='flex justify-between gap-6'>
                    <div className="form-control w-full">
                        <input type="text" placeholder="Instructor Name" name="iName" readOnly defaultValue={user?.displayName} className="input focus:outline-none" />
                    </div>
                    <div className="form-control w-full">
                        <input type="email" name='email' defaultValue={user.email} readOnly placeholder="Your Email" className="input focus:outline-none" />
                    </div>
                </div>
                {/* row 3 */}
                <div className='flex justify-between gap-6'>
                    <div className="form-control w-full">
                        <input type="text" name='price' placeholder="Price" className="input focus:outline-none" />
                    </div>
                    <div className="form-control w-full">
                        <input type="text" name='sets' placeholder="Available Seats" className="input focus:outline-none" />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-green-500 hover:bg-green-600 border-none" >Add</button>
                </div>
            </form>
        </div>
    );
};

export default Addclass;
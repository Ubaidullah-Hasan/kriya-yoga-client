import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';
import useClasses from '../../../../Hook/useClasses';

const Payment = () => {
    const [classes, refetch, totalPrice] = useClasses();
    
    // todo: 
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK_KEY);

    return (
        <div className='mt-[20vh] text-center'>
            <h3 className='text-3xl my-7'>PAYMENT</h3>
            <div className='w-1/2 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm totalPrice={totalPrice} classes={classes} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
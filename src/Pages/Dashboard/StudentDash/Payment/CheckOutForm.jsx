import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "./CheckOutForm.css"
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const CheckOutForm = ({ classes, totalPrice }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useContext(AuthContext);
    const [transitionId, setTransitionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const token = localStorage.getItem("access-token")
    // console.log("classes", classes)


    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // console.log(totalPrice)
        if (!totalPrice) {
            return
        }
        axios.post("https://yoga-steel.vercel.app/create-payment-intent", { totalPrice }, {
            headers: {
                autorization: `Bearer ${token}`,
            }
        })
            .then(res => {
                // console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        // console.log(card)

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod)
            setCardError("");
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "anonymous",
                        email: user?.email || "unknown"
                    },
                },
            }
        )
        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);

        setProcessing(false);

        if (paymentIntent.status === "succeeded") {
            const transitionId = paymentIntent.id;
            setTransitionId(transitionId);
            const payment = {
                email: user?.email,
                transitionId,
                totalPrice,
                date: new Date(),
                quentaty: classes.length,
                cartItems: classes.map(item => item._id),
                menuItems: classes.map(item => item.courseId),
                status: "service pending",
                itemsName: classes.map(item => item.name)
            }
            Swal.fire({
                title: 'Awesome',
                text: 'Payment Successfull !!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            console.log("payment successfull")
            axios.post('https://yoga-steel.vercel.app/payment', payment, {
                headers: {
                    'autorization': `Bearer ${token}`
                }
            })
                // .then(res => {
                //     console.log(res.data);
                //     if (res.data.result.insertedId) {
                //         console.log("payment document insert the db")
                //         classes.map(item => console.log(item.studentsCount, item.studentsCount + 1))
                //         fetch("https://yoga-steel.vercel.app/classes",{
                //             method: "PUT",
                //             headers: {
                //                 "content-type" : "application/json"
                //             },
                //             body: JSON.stringify(classes.forEach(item => item+1))
                //         })
                //         .then(res=> res.json())
                //         .then(data => {
                //             console.log(data)
                //         })
                //     }
                // })
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.insertedId) {
                        console.log("payment document inserted into the database");

                        const updatedClasses = classes.map(item => ({ ...item, studentsCount: parseInt(item.studentsCount) + 1 }));

                        fetch("https://yoga-steel.vercel.app/classes", {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(updatedClasses)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                            })
                            .catch(error => {
                                console.error(error);
                            });
                    }
                });

        }
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className='my-10 '
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button className='btn btn-primary w-full' type="submit" disabled={!stripe || processing || !clientSecret} >
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500 my-6'>{cardError}</p>}
            {transitionId && <p className='text-green-500 my-6'>Transition complete. Transition ID: {transitionId}</p>}
        </>
    );
};

export default CheckOutForm;

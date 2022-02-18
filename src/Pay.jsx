import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {useState,useEffect} from "react"

const KEY=
"pk_test_51KUDYVSIwic02C6Mv4FEhSNoqjST7nUQZDsX9PKbBUwSjJiA8xrDe6mJmUdJ9LIqQDaYYp0xiI7lqRWINVuqKZDY00W6svPf86"

const Pay = () =>{
    const [stripeToke,setStripeToken] = useState (null);
    const history = useEffect ()

    const onToken = (token) =>{
        setStripeToken (token);
    };
useEffect(()=>{
    const  makeRequest = async () =>{
        try{
            const res = await axios.post(
                "http:://loacalhost:5000/api/checkout/payment",
                {
                    tokenId:stripeToke.id,
                    amount:2000,
                }
            );
            console.log(res.data);
            history.push("/success",)
        }catch(err){
            console.log(err);
        }
    };
    stripeToken && makeRequest
},[stripeToken,history])   
    return (
        <div
        style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
            {stripeToken ?(<span>Processing. Please wait...</span>):(

            
            <StripeCheckout 
            name="S-Cart" 
            image=""
            billingAddress
            shippingAddress
            description="Your total is 20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
            >
            <button
            style={{
                border: "none",
                width:120,
                borderRadius: 5,
                padding:"20px",
                backgroundColor:"black",
                color: "white",
                fontWeight:"600",
                cursor: "pointer",
            }}            
            >
                Pay Now
            </button>
            </StripeCheckout>
            )}
        </div>
    );
};

export default Pay;
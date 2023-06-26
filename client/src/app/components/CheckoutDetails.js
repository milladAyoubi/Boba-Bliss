"use client"
import React,{useState,useEffect,useContext} from "react";
import Image from 'next/image'
import { CartContext } from "../context/CartContext";



const CheckoutDetails = ({setModal}) => {
  const { cart, setCart, cartTotal} = useContext(CartContext)
  const [successMsg, setSuccessMsg] = useState(false) 
  const [counter, setCounter] = useState(5)


  useEffect(() => {
    if(successMsg) {
      const timer = setTimeout(() => {
        if(counter > 1 ) {
          setCounter(counter - 1)
        }

       
      }, 1000)

    
      return () => clearTimeout(timer)
    }
  })

  useEffect(()=> {
    if(successMsg) {
    const timer = setTimeout(()=> {
      setSuccessMsg(false)
      setCart([])
      setModal(false)
    }, 5000)
    return ()=> clearTimeout(timer)
  }

    
  }, [successMsg])

  return (
  <div> 
    {successMsg ? (

     <div className="flex flex-col justify-center items-center h-[100vh] lg:h-[600px] px-6">
      <h2>Thank you! The order has been placed</h2>
      <Image src={'/success-1.gif'} width={150} height={150} alt='' />
      <div>
        This window will close in <span>{counter}</span> seconds
      </div>
     </div>
     
     ) : (
      
    <div className="lg:gap-x-8 h-full lg:px-12 lg:py-8 ">
      <h2 className="mb-6 text-[20px] uppercase font-bold text-center">Shipping & Checkout</h2>
      <div className='h-[80vh] lg:h-[36.5vh] flex flex-col lg:flex-row lg:gap-x-4'>

        <div className=" min-h-[400px] flex-1 h-full overflow-y-auto lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0">
         
          <div className="flex flex-col gap-4 h-full">

            <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
              <input type="text" 
              className="w-full input" 
              placeholder="First Name"/>

              <input type="text" 
              className="w-full input" 
              placeholder="Last Name"/>
            </div>


            <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
              
              <input type="text" 
              className="w-full input" 
              placeholder="Phone"/>

              <input type="text" 
              className="w-full input" 
              placeholder="Street name"/>

            </div>


            <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
              <input type="text" 
              className="w-full input" 
              placeholder="Phone"/>

              <input type="text" 
              className="w-full input" 
              placeholder="Street No."/>

            </div>
            

            <div className="flex justify-between gap-x-4">
              <input type="text" 
              className="w-full input" 
              placeholder="Postel Code"/>

              <input type="text" 
              className="w-full input" 
              placeholder="Unit No."/>

                <input type="text" 
              className="w-full input" 
              placeholder="Floor"/>

            </div>
            

              <div>
                <textarea className="textarea w-full h-full" placeholder="Message (Optional)"></textarea>
              </div>

            
          </div>
        </div>

        <div className=" flex-1 h-full lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0">
         <div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
          <h3 className="">Your Order</h3> 
          <div >
            {cart.map((boba, index) => {
              return (
              <div className="border-t border-black/10 pt-2 pb-1 mt-3" key={index}>
                  <div className="flex justify-between text-[15px] mt-2" >
                    <div>{boba.name}</div>
                  
                    <div>{boba.amount >= 1 && `x ${boba.amount}`}</div>
                  </div>
                  <div className="flex flex-wrap gap-x-4 my-0.5 text-[12px]">
                    {boba.toppings.map((toppings, i) => {
                      return (  
                        
                    <div key={i}>{toppings.name}</div>
                      
                      
                      );
                    })}
                  </div>
                  <div>
                    ${parseFloat(boba.price * boba.amount).toFixed(2)}
                  </div>
              </div>
              );
            })}
          </div>
         </div>
         <button onClick={() => setSuccessMsg(true)}className="btn justify-center btn-lg gradient w-full text-center">
          Place Order
         </button>
        </div>
        </div>
      </div>
        )}
    </div>

  
  
  )
  }
export default CheckoutDetails;

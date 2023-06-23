import React,{useState,useEffect,useContext} from "react";
import Image from 'next/image'
import { CartContext } from "../context/CartContext";


const CheckoutDetails = ({setModal}) => {
  const { cart, setCart, cartTotal} = useContext(CartContext)


  return (
  <div>
    <div>
      <h2>Shipping & Checkout</h2>
      <div className='h-[86vh] lg:h-[47.5vh] flex flex-col lg:flex-row lg:gap-x-4'>

        <div className="bg-green-200 flex 1 h-full overflow-y-auto lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0">
         
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
              placeholder="Block"/>

              <input type="text" 
              className="w-full input" 
              placeholder="Floor"/>

                <input type="text" 
              className="w-full input" 
              placeholder="Floor"/>

            </div>
            

              

            
          </div>
        </div>

        <div className="bg-yellow-200 1 h-full lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0">
          Box 2
        </div>
        </div>
      </div>
    </div>

  
  
  )
  }
export default CheckoutDetails;

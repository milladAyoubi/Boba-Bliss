import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

import SizeSelection from './SizeSelection'
import SugerSelection from './SugerSelection';
import Topping from './Topping';
import { CartContext } from '../context/CartContext';
import Boba from './Boba';


const BobaDetails = ({ boba, modal, setModal }) => {
   
   
    
    const [size, setSize] = useState('large')

    const [suger, setSuger] = useState('100% ')

    const [toppings, setToppings] = useState([])

    const [toppingsPrice, setToppingsPrice] = useState([])

    const [price, setPrice] = useState(0);

    const {addToCart} = useContext(CartContext)

    

    useEffect(() => {
        size === 'small' ? setPrice(parseFloat(boba.priceSm + toppingsPrice).toFixed(2)) 
        : 
        size === 'medium' ? setPrice(parseFloat(boba.priceMd + toppingsPrice).toFixed(2)) 
        :
        size === 'large' ? setPrice(parseFloat(boba.priceLg + toppingsPrice).toFixed(2)) 
        : null;
    })




    useEffect(() => {
        if (toppings.length > 0) {
            const toppingPrice = toppings.reduce((a,c) => {
                return a + c.price
            }, 0)

            setToppingsPrice(toppingPrice);
        } else {
            setToppingsPrice(0)
        }
    }, [toppings])

    

    return (
    
         <div className='flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8'> 
            <div className='lg:flex-1 flex justify-center items-center'>
                <div className='max-w-[300px] lg:max-w-none mt-6 lg:mt-0'>
                <Image width={450} height={450} src={boba.image} alt='' priorty={1} className='mx-auto relative'/>
            </div>
            </div>


        <div className='flex flex-col flex-1'>
            <div className='flex-1 p-2 text-center lg:text-left'>
                <div className='flex-1 bg-white overflow-y-scroll h-[36vh] scrollbar-thin scrollbar-thumb-red-200  '>
                    <div className='font-semibold'>
                        <h2 className='capitalize text-3xl mb-1'>{boba.name}</h2>
                        <div className=' mb-6 text-lg font-medium'>
                            <span>{ size === 'small' ? '350 ml' : size === 'medium' ? '500 ml' :
                            size === 'large' ? '700 ml' : null }</span>
                            <span>, {suger} Suger</span>
                        </div>
                    </div>

                    <SizeSelection boba={boba} size={size} setSize={setSize}/> 
                    <div className='mb-4 text-xl font-semibold'>Suger Amount</div>
                    <SugerSelection suger={suger} setSuger={setSuger}/>
                    <div className='mb-4 text-xl font-semibold'>Choose Toppings</div>
                    <div className='flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start'>
                        {boba.toppings?.map((topping, index) => {
                            return <Topping  
                            topping={topping} 
                            toppings={toppings} 
                            setToppings={setToppings} 
                            key={index}/>
                        })}
                    </div>
                </div>
            </div>
        

            <div className='h-full flex items-center px-2 lg:items-end'>
                <button onClick={()=> {
                    
                    addToCart(boba.id, boba.image, boba.name, price, toppings, size, suger);
                    setModal(false)
                    
                    }  } className='btn btn-lg gradient w-full flex justify-center gap-x-2'>
                <div>Add To Cart For</div>
                <div>$ {price} </div> 
                    
               
                
                </button>
            </div>
        </div>
        </div>
    );
};

export default BobaDetails;
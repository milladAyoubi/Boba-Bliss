import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import SizeSelection from './SizeSelection'
import SugerSelection from './SugerSelection';
import Topping from './Topping';

const BobaDetails = ({ boba }) => {
    console.log(boba)

    const [size, setSize] = useState('large')

    const [suger, setSuger] = useState('100% ')

    const [toppings, setToppings] = useState([])

    const [toppingsPrice, setToppingsPrice] = useState([])

    const [price, setPrice] = useState(0);

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

    console.log(price)

    return (
    
         <div className='flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8'> 
            <div className='lg:flex-1 flex justify-center items-center'>
                <div className='max-w-[300px] lg:max-w-none mt-6 lg:mt-0'>
                <Image width={450} height={450} src={boba.image} alt='' priorty={1} className='mx-auto relative'/>
            </div>
            </div>


        <div className='bg-pink-100 flex flex-col flex-1'>
            <div className='flex-1 p-2 text-center lg:text-left'>
                <div className='flex-1 bg-white overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-grey-500 scrollbar-track-white pr-2 '>
                    <div className='font-semibold'>
                        <h2 className='capitalize text-3xl mb-1'>{boba.name}</h2>
                        <div className='bg-yellow-200 mb-6 text-lg font-medium'>
                            <span>{ size === 'small' ? '350 ml' : size === 'medium' ? '500 ml' :
                            size === 'large' ? '700 ml' : null }</span>
                            <span>, {suger} Suger</span>
                        </div>
                    </div>

                    <SizeSelection boba={boba} size={size} setSize={setSize}/> 
                    <SugerSelection/>
                    <div>Choose Toppings</div>
                    <div>
                        {boba.toppings?.map((topping, index) => {
                            return <Topping key={index}/>
                        })}
                    </div>
                </div>
            </div>

            <div className='h-full flex items-center px-2 lg:items-end'>
                <button className='btn btn-lg gradient w-full flex justify-center gap-x-2'>
                <div>Add To Cart For</div>
                <div>$ {price} </div> 
                    
               
                
                </button>
            </div>
        </div>
        </div>
    );
};

export default BobaDetails;
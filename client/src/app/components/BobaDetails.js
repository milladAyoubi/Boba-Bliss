import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import SizeSelection from './SizeSelection'
import SugerSelection from './SugerSelection';

const BobaDetails = ({ boba }) => {
    console.log(boba)

    const [size, setSize] = useState('small')

    const [suger, setSuger] = useState('100% Suger')

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
    
         <div> 
            <div>
                <Image width={450} height={450} src={boba.image}/>
            </div>
        </div>
    );
};

export default BobaDetails;
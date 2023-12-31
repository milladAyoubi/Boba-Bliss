// import components
"use client";
import Boba from './components/Boba';
import Banner from './components/Banner';
import Promo from './components/Promo'
import SummerDrinks from './components/SummerDrinks';
import Newsletter from './components/Newsletter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slideshow from './components/Slideshow';

import { useEffect } from 'react';



// pizza data
const boba = [{
        id: 1,
        name: 'Orginal Milk Tea',
        description: 'Every sip of Original Milk Tea takes you on a sensory journey. We start with handpicked tea leaves. Sourced from the finest tea gardens.',
        image: '/Boba-Milk-Tea.png',
        priceSm: 5.99,
        priceMd: 10.99,
        priceLg: 11.99,
        toppings: [{
                image: '/Topping-Pearls.png',
                name: 'Boba Pearls',
                price: 2,
            },
            {
                image: '/Topping-Lychee.png',
                name: 'Lychee Jelly',
                price: 2,
            },
            {
                image: '/Topping-Mango.png',
                name: 'Mango Jelly',
                price: 2,
            },
            {
                image: '/Topping-Coconut.png',
                name: 'Coconut Jelly',
                price: 2,
            },
            {
                image: '/Topping-Matcha.png',
                name: 'Matcha Jelly',
                price: 2,
            },
        ],
    },
    {
        id: 2,
        name: 'Straw-Banana Smoothie',
        description: 'Made with the perfect blend of ripe strawberries and creamy bananas, this refreshing beverage is a true indulgence for fruit lovers.',
        image: '/SM-Smoothie.png',
        priceSm: 6.99,
        priceMd: 11.99,
        priceLg: 12.99,
        toppings: [{
            image: '/Topping-Pearls.png',
            name: 'Boba Pearls',
            price: 2,
        },
        {
            image: '/Topping-Lychee.png',
            name: 'Lychee Jelly',
            price: 2,
        },
        {
            image: '/Topping-Mango.png',
            name: 'Mango Jelly',
            price: 2,
        },
        {
            image: '/Topping-Coconut.png',
            name: 'Coconut Jelly',
            price: 2,
        },
        {
            image: '/Topping-Matcha.png',
            name: 'Matcha Jelly',
            price: 2,
        },
    ],
    },
    {
        id: 3,
        name: 'Passion Drink Smoothie',
        description: 'Escape to a tropical oasis with our irresistible Passion Drink Smoothie. This vibrant blend of tangy passion fruit and luscious mango.',
        image: '/PP-Smoothie.png',
        priceSm: 10.99,
        priceMd: 11.99,
        priceLg: 12.99,
        toppings: [{
            image: '/Topping-Pearls.png',
            name: 'Boba Pearls',
            price: 2,
        },
        {
            image: '/Topping-Lychee.png',
            name: 'Lychee Jelly',
            price: 2,
        },
        {
            image: '/Topping-Mango.png',
            name: 'Mango Jelly',
            price: 2,
        },
        {
            image: '/Topping-Coconut.png',
            name: 'Coconut Jelly',
            price: 2,
        },
        {
            image: '/Topping-Matcha.png',
            name: 'Matcha Jelly',
            price: 2,
        },
    ],
    },
    {
        id: 4,
        name: 'Matcha Milk Tea',
        description: 'Indulge in the allure of our Matcha Milk Tea, where the centuries-old tradition of matcha meets the creamy indulgence of milk.',
        image: '/M-Milk-Tea.png',
        priceSm: 11.99,
        priceMd: 12.99,
        priceLg: 13.99,
        toppings: [{
            image: '/Topping-Pearls.png',
            name: 'Boba Pearls',
            price: 2,
        },
        {
            image: '/Topping-Lychee.png',
            name: 'Lychee Jelly',
            price: 2,
        },
        {
            image: '/Topping-Mango.png',
            name: 'Mango Jelly',
            price: 2,
        },
        {
            image: '/Topping-Coconut.png',
            name: 'Coconut Jelly',
            price: 2,
        },
        {
            image: '/Topping-Matcha.png',
            name: 'Matcha Jelly',
            price: 2,
        },
    ],
    },
    
   
];

const images = [
    'fruit-1.png',
    'fruit-2.png',
    'fruit-3.png',
    'fruit-4.png',
    // Add more image URLs as needed
  ];

export default function Home() {
    useEffect(()=> {
        AOS.init({
          duration: 100, 
          delay: 0,
        })
      })
      
    return (
    
    <section> 
        <Banner/>
        <div className='container mx-auto flex flex-col ' id="drinks">
            <h1 className='section-title font-poppins font-bold text-indigo text-center mt-32 lg:mt-0 lg:mb-12 pb-3 border-b-4 border-forange min-w-[300px] m-auto'>Featured Drinks</h1>
            <div className='grid grid-cols-2 gap-[15px] md::grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12 '>
                {boba.map((boba, index) => {
                    return <Boba boba={boba} key={index}/>
                })}
            </div>
        </div>
        <Slideshow images={images}/>
        <SummerDrinks/>
        <Newsletter/>
        <Promo/>
    </section>

    );
}
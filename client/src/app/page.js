// import components
import Boba from './components/Boba';
import Banner from './components/Banner';
import Promo from './components/Promo'

// pizza data
const boba = [{
        id: 1,
        name: 'Orginal Milk Tea',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
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
                name: 'Match Jelly',
                price: 2,
            },
        ],
    },
    {
        id: 2,
        name: 'Straw-Banana Smoothie',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
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
            name: 'Match Jelly',
            price: 2,
        },
    ],
    },
    {
        id: 3,
        name: 'Passion Drink Smoothie',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
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
            name: 'Match Jelly',
            price: 2,
        },
    ],
    },
    {
        id: 4,
        name: 'Matcha Milk Tea',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
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
            name: 'Match Jelly',
            price: 2,
        },
    ],
    },
    
   
];

export default function Home() {
    return (
    
    <section> 
        <Banner/>
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 gap-[15px] md::grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12 '>
                {boba.map((boba) => {
                    return <Boba boba={boba}/>
                })}
            </div>
        </div>

        <Promo/>
    </section>

    );
}
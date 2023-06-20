import React, {useContext} from 'react'
import {IoCloseOutline} from 'react-icons/io5';
import {CartContext} from '../context/CartContext'

const CartTop = () => {
  const {setIsOpen} = useContext(CartContext)
  useContext(CartContext)
  return (
  <div className='w-full h-20 border-b flex items-center justify-content px-10 '>
    <div className='font-semibold'>Shopping Bag</div>
  <div onClick={()=> setIsOpen(false)}>
    <IoCloseOutline className='text-3xl group-hover:scale-110 duration-300 transition-all cursor-pointer'/>
  </div>
  </div>
  );
};

export default CartTop;

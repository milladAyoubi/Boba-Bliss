import Image from 'next/image'
import { useContext } from 'react';
import {BiPlus, BiMinus} from 'react-icons/bi';
import {IoCloseOutline} from 'react-icons/io5';
import { CartContext } from '../context/CartContext';

const CartItem = ({boba}) => {
  const { removeItem } = useContext(CartContext)

  return (
  <div className=" select-none">
    <div className='flex gap-x-4 mb-2'>
    
      <div className='flex justify-center items-center'>
        <Image src={boba.image} width={90} height={90} alt=''/>
      </div>

      <div className='flex-1 flex flex-col gap-y-1'>
          <div className='text-lg capitalize font-bold'>{boba.name}</div>
          <div className='flex flex-col gap-y-1'>
            <div className='capitalize font-medium text-[15px]'> Suger: {boba.suger}</div>
            <div className='capitalize mb-2 font-medium text-[15px]'>Size: {boba.size}</div>
            <div className='flex items-center gap-x-1'>
              <div className='w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full'>
                <BiMinus/>
              </div>
              <div className='font-semibold flex flex-1 max-w-[30px] justify-center items-center text-sm'>
                  4
              </div>
              <div className='w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full'>
                <BiPlus/>
              </div>
            </div>
          </div>
        </div>
          <div className='flex flex-col justify-between'>
          <div onClick={()=> removeItem(boba.id, boba.price, boba.suger)}className='text-2xl flex justify-center items-center self-end cursor-pointer hover:scale-110 duration-100 transition-all text-orange'>
            <IoCloseOutline/>
          </div>
        <div>
          <span className='text-[17px] font-medium'>${parseFloat(boba.price * boba.amount).toFixed(2)}</span>
        </div>
        </div>
     
    </div>

    <div className='flex flex-wrap items-center gap-3 p-6 border-b border-black/10'>
      <div className='font-semibold'>Toppings: {boba.toppings.length === 0 && 'None'}</div>
      {
        boba.toppings.map((topping, index)=> {
          return <div className='capitalize text-sm gradient font-medium px-3 py-1 rounded-full leading-none'key={index}>
            {topping.name}
            </div>
        })
      }
    </div>
  </div>
  
  );
};

export default CartItem;

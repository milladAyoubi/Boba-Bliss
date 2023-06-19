import Image from 'next/image'
import {BiPlus, BiMinus} from 'react-icons/bi';
import {IoCloseOutline} from 'react-icons/io5';

const CartItem = ({boba}) => {
  return (
  <div className="bg-pink-100 select-none">
    <div className='flex gap-x-4 mb-2 '>
    
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
          <div className='text-2xl flex justify-center items-center self-end cursor-pointer hover:scale-110 duration-100 transition-all text-orange'>
            <IoCloseOutline/>
          </div>
        <div>
          <span className='text-[17px] font-medium'>${parseFloat(boba.price * boba.amount).toFixed(2)}</span>
        </div>
        </div>
     
    </div>

    <div>Toppings</div>
  </div>
  
  );
};

export default CartItem;

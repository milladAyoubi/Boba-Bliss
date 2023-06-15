"use client";
import Image from 'next/image'

const SizeSelection = ( {boba, size, setSize}) => {

  return (
  
  <div className='bg-indigo-400'>
    
     <div>
      <label className='bg-red-200'>
        <Image  className={`${size === 'small' ? 'border-2 border-orange p-[2px] rounded-full' : 'border-transparent filter saturate-[.1]' }`} src={boba.image} width={60} height={60} alt=''/>
        <input type="radio" name='size' value='small' checked={size === 'small'} onChange={(e) => setSize(e.target.value)} className='apperance-none' />
      </label>
     </div>
     
     
  </div>
  
  );
};

export default SizeSelection;

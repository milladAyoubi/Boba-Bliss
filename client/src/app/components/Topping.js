import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { IoMdCheckmark } from 'react-icons/io';

const Topping = ({topping, toppings, setToppings}) => {

  
  const [isChecked, setIsChecked] = useState(false)


  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  }

  const handleTopping = () => {
    if (isChecked) {
      const newToppings = new Set([...toppings, {...topping}]);
   
      setToppings(Array.from(newToppings));
      console.log(newToppings)
    } else {

      const newToppings = toppings.filter((toppingOb) => {
        return toppingOb.name !== topping.name
      })
      setToppings(newToppings)
    }
  }


  useEffect (() => {
    handleTopping();
  }, [isChecked])


    return (
    <div className={`${isChecked && 'border-orange'} w-full max-w-[110px] h-[140px] 
    p-1 flex flex-col items-center justify-center border rounded-mb bg-white relative`}> 
      
      <Image src={topping.image} width={70} height={70} alt='' className='mb-2'/>

      <div className='text-sm capitalize text-center ink-200 font-medium'>{topping.name}</div>

      <input className='absolute w-full h-full opacity-0 cursor-pointer' 
      type='checkbox' 
      checked={isChecked}
      onChange={handleCheckBox}/>

      <div className={`${isChecked ? 'opacity-100' : 'opacity-0'} absolute top-1 right-1`}>
        <IoMdCheckmark className='text-xl text-orange'/>
      </div>
    </div>
  );
};

export default Topping;
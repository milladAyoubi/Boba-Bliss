const SugerSelection = ({suger, setSuger}) => {
    return (
    
      
    <div className="">
         <p className="mb-4 font-bold">Suger Content</p>
        <div className="flex gap-x-5 mb-8 font-medium justify-center lg:justify-start">
            <label className="flex items-center gap-x-2 cursor-pointer ">
                <input  
                className=" appearance-none w-4 h-4 border border-grey-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary
                checked:border-secondary cursor-pointer"
                type="radio" 
                name="crust" 
                value="100%" 
                checked={suger === '100%'}
                onChange={(e) => setSuger(e.target.value)} />
            </label>

            100% 
            <label className="flex items-center gap-x-1 cursor-pointer">
                <input  
                className="appearance-none w-4 h-4 border border-grey-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary
                checked:border-secondary cursor-pointer"
                type="radio" 
                name="crust" 
                value="50%" 
                checked={suger === '50%'}
                onChange={(e) => setSuger(e.target.value)} />
            </label>
            
            50% 

            <label className="flex items-center gap-x-2 cursor-pointer">
                <input  
                className="appearance-none w-4 h-4 border border-grey-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary
                checked:border-secondary cursor-pointer"
                type="radio" 
                name="crust" 
                value="25%" 
                checked={suger === '25%'}
                onChange={(e) => setSuger(e.target.value)} />
            </label>
    
            25%
        </div>

    </div>
    
    );
    
};

export default SugerSelection;
import Image from "next/image";
import Link from "next/link";


const Nav = () => {
  return (
  <nav className="absolute w-full py-8 z-10">
      <div className="container mx-auto flex flex-col lg: lg:flex-row gap-y-3 justify-between items-center">
        <Link href="#">
          <Image src={'logo.svg'} width={180} height={180} alt='' ></Image>
        </Link>

        <div className="flex gap-x-8 items-center">
          <div className="flex gap-x-3 items-center">
            <Image src={'phone.svg'} width={42} height={42} alt='' />
            <div className="text-indigo font-medium text-medium">
                <div>Get A Great Taste Of Boba Today!</div>
                <div className="text-xl font-extrabold leading-none tracking-wide">647-777-3242</div>
            </div>
          </div>
          <div className="relative cursor-pointer hidden lg:flex">
            <Image src={'bag.svg'} width={38} height={38} alt=''/>
          </div>
        </div>
      </div>
  </nav>
  
  );
};

export default Nav;

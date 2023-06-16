import Image from "next/image";
import Link from "next/link";


const Nav = () => {
  return (
  <nav className="absolute w-full py-8  z-10">
      <div className="container mx-auto">
        <Link href="#">
          <Image src={'logo.svg'} width={180} height={180} alt='' ></Image>
        </Link>

        <div>
          <div>
       
          </div>
        </div>
      </div>
  </nav>
  
  );
};

export default Nav;

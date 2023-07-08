'use client'
import Link from "next/link";
import Image from "next/image";
import logo from './assets/logo.svg'
function Header() {
    return(
        <div className={'flex justify-between items-center p-8 mx-52'}>
            <div>
                <Image src={logo} alt={'logo'} width={250} height={250}/>
            </div>
            <div className={'flex justify-center items-center gap-5 text-xl font-medium mt-1'}>
                <Link className={'hover:text-[#F4CE14]'} href={'/'}>Home</Link>
                <Link className={'hover:text-[#F4CE14]'} href={'/menu'}>Menu</Link>
                <Link className={'hover:text-[#F4CE14]'} href={'/booking'}>Reserve a Table</Link>
                <Link className={'hover:text-[#F4CE14]'} href={'/about'}>About Us</Link>
                <Link className={'font-semibold bg-[#F4CE14] rounded p-3 hover:bg-[#495E57] hover:text-[#F4CE14]'} href={'/login'}>Login/Signup</Link>
            </div>
        </div>
    )
}

export default Header
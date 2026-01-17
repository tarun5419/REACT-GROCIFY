import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const cartItems = useSelector(state => state.cart.items) || [];
    const cartCount = cartItems.reduce((sum, item) => sum + (item.qty || 1), 0);

    const [showMenu, setShowMenu] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)

    }, [])


    return (
        <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]' : ''}`} >
            <nav className='max-w-[1200px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center '>
                {/* Logo */}
                <Link to='/' className='text-3xl font-bold'>
                    Gr<span className='text-orange-500 uppercase'>o</span>cify
                </Link>

                {/* Desktop Menu */}
                <ul className='md:flex items-center gap-x-15 hidden'>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                    </li>
                </ul>

                {/* Nav Action */}
                <div className='flex items-center gap-x-5'>
                    {/* Input Field */}
                    <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
                        <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off'
                            className='flex-1 h-[5vh] px-3 focus:outline-none ' />
                        <button className='bg-gradient-to-b from-red-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl '>
                            <FaSearch />
                        </button>
                    </div>
                    
                    <a href="#" className='text-zinc-800 text-2xl'>           {/*Wishlist-Heart logo*/} 
                        <FaHeart />
                    </a>

                    <a href="#" className='text-zinc-800 text-2xl'>             {/*Shopping Bag logo*/}
                        <HiShoppingBag />
                        {cartCount > 0 && (
                            <span style={{ position: "absolute", top: "32px", right: "192px" }} className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </a>

                    {/* Hamburger */}
                    <a href="#" className='text-zinc-800 text-3xl md:hidden ' onClick={toggleMenu}>
                        {showMenu ? <TbMenu3 /> : <TbMenu2 />}
                    </a>
                </div>

                {/* Mobile Menu */}
                <ul
                    className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-24 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ''}`}>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                    </li>
                    <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
                        <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off'
                            className='flex-1 h-[5vh] px-3 focus:outline-none ' />
                        <button className='bg-gradient-to-b from-red-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl '>
                            <FaSearch />
                        </button>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Navbar

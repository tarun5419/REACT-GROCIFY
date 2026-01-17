import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <div>
            <section className=' min-h-screen max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row items-center pt-25 '>
                {/* Hero Content */}
                <div  className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality...</span>
                    <h1 className='md:text-7xl/20 text-5xl/14  font-bold'>
                        Tasty Organic <span className='text-orange-500'>Fruit</span> & <span className='text-orange-500'>Veggies</span> <br /> In Your City
                        </h1>
                        <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10'>
                            Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                            </p>
                        <Button content="Shop Now"/>
                </div>

                {/* Hero Image */}
                <div className='flex-1'>
                    <img src={Grocery} alt="Hero Image" />
                </div>
            </section>
        </div>
    )
}

export default Hero

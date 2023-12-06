import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Header from './Header'

const Slider = () => {
    const [index, setIndex] = useState(0)
    const sliderData = [
        {
            id: 1,
            coverImg: "/desktop-image-hero-1.jpg",
            mobileImg: "./mobile-image-hero-1.jpg",
            title: "Discover innovative ways to decorate",
            body: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        {
            id: 2,
            coverImg: "/desktop-image-hero-2.jpg",
            mobileImg: "./mobile-image-hero-2.jpg",
            title: "We are available all across the globe",
            body: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            id: 3,
            coverImg: "/desktop-image-hero-3.jpg",
            mobileImg: "./mobile-image-hero-3.jpg",
            title: "Manufactured with the best materials",
            body: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        }
    ]

    let currentIndex = sliderData[index]

    function handlePrev() {
        setIndex(prev => { 
            if(prev === 0) {
            return  prev = sliderData.length -1 
            }
            return prev - 1
        })
    }

    function handleNext() {
        setIndex(prev => { 
            if(prev === sliderData.length -1) {
            return  prev = 0
            }
            return prev + 1
        })
    }

    const displaySlider = <div className="flex h-auto flex-col lg:flex-row">
            <div style={{ backgroundImage: `url(${currentIndex.coverImg})` }} className='bg-cover bg-center  lg:h-[60vh] lg:w-[60%] relative hidden lg:block'>
                <Header />
            </div>
            <div style={{ backgroundImage: `url(${currentIndex.mobileImg})` }} className='bg-cover bg-center  relative h-[50vh] w-[100%] lg:hidden flex-col flex'>
                <Header />
                <div className='mt-auto ml-auto'>
                <button className='bg-black text-white px-[20px] py-6 text-[2rem] hover:bg-[hsl(0,0%,27%)]' aria-label="previous" onClick={handlePrev}><FaAngleLeft /></button>
                <button className='bg-black text-white px-[20px] py-6 text-[2rem] hover:bg-[hsl(0,0%,27%)]'  aria-label="NEXT" onClick={handleNext}><FaAngleRight /></button>
                </div>
            </div>
            <div className="lg:w-[40%] flex flex-col py-10 lg:py-0">
                <div className='lg:w-[70%] m-auto w-[90%] my-4 lg:my-auto'>
                <h2 className="text-[2.5rem] font-[700] mb-2">{currentIndex.title}</h2>
                <p className='text-[hsl(0,0%,63%)] mb-6'>{currentIndex.body}</p>
                <a href="#" className='uppercase tracking-[7px] text-[1.2rem] flex items-center'>Shop now <FaArrowRightLong className='text-[hsl(0,0%,63%)] ' /></a>
                </div>
                <div className='lg:block hidden'>
                <button className='bg-black text-white px-[20px] py-6 text-[2rem] hover:bg-[hsl(0,0%,27%)]' aria-label="previous" onClick={handlePrev}><FaAngleLeft /></button>
                <button className='bg-black text-white px-[20px] py-6 text-[2rem] hover:bg-[hsl(0,0%,27%)]'  aria-label="NEXT" onClick={handleNext}><FaAngleRight /></button>
                </div>
            </div>
        </div>

 
    
  return (
    <div>
        {displaySlider}
    </div>
  )
}

export default Slider
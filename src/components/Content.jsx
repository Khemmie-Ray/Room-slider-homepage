import React from 'react'
import bgOne from '../assets/image-about-dark.jpg';
import bgTwo from '../assets/image-about-light.jpg';

const Content = () => {
  return (
    <main className='flex flex-col lg:flex-row lg:h-[35vh] h-auto'>
    <section style={{ backgroundImage: `url(${bgOne})` }} className='bg-cover bg-center lg:w-[30%] w-[100%] h-[35vh]'>
  </section>
    <section className='lg:w-[40%] flex flex-col w-[100%] h-[35vh]'>
      <div class="about-content w-[80%]  m-auto">
      <h2 className='lg:text-[1.5rem] text-[.9rem] uppercase tracking-[8px] my-4 font-[600]'>About our furniture</h2>
      <p className='text-[hsl(0,0%,63%)]'>Our multifunctional collection blends design and function to suit your individual taste.Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
    </div>
    </section>
    <section style={{ backgroundImage: `url(${bgTwo})` }} className='bg-cover bg-center bg-red-200 lg:w-[30%] w-[100%] h-[35vh]'>
  </section>
    </main>
  )
}

export default Content
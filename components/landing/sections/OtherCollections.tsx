import React from 'react'
import { Carousel } from '../ui/index';

export const OtherCollections = () => {
  return (
    <>
    <section id="other-collections" className="flex flex-row justify-between pb-10">
        <section className="w-full flex flex-col items-start justify-center mt-5 max-sm:px-[3rem] md:px-[7rem]">
            <h2 className="self-stretch relative text-3xl sm:text-6xl text-white text-justify font-poppins">Conoce nuestras otras <span className='text-violet-700'>colecciones.</span></h2>
        </section>
    </section>
    <Carousel/>
    </>
  )
}

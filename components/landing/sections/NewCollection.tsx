import React from 'react'
import Image from 'next/image'
import marsCover from '/public/mars-cover.webp'

export const NewCollection = () => {
  return (
    <section className="h-screen w-screen">
        <Image
          className="opacity-50 -z-10"
          alt=""
          src={marsCover}
          fill
        />
    <section id="new-collection" className="sm:flex flex-row justify-between pb-10">
          <section className="w-full sm:w-1/2 flex flex-col items-start justify-start mt-5 max-sm:px-[3rem] md:px-[7rem]">
            <section className="self-stretch flex flex-col items-start justify-start gap-2">
              <section className="self-stretch relative leading-normal">
                <h2 className="self-stretch relative text-3xl sm:text-6xl text-white text-justify font-poppins">Supera tus límites, conoce <span className='text-red-700 uppercase'>Marte.</span></h2>
              </section>
              <section className="self-stretch relative text-base sm:text-lg leading-normal text-white text-justify font-poppins">
                <article>El planeta rojo ha sido objeto de numerosas teorías y mitos a lo largo de la historia. Desde la creencia en la existencia de canales construidos por una civilización marciana hasta la especulación sobre la posibilidad de vida actual en Marte, ha capturado la imaginación de muchas personas.</article>
                <button className="relative leading-normal bg-red-700 text-white p-3 rounded-md my-5 sm:p-5 inline-block max-sm:w-full">Explorar</button>
              </section>
            </section>
          </section>
    </section>
    </section>
  )
}

import React from 'react'
import Image from 'next/image'
import vostokAstronaut from '/public/vostok-astronaut.webp'
import vostokLogo from '/public/vostok-logo.webp'

export const WhoAreWe = () => {
  return (
    <section id="who-are-we" className="sm:flex flex-row justify-between pb-10">
          <section className="w-full flex flex-col items-start justify-start mt-5 max-sm:px-[3rem] md:px-[7rem]">
            <section className="self-stretch flex flex-col items-start justify-start gap-2">
              <section className="self-stretch relative leading-normal">
                <h2 className="self-stretch relative text-3xl sm:text-6xl text-white text-justify font-poppins">¿Quiénes somos?</h2>
              </section>
              <section className="self-stretch relative text-base sm:text-lg leading-normal text-white text-justify font-poppins">
                <article className="mt-10">Vostok es un emprendimiento que se destaca por su temática principal de &#34;No conocer límites&#34;. Su misión es empoderar a las personas para que superen barreras y desafíen sus propios límites a través de la moda. La empresa se inspira en el espíritu audaz y aventurero, buscando transmitir esa pasión a través de sus diseños únicos y vanguardistas.</article>
                <section className="flex max-md:flex-row max-sm:flex-col gap-5 mt-10">
                  <Image
                    className="rounded-md md:w-1/2 max-sm:w-full h-auto"
                    alt=""
                    src={vostokAstronaut}
                    width="0"
                    height="0"
                  />
                  <Image
                    className="rounded-md md:w-1/2 max-sm:w-full h-auto"
                    alt=""
                    src={vostokLogo}
                    width="0"
                    height="0"
                  />
                </section>
              </section>
            </section>
          </section>
    </section>
  )
}

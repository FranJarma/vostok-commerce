import React from 'react'

export const Subscribe = () => {
  return (
    <section id="subscribe" className="w-full flex flex-col t-5 max-sm:px-[3rem] md:px-[7rem] text-center justify-center gap-10">
        <h3 className="block text-5xl text-white">Subscríbete para enterarte de nuestras <span className="text-violet-700">novedades</span>.</h3>
        <h4 className="text-xl text-white">Te mantendremos al tanto de todo el contenido nuevo que publiquemos, así como beneficios exclusivos.</h4>
        <div className="flex max-sm:flex-col max-sm:gap-4 flex-row text-center justify-center">
            <input className="p-5 max-sm:rounded-md border-none rounded-l-md max-sm:p-2 max-sm:w-30" placeholder="Ingresa tu Email"/>
            <button className="p-5 max-sm:rounded-md rounded-r-md text-white bg-violet-700 max-sm:p-2 max-sm:w-30">Subscribirme</button>
        </div>
    </section>

  )
}

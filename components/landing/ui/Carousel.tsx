"use client"
import Image, { StaticImageData } from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import marsCover from '/public/mars-cover.webp'
import gilesseCover from '/public/gilesse-cover.webp'
import keplerCover from '/public/kepler-cover.webp'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

interface Slide {
  url: StaticImageData,
  color: string,
  description: string,
  title: string
}

const slides: Slide [] = [
  {
    url: marsCover,
    color: "text-red-500",
    description: "Planeta Rojo",
    title: "Marte"
  },
  {
    url: gilesseCover,
    color: "text-teal-500",
    description: "Planeta Océano",
    title: "Gilesse"
  },
  {
    url: keplerCover,
    color: "text-orange-500",
    description: "Tierra 2.0",
    title: "Kepler"
  }
];

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showImageTitle, setShowImageTitle] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  }, [currentSlide]);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 5000)
  }, [nextSlide]);

  return (
    <>
    <figure onMouseOver={() => setShowImageTitle(true)} onMouseLeave={() => setShowImageTitle(false)} className='max-w-[1400px] h-[780px] w-full relative flex flex-row text-center justify-center m-auto mb-10'>
      <Image
        alt=""
        src={slides[currentSlide].url}
        className='w-full h-full rounded-2xl bg-center bg-cover transition-all ease-linear hover:opacity-50'
      />
      {
        showImageTitle ?
      <section className="absolute top-[50%] translate-y-[-50%]">
          <h3 className={`${slides[currentSlide].color} font-['Bakbak_One'] text-7xl uppercase`}>{slides[currentSlide].title}</h3>
          <figcaption className="text-white text-2xl">{slides[currentSlide].description}</figcaption>
      </section>
      : "" }
      <div className='block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </figure>
    <div className='flex justify-center mb-10'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        >
          <RxDotFilled className="text-white" />
        </div>
      ))}
    </div>
    </>
  )
}
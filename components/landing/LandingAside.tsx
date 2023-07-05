"use client"
import React, { HTMLAttributes } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useCheckbox, useViewport } from '../../hooks/index';
import { RiCloseFill, RiMenuLine, RiRocketFill } from "react-icons/ri";
import { scrollIntoView } from '@/utils';
import vostok from '/public/vostok.webp'

interface NavbarItem {
    id: string,
    name: string
}

const BREAKPOINT_SIZE: number = 768;
const NEW_COLLECTION: string = "Nueva colección";
const HOW_ARE_WE: string = "Quiénes somos";
const OTHER_COLLECTIONS: string = "Otras colecciones";
const CONTACT: string = "Subscribirse";
const GO_TO_STORE: string = "Ir a tienda";
const NAVBAR_ITEMS: NavbarItem [] = [
    {
        id: "new-collection",
        name: NEW_COLLECTION,
    },
    {
        id: "who-are-we",
        name: HOW_ARE_WE        
    },
    {
        id: "other-collections",
        name: OTHER_COLLECTIONS
    },
    {
        id: "subscribe",
        name: CONTACT
    }
];

export const LandingAside = () => {
  const { width } = useViewport();
  const { checkboxValue: openAside, handleChangeCheckbox: handleChangeAside } = useCheckbox();
  
  const Logo = ({ className }:  HTMLAttributes<HTMLElement>) => {
    return (
        <Link href="/">
            <Image src={vostok} alt="Vostok" width={200} height={50}/>
        </Link>
    )
  };

  return (
    <>
    {
        width > BREAKPOINT_SIZE ?
        <>
            <section className="flex justify-center items-center pt-10">
                <Logo/>
            </section>
            <header className="w-100 flex flex-row py-[1.75rem] items-center justify-center text-white font-poppins">
                <nav className="flex flex-row items-center justify-center gap-[2.5rem]">
                    {
                        NAVBAR_ITEMS.map(item => (
                            <span key={item.name}>
                                <a className="p-5 hover:border-b-4 border-violet-400 sm:text-xs sm:p-1 md:text-base cursor-pointer" onClick={() => scrollIntoView(item.id)}>{item.name}</a>
                            </span>
                        ))
                    }
                    <Link href="/shop" className="bg-violet-600 text-white rounded-md ml-auto sm:text-xs sm:p-3 md:text-base md:p-5">{GO_TO_STORE}</Link>
                </nav>
            </header>
        </>
            : 
            <>
                <header className={openAside ? 'bg-violet-950 fixed w-full z-10' : ''}>
                    <nav>
                        <button onClick={handleChangeAside} className="text-white rounded-md ml-auto p-5 ">{!openAside ? <RiMenuLine/> : <RiCloseFill/>}</button>
                    </nav>
                    {
                        openAside ? 
                        <aside className="backdrop-blur-sm fixed z-10 w-full h-full bg-violet-950">
                            <ul className="text-white p-5 text-center">
                                {
                                    NAVBAR_ITEMS.map(item=> (
                                        <li className="p-10 hover:bg-violet-400 rounded-md" key={item.name}>
                                            <a onClick={() => scrollIntoView(item.id)}>{item.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                            <section className="flex justify-center items-center pt-10">
                                <Logo/>
                            </section>
                        </aside>
                        : ""
                    }
                </header>
            </>
    }
    <section className="star__field">
        <section className="layer"></section>
        <section className="layer"></section>
        <section className="layer"></section>
    </section>
    </>
  )
}

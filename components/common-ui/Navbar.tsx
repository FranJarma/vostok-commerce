"use client"
import { useCheckbox, useViewport } from '../../hooks/index';
import React from 'react'
import { RiCloseFill, RiMenuLine, RiRocketFill } from "react-icons/ri";

interface NavbarItem {
    id: string,
    name: string
}

const BREAKPOINT_SIZE: number = 768;
const NEW_COLLECTION: string = "Nueva colección";
const HOW_ARE_WE: string = "Quiénes somos";
const OTHER_COLLECTIONS: string = "Otras colecciones";
const CONTACT: string = "Contacto";
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
        id: "contact",
        name: CONTACT
    }
];

const scrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
}

export const Navbar = () => {
  const { width } = useViewport();
  const { checkboxValue: openAside, handleChangeCheckbox: handleChangeAside } = useCheckbox();

  return (
    <>
        { width > BREAKPOINT_SIZE ?
            <header className="w-100 flex flex-row py-[1.75rem] items-center justify-center text-white font-poppins">
                <nav className="flex flex-row items-center justify-center gap-[2.5rem]">
                    {
                        NAVBAR_ITEMS.map(item => (
                            <span key={item.name}>
                                <a className="p-5 hover:border-b-4 border-violet-400 sm:text-xs sm:p-1 md:text-base" onClick={() => scrollIntoView(item.id)}>{item.name}</a>
                            </span>
                        ))
                    }
                    <button className="bg-violet-600 text-white rounded-md ml-auto sm:text-xs sm:p-3 md:text-base md:p-5">{GO_TO_STORE}</button>
                </nav>
            </header>
        : <header className={openAside ? 'bg-violet-950 fixed w-full z-10' : ''}>
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
                        <li className="p-10 hover:bg-violet-400 rounded-md flex justify-center text-center">
                            <RiRocketFill className="text-4xl"/>
                            <p>Vostok</p>
                        </li>
                    </ul>
                </aside>
                : ""
            }
          </header>
        }
        <section className="star__field">
            <section className="layer"></section>
            <section className="layer"></section>
            <section className="layer"></section>
        </section>
    </>
  )
}

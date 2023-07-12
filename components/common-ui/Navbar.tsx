"use client"
import React, { HTMLAttributes, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCheckbox, useViewport } from '../../hooks/index';
import { RiArrowDropDownLine, RiArrowDropUpLine, RiCloseFill, RiMenuLine } from "react-icons/ri";
import { scrollIntoView } from '@/utils';
import vostok from '/public/vostok.webp'
import * as CONSTANTS from "./../../constants";

export const Navbar = () => {
  const { width } = useViewport();
  const { checkboxValue: openAside, handleChangeCheckbox: handleChangeAside } = useCheckbox();
  const pathName = usePathname();
  const [openSubItems, setOpenSubItems] = useState<Record<string, boolean>>({});

  const Logo = ({ className }:  HTMLAttributes<HTMLElement>) => {
    return (
        <Link href="/">
            <Image src={vostok} alt="Vostok" width={200} height={50}/>
        </Link>
    )
  };

  const NAVBAR_ITEMS = pathName.includes("/shop") ? CONSTANTS.SHOP_NAVBAR_ITEMS : CONSTANTS.LANDING_NAVBAR_ITEMS;

  const handleMouseEnter = (itemName: string) => {
    setOpenSubItems((prevOpenSubItems) => ({
      ...prevOpenSubItems,
      [itemName]: true,
    }));
  };
  
  const handleMouseLeave = (itemName: string) => {
    setOpenSubItems((prevOpenSubItems) => ({
      ...prevOpenSubItems,
      [itemName]: false,
    }));
  };

  return (
    <>
    {
        width > CONSTANTS.BREAKPOINT_SIZE ?
        <>
            <section className="flex justify-center items-center pt-10">
                <Logo/>
            </section>
            <header className="w-100 flex flex-row py-[1.75rem] items-center justify-center text-white font-poppins">
                <nav className="flex flex-row items-center justify-center gap-[2.5rem]">
                {
                    NAVBAR_ITEMS.map((item) => (
                        <span className="p-5" key={item.name} onMouseEnter={() => handleMouseEnter(item.name)} onMouseLeave={() => handleMouseLeave(item.name)}>
                        {item.linkType === 'anchor' ? (
                            <a
                            className="p-5 hover:border-b-4 border-violet-400 sm:text-xs sm:p-1 md:text-base cursor-pointer"
                            onClick={() => scrollIntoView(item.id!)}
                            >
                            {item.name}
                            </a>
                        ) : (
                            <Link
                            href={item.href!}
                            className={item.buttonStyle ? "bg-violet-600 text-white rounded-md ml-auto sm:text-xs sm:p-3 md:text-base md:p-5" : "p-5 hover:border-b-4 border-violet-400 sm:text-xs sm:p-1 md:text-base cursor-pointer"}
                            >
                            {item.name}
                            </Link>
                        )}
                        {item.subItems && item.subItems.length > 0 && openSubItems[item.name] ? (
                            <ul className="p-5 mt-2 bg-gray-800 bg-opacity-70 absolute cursor-pointer">
                            {item.subItems.map((subItem) => (
                                <li className="pt-5 hover:border-b-4 border-white" key={subItem.name}>
                                    {subItem.name}
                                </li>
                            ))}
                            </ul>
                        ) : null}
                        </span>
                    ))
                }
                </nav>
            </header>
        </>
            : 
            <>
                <header className={openAside ? 'bg-violet-950 w-full z-10' : ''}>
                    <nav>
                        <button onClick={handleChangeAside} className="text-white rounded-md ml-auto p-5 ">{!openAside ? <RiMenuLine/> : <RiCloseFill/>}</button>
                    </nav>
                    {
                        openAside ? 
                        <aside className="backdrop-blur-sm fixed z-10 w-full h-full bg-violet-950">
                            <ul className="text-white p-5 text-center">
                                {
                                    NAVBAR_ITEMS.map(item=> (
                                        <>
                                        <span onClick={openSubItems[item.name] ? () => handleMouseLeave(item.name) : () => handleMouseEnter(item.name)}>
                                            <li className="p-6 hover:bg-violet-900" key={item.name}>
                                                <div className="flex flex-row justify-between">
                                                    <a onClick={() => scrollIntoView(item.id!)}>{item.name}</a>
                                                    {item.subItems && item.subItems.length > 0 && openSubItems[item.name] ? <RiArrowDropDownLine/> : null}
                                                    {item.subItems && item.subItems.length > 0 && !openSubItems[item.name] ? <RiArrowDropUpLine/> : null}
                                                </div>
                                            </li>
                                            {
                                                item.subItems && item.subItems.length > 0 && openSubItems[item.name] ?
                                                <ul className="bg-violet-950">
                                                    {
                                                        item.subItems && item.subItems.length > 0 ? item.subItems.map(subItem =>
                                                        <>
                                                            <li className="p-6 hover:bg-violet-900 rounded-md">
                                                                <a key={subItem.name}>{subItem.name!}</a>
                                                            </li>
                                                        </>
                                                        ) : null
                                                    }
                                                </ul>
                                            : null }
                                        </span>
                                        </>
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
    </>
  )
}

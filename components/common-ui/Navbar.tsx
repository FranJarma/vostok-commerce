"use client"
import React from 'react'
import { usePathname } from "next/navigation";
import { LandingAside } from '../landing/LandingAside';
import { ShopAside } from '../shop/ShopAside';
export const Navbar = () => {
  const pathName = usePathname();

  return (
    <>
        {
            pathName.includes("/shop") ? <ShopAside/> : <LandingAside/>
        }
    </>
  )
}

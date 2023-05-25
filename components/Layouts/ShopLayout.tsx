import React, { FC } from 'react'
import { Navbar } from '../ui/Navbar'
import Head from 'next/head'

interface Props {
  children: React.ReactNode
  description: string,
  title: string,
  imageFullUrl?: string,
}

export const ShopLayout: FC<Props> = ({ children, description, title, imageFullUrl }) => {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="description">{description}</meta>
      <meta name="og:title" content={title}></meta>
      <meta name="og:description" content={description}></meta>
      {
        imageFullUrl && (<meta name="og:image" content={imageFullUrl}/>)
      }
      <meta></meta>
    </Head>
    <Navbar/>
      <main>
        {children}
      </main>
    </>
  )
}

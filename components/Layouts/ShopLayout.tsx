import React, { FC } from 'react'
import Head from 'next/head'
import { Navbar, Footer } from '../common-ui'

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
      <Footer/>
    </>
  )
}

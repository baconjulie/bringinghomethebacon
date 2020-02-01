import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const WeddingParty = () => (
  <div>
    <Head>
      <title>Wedding Party</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Wedding Party</h1>
    </div>
  </div>

)

export default WeddingParty

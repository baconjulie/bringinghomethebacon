import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const OurStory = () => (
  <div>
    <Head>
      <title>Our Story</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Our Story</h1>
    </div>
  </div>

)

export default OurStory

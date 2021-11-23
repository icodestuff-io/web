import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'
import HomePage from '../components/Pages/Home/HomePage'

const Home: NextPage = () => {
  const title = 'Icodestuff | Inspiration for your next project'
  const description = 'Icodestuff provides a way for developers, designers and founders to ' +
    'collaborate and draw inspiration from each other to work on cool & creative ideas.'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomePage />
    </>
  )
}

export default Home

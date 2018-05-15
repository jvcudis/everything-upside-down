import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'

class Layout extends React.Component {
  render () {
    return (
      <div className='layout'>
        {this.props.children}
      </div>
    )
  }
}

export default class MainApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Everything Upside Down</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Layout>
          <Header />
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

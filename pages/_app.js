import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
          <div id='wrapper'>
            <Header />
            <div id='content'>
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </Layout>
        <style jsx>{`
          #wrapper {
            height: 100vh;
            display: flex;
            flex-direction: column;
          }

          #content {
            flex: 1;
            background: url('/static/global/bg1.png') repeat;
          }
        `}</style>
      </Container>
    )
  }
}

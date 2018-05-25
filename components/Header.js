import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className='logo-container'>
        <Link href='/'><a><img className='logo' src='/static/global/cake_logo.svg' /></a></Link>
      </div>
      <nav className='nav-container'>
        <a className='home-icon' href='/'>⌂</a>
        <ul>
          <li>
            <Link href='/recipes'><a>Recipes</a></Link>
          </li>
          <li>
            <Link href='/about'><a>About</a></Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
        }

        a {
          color: #000;
          text-decoration: none;
        }

        a.home-icon {
          font-size: 40px;
        }

        img.squiggle {
          position: absolute;
          top: 100px;
          left: -50px;
        }

        ul {
          list-style-type: none;
        }

        ul > li {
          display: inline-block;
        }
      `}
      </style>
    </header>
  )
}

export default Header

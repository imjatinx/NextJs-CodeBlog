import React from 'react'
import Head from 'next/head'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <span className={styles.logo}>CODE BLOG</span>
        <ul className={styles.menu}>
          <Link href='/'>
          <li className={styles.active}>Home</li>
          </Link>
          <Link href='/about'>
          <li>About</li>
          </Link>
          <Link href='/contact'>
          <li>Contact</li>
          </Link>
          <Link href='/blog'>
          <li>Blogs</li>
          </Link>
        </ul>
      </div>
    </>

  )
}

export default Navbar
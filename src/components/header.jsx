'use client';

import Link from "next/link";
import "../sytles/components/header.scss";
import { BsList } from "react-icons/bs";
import React from "react";

export default function Header () {
  const refHeader = React.createRef();
  return (
    <header ref={refHeader} className='pa-header'>
      <div className='container'>
        <Link href="/" className='pa-header__title'>Paper View</Link>
        <button className="button button--icon" onClick={() => refHeader.current.classList.toggle("open")} aria-label="Open Header Menu Navigation">
          <BsList/>
        </button>
        <div className='pa-header__menu'>
          <Link href="/about">About Us</Link>
          <Link href="/about/history">History</Link>
          <Link href="/products/paper">Paper</Link>
          <Link href="/contact/social-media">Social Media</Link>
          <Link href="/news">News</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
}

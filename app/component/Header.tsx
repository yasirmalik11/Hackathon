import React from 'react';
import { FaHome, FaShoppingCart, FaHeart, FaSearch, FaSignInAlt } from 'react-icons/fa';
import Link from 'next/link';
import '../globals.css';

export default function Header() {
  return (
    
    
    <header>
      <div className="logo">
        <h1>Bandage</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">
               Home
            </Link>
          </li>
          <li>
            <Link href="/Shop">
                Shop
            </Link>
          </li>
          <li>
            <Link href="/About">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Pages
            </Link>
          </li>
        </ul>
      </nav>
      <div className="icons">
        <Link href="/signin">
          <FaSignInAlt />
        </Link>
        <Link href="/search">
          <FaSearch />
        </Link>
        <Link href="/cart">
          <FaShoppingCart />
        </Link>
        <Link href="/favorites">
          <FaHeart />
        </Link>
      </div>
    </header>
  );
  
}

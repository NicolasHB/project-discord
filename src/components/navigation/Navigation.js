import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import ItemNav from './ItemNav';
import { navcolor } from '../../helper/Helper';
import Hamburger from './Hamburger';

export default function Navigation() {
    const items = [
        {
            name: "Home",
            slug: "/",
            id: 1,
        },
        {
            name: "Login",
            slug: "/Login",
            id: 2,
        },
        {
            name: "Nitro",
            slug: "/Nitro",
            id: 3,
        },
        {
            name: "Securite",
            slug: "/Securite",
            id: 4,
        },
    ];

  return (
    <nav className="bg-discord-blue ">
      <div className="container flex justify-between items-center py-7">
        <div className="logot  ">
          <Link to="/">
            <img
              src="logo-titre.png"
              className=" "
              alt="icone-discord"
              width={160}
              height={35}
            />
          </Link>
        </div>
        <ul className="flex space-x-5 text-white font-bold">
          {items.map((item) => (
            <ItemNav slug={item.slug} key={item.id} name={item.name} />
          ))}
        </ul>
        <div className="position-button ">
          <Link to="/login" className="bg-white p-2 rounded-full text-xs">
            Se Connecter
          </Link>
        </div>
        <div className="lg:hidden">
          <Hamburger />
        </div>
      </div>
    </nav>
  );
}


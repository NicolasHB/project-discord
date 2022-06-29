import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import ItemNav from './ItemNav';
import { navcolor } from '../helper/Helper';
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
    <header className='container'>
        <NavContainer>
            <div className="logot  ">
                <Link to= "/">
                    <p href=""> <img src="logo-titre.png" className=' color:#5865f2' alt="icone-discord" width={160} height={35} /> </p>
                   
                </Link>
            </div>
            <div className="position-button">
                <a href="/login" className="button-nav">Se Connecter</a>
            </div> 
            <div className="">  
                <ul>
                    {items.map((item) => (
                        <ItemNav slug={item.slug} key={item.id} name={item.name} />
                    ))}
                </ul>
            </div>
            <div className="lg:hidden">
                <Hamburger/>
            </div>
        </NavContainer>
    </header>
  );
}

const NavContainer = styled.nav`
display: flex;
justify-content: space-between;
background-color: ${navcolor.bgcolor};
flex-direction: row;



.logot{
    display: flex;
    align-items: center;
    justify-content: center;
}
.button-nav{
    background-color: #fff;
    border-radius: 2rem;
    text-decoration: none;
    border-color: #fff;
    border-style: solid;
    border-top-width: 0.5rem;
    border-bottom-width:0.5rem ;
    border-left-width: 0.5rem;
    border-right-width: 0.5rem;
   

}
.position-button{
    display: flex;
    align-items: center;
}

`;

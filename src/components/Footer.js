import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";


export default function () {
  return (
    <FooterContainer>
        <div className="bg-Footer container">
            <div className="text-blue">
                <h2>Imagine un endroit </h2>
            </div>
            <div className="flex ">
                {/* Produit */}
                <ul>
                    <li className='text-blue'>Produit</li>
                    <li className='text-white'>Télécharger</li>
                    <li className='text-white'>Nitro</li>
                    <li className='text-white'>Statut</li>
                </ul>
                {/* Entreprise */}
                <ul>
                    <li className='text-blue'>Entreprise</li>
                    <li className='text-white'>À propos</li>
                    <li className='text-white'>Emplois</li>
                    <li className='text-white'>Charte graphique</li>
                    <li className='text-white'>Espace actualités</li>
                </ul>
                {/* Ressources */}
                <ul>
                    <li className='text-blue'>Ressources</li>
                    <li className='text-white'>Université</li>
                    <li className='text-white'>Assistance</li>
                    <li className='text-white'>Sécurité</li>
                    <li className='text-white'>Blog</li>
                    <li className='text-white'>Commentaires</li>
                    <li className='text-white'>Développeurs</li>
                    <li className='text-white'>StreamKit</li>
                </ul>
                {/* Chartes */}
                <ul>
                    <li className='text-blue'>Chartes</li>
                    <li className='text-white'>Conditions</li>
                    <li className='text-white'>Confidentialité</li>
                    <li className='text-white'>Paramètres des cookies</li>
                    <li className='text-white'>Charte d'utilisation</li>
                    <li className='text-white'>Remerciements</li>
                    <li className='text-white'>Licences</li>
                    <li className='text-white'>Modération</li>
                </ul>
            </div>
            {/* div de séparation */}
            <div className="divide-y-8 "></div>
            <div className=" End-footer">
                <Link to= "/">
                        <img src="logo-titre-NB.png" className=' color:#5865f2' alt="logo discord noir et blanc" width={160} height={40} /> 
                </Link>
                <a href="" className='button-footer button-location text-white flex flex-row-reverse'>je m'inscrit</a>
            </div>
        </div>
        
    </FooterContainer>
  );
}
const FooterContainer = styled.footer`

.bg-Footer{
    background-color: #23272a;
}
.text-white{
    color : #fff;
}
.text-blue{
    color: #5865f2;
}
.button-footer{
    background-color: #5865f2;
    /* border: 4rem; */
    border-radius: 4rem;
    border : 3rem ;
    color : #fff;
    text-decoration: none;
    border-color: #5865f2;
    border-style: solid;
    border-top-width: 0.5rem;
    border-bottom-width:0.5rem ;
    border-left-width: 0.5rem;
    border-right-width: 0.5rem;

}
.End-footer{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 2rem;

}
`;

import React from 'react';
import styled from 'styled-components';



export default function Card(){
    return(
        <CardHome>
          <div className="container">
            {/* Partie 1 */}
            <div className=" bg-blue-hero container-hero container">
              <h1 className='h1-hero uppercase'>Imagine un endroit...</h1>
              <div className="text-hero ">
                  <p className='text-left'>
                      …où tu pourrais faire partie d'un club scolaire, d'un groupe de gamers ou d'une communauté d'art internationale. 
                      Un endroit où toi et ta bande d'amis pouvez simplement passer du temps ensemble. 
                      Un endroit qui permettrait plus facilement de discuter tous les jours et de se retrouver plus souvent.
                  </p>
              </div>
              {/* BUTTON */}
              <div className="position-button">
                <a className='btn-Mac ' href="/">Télécharger pour Mac</a>
                <a className='btn-open-nav ' href="/">Ouvrir Discord dans ton navigateur</a>
              </div>
              {/* PICTURE */}
            <div className="static container flex">
              <img className='img-none img-moun absolute z-0' src="fond-home.svg" alt="fond-montagne" />
              <img className='img-none object-left-bottom z-20 absolute bottom-0 left-0' src="hero-left.svg" alt="picture-left" />
              <img className='img-none ml-0 right-0 object-contain z-10 object-right-bottom absolute bottom-0 righ-0' src="hero-right.svg" alt="picture-right" />
            </div>
            </div>
            {/* Bloc 1 : create space */}
            <div className="grid-flow-row"> 
              <div className="columns-2">
                <img className='' src="Home-bloc-1.svg" alt="create space" />
                <div className=" text-center">
                  <h2 className='font-bold text-5xl'>Crée un espace accessible uniquement sur invitation où tu te sens bien</h2>
                  <p className=''>
                    Les serveurs Discord sont organisés en salons axés sur des sujets où vous pouvez collaborer, 
                    partager et simplement discuter de votre journée sans encombrer un groupe de discussion.
                  </p>
                </div>
              </div>
            </div>
            {/* Bloc 2 : time */}
            <div className="grid-flow-row bg-slate-200">
              <div className="columns-2">
              <h2 className='font-bold text-5xl'>Là où il est facile de passer du temps ensemble</h2>
              <p className='text-center'>
                Prends place dans un salon vocal quand tu es libre. 
                Les amis dans ton serveur peuvent voir que tu es là et immédiatement 
                te rejoindre sans avoir besoin d'appeler.
              </p>
              <img src="voice-connect.svg" alt="tchat-voice-connect" />
              </div>
            </div>
            {/* Bloc 3 : communauté */}
            <div className="grid-flow-row"> 
              <div className=" columns-2">
              <img src="communauté.svg" alt="Communautary-space" />
                <h2 className='font-bold text-5xl'>De quelques personnes à toute une communauté</h2>
                <p>
                  Gère n'importe quelle communauté, grâce à des outils de modération et des permissions personnalisées pour les membres.
                  Accorde des pouvoirs spéciaux aux membres, crée des salons privés, et plus encore.
                </p>
              </div>
            </div>
            {/* Bloc 4 : technologie */}
            <div className="">
              <div className="">
                <h2 className='font-bold text-5xl text-center'>UNE TECHNOLOGIE FIABLE POUR GARDER LE LIEN</h2>
                <p className='text-center'>
                  Grâce aux chats vocaux et vidéo à faible latence, les interlocuteurs ont l'impression d'être dans la même pièce. 
                  Fais un petit coucou par vidéo, regarde tes amis streamer leurs jeux, 
                  ou profitez du partage d'écran pour faire une session de dessin ensemble.
                </p>
              </div>
              <img src="call.svg" alt="call desktop and mobile" />
            </div>
            {/* Bloc 5 : let's go adventure */}
              <div className="">
                <div className="">
                  <img className='pl-32 ' src="stars-end.svg" alt="" />
                </div>
                <h4 className='font-bold text-3xl text-center'>On se lance dans l'aventure ?</h4>
                <div className="position-button">
                <a className='button-blue ' href="">Téléchargement pour Mac</a>
                </div>
              </div>
          </div>  
        </CardHome>
    );
}

const CardHome = styled.main`
/* top pages */
.container-hero{
  display: block;
}
.h1-hero{
  text-align: center;
  margin-top: 0em;
}
.text-hero{
  text-align:left;
  line-height: 1.625;
  margin: 1rem;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 1rem;
  
}
.bg-blue-hero{
  background-color: #5865f2 ;
}
/* Button top */
.btn-Mac{
 
  color: #23272a;
  text-align: center;
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
.btn-open-nav{
  
  color: #fff;
  text-align: center;
  background-color: #23272a;
  border-radius: 2rem;
  text-decoration: none;
  border-color: #23272a;
  border-style: solid;
  border-top-width: 0.5rem;
  border-bottom-width:0.5rem ;
  border-left-width: 0.5rem;
  border-right-width: 0.5rem;
}
.position-button{
    display: flex;
    justify-content: center;
}
/* Pictures top */
.container-img{
  /* position: relative; */
}

.img-mount{
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
  
}

.img-none{
  /* display: block;
  width: 100%;
  max-width: 600px;
  position: absolute;
  z-index: 2;
  margin-left: -80px;*/
  display: none; 
  /* margin-right: 1rem; */

}
.img-top{
  /* position: absolute; */
  bottom: 0;
  /* display: none; */
  /* z-index: 2; */
  height: 11rem;
}
.text-bloc-right{
  text-align: center;
  justify-content: center;
}
.button-blue{
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
`;
 


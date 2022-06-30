import React from 'react'
import styled from 'styled-components';

export default function HomeHero() {
  return (
    <section className=" bg-discord-blue h-screenj py-32 flex flex-col justify-center items-center">
      <h1 className=" uppercase text-center text-6xl font-black text-white py-10">
        Imagine <br /> un endroit...
      </h1>
      <div className="container max-w-2xl">
        <p className="text-center text-gray-50">
          …où tu pourrais faire partie d'un club scolaire, d'un groupe de gamers
          ou d'une communauté d'art internationale. Un endroit où toi et ta
          bande d'amis pouvez simplement passer du temps ensemble. Un endroit
          qui permettrait plus facilement de discuter tous les jours et de se
          retrouver plus souvent.
        </p>
      </div>
      <div className=" flex justify-around py-10">
        <a className="rounded-full p-2 bg-white m-5 " href="/">
          Télécharger pour Mac
        </a>
        <a className="rounded-full p-2 bg-black text-white m-5 " href="/">
          Ouvrir Discord dans ton navigateur
        </a>
      </div>
      <div class="bg-[url('../public/fond-home.svg')] bg-cover h-20 w-20 z-0 "></div>
      
    </section>
  );
}

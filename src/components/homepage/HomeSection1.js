import React from 'react'

export default function HomeSection1() {
  return (
      <section className="py-12 ">
        <div className="columns-2 p-5 m-10">
          <img className="" src="Home-bloc-1.svg" alt="create space" />
          <div className=" text-left max-w-5xl ">
            <h2 className=" text-5xl uppercase font-bold">
              Crée un espace accessible uniquement sur invitation où tu te sens
              bien
            </h2>
            <p className="py-5 text-left">
              Les serveurs Discord sont organisés en salons axés sur des sujets
              où vous pouvez collaborer, partager et simplement discuter de
              votre journée sans encombrer un groupe de discussion.
            </p>
          </div>
        </div>
      </section>
  );
}

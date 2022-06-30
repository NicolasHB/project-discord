import React from 'react'

export default function HomeSection2() {
  return (
    <div className="py-14 bg-slate-100">
      <div className="columns-2 p-5 m-10  ">
        <h2 className="font-bold text-5xl uppercase p-8">
          Là où il est facile de passer du temps ensemble
        </h2>
        <p className="text-left m-">
          Prends place dans un salon vocal quand tu es libre. Les amis dans ton
          serveur peuvent voir que tu es là et immédiatement te rejoindre sans
          avoir besoin d'appeler.
        </p>
        <img src="voice-connect.svg" alt="tchat-voice-connect" />
      </div>
    </div>
  );
}

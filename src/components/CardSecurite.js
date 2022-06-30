import React from 'react';
import styled from 'styled-components';

export default function Card() {
  return (
    <CardSecurite>
        <div className="">
            <div className="">
                <h1>Centre de sécurité de Discord</h1>
            </div>
            <div className="">
                <img src="Sécurité.svg" alt="outil-sécurité" />
            </div>

        </div>
    </CardSecurite>
  );
}

const CardSecurite = styled.div`
`;
"use client";
import styled from "styled-components";
import React from 'react';


const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 22%;
  background: var(--color-bg-card);
  padding: 1rem;
  border-radius: 1rem;
  gap: 1rem;
  -webkit-box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.54);
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.54);

  // Tela de celular
@media (max-width: 768px) {
  .card{
    width: 90%;
  }
}


  `;

  

const Produto = styled.img`
  object-fit: contain;
  width: 100%;
  height: 20rem;
  `;

const Title = styled.p`
  color: black;
  `;

  const Comprar = styled.button`

  

  background-color: #0F52BA;

  `;



export const ProdutoCard = () => {
  return (
    <Card>

      
      <Produto className="Home_Logo"   />

      

      <Title>title</Title>

      <Comprar> Comprar</Comprar>
      
    </Card>
  )
}

export default ProdutoCard
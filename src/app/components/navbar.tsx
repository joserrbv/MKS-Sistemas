"use client";
import { TiShoppingCart } from "react-icons/ti";
import styled from "styled-components";

const Maka = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0f52ba;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;

  height: 101px;
  width: 100%;
`;

const Mikael = styled.div`
  display: flex;
  align-items: baseline;
  padding: 0px 0px 0px 7%;

  @media (max-width: 280px) {
    padding: 0px 0px 0px 1px;
  }
`;

const Make = styled.h1`
  font-size: 40px;
  line-height: 19px;
`;

const Makee = styled.p`
  font-size: 20px;
  line-height: 19px;
`;

const Careta = styled.h4`
  color: black;
  width: 60px;
`;

const Carete = styled.h4`
  color: black;
  width: 60px;
`;

const Diva = styled.div`
  display: flex;
  background-color: #ffffff;
  align-items: center;
  border-radius: 8px;
  text-align: center;
  width: 90px;
  height: 45px;
  margin: 0px 7% 0px 0px;

  @media (max-width: 280px) {
    margin: 0 1px 0 0;
  }
`;

export default function Navbar() {
  return (
    <Maka>
      <Mikael>
        <Make>MKS</Make>
        <Makee>Sistemas</Makee>
      </Mikael>

      <Diva>
        <Careta>
          <TiShoppingCart />
        </Careta>
        <Carete> 0 </Carete>
      </Diva>
    </Maka>
  );
}

import styled from "styled-components";

const Divalda = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 100%;
  background-color: #eeeeee;
  margin-top: 990px;
`;

const Title = styled.p`
  font-size: 12px;
  color: #000000;
`;

export default function Footer() {
  return (
    <Divalda>
      <Title>MKS sistemas Todos os direitos reservados</Title>
    </Divalda>
  );
}

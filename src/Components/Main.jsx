import styled from "styled-components";
import { useState } from "react";
import Default from "./Default";
import Active from "./Active";

const Main = () => {
  const [ reciveMaxPrice, setReciveMaxPrice ] = useState('');

  const maxPriceData = (data) => {
    setReciveMaxPrice(data);
  }

  return (
    <Container>
      <MaxPriceContainer>
        <FoodCost>한 달에 사용할 식비 :</FoodCost>
        {reciveMaxPrice !== '' ? (<Active maxPriceProps={reciveMaxPrice}/>) : (<Default receiveMaxPrice={maxPriceData}/>)}
      </MaxPriceContainer>
    </Container>
  )
}

const Container = styled.main`
  margin-top: 20px;
`;

const MaxPriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FoodCost = styled.span`
  font-size: 20px;
`;

export default Main;
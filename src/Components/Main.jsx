import styled from "styled-components";
import { useState } from "react";
import Infancy from "./Infancy";
import MaxPriceActive from "./MaxPriceActive";
import FoodCost from "./FoodCost";
import History from "./History";

const Main = () => {
  const [ reciveMaxPrice, setReciveMaxPrice ] = useState('');

  const maxPriceData = (data) => {
    setReciveMaxPrice(data);
  }

  return (
    <Container>
      {reciveMaxPrice !== ''
        ? (
          <>
            <MaxPriceContainer>
              <FoodCostTitle>한 달에 사용할 식비 :</FoodCostTitle>
              <MaxPriceActive maxPriceProps={reciveMaxPrice}/> 
            </MaxPriceContainer>
            <FoodCost />
            <History />
          </>
        ) 
        : ( 
          <MaxPriceContainer>
            <FoodCostTitle>한 달에 사용할 식비 :</FoodCostTitle>
            <Infancy receiveMaxPrice={maxPriceData}/> 
          </MaxPriceContainer>  
        )
      }
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

const FoodCostTitle = styled.span`
  font-size: 20px;
`;

export default Main;
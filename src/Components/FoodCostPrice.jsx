import { useState } from "react";
import styled from "styled-components";

const FoodCostPrice = () => {
  const [ foodPrice, setFoodPrice ] = useState('');

  const foodPriceValue = e => {
    setFoodPrice(e.target.value);
  }
  return (
    <>
      <FoodCostInput onChange={foodPriceValue} value={foodPrice} />
      <FoodCostBtn>저장하기</FoodCostBtn>
    </>
  )
}

const FoodCostInput = styled.input`
  margin: 0 10px;
`;

const FoodCostBtn = styled.button`
  padding: 3px;
  border: 1px solid #000;
`;

export default FoodCostPrice;
import styled from "styled-components";
import Category from "./Category";
import FoodCostPrice from "./FoodCostPrice";

// Select 박스와 input의 부모 컴포넌트
const FoodCost = () => {
  return (
    <Container>
      <Category />
      <FoodCostPrice />
    </Container>
  )
}

export default FoodCost;

const Container = styled.div`
  display: flex;
  margin: 20px 0;
`;
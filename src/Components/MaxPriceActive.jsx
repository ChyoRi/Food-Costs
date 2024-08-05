import styled from "styled-components";

// 유저가 식비를 입력하고 나서의 화면 컴포넌트
const MaxPriceActive = (props) => {
  return (
    <>
      <MaxPriceText>{props.maxPriceProps}원</MaxPriceText>
    </>
  )
}

export default MaxPriceActive;

const MaxPriceText = styled.span`
  margin-left: 10px;
  font-size: 20px;
`;
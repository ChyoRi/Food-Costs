import styled from "styled-components";

const Active = (props) => {
  return (
    <>
      <MaxPriceText>{props.maxPriceProps}원</MaxPriceText>
    </>
  )
}

export default Active;

const MaxPriceText = styled.span`
  margin-left: 10px;
  font-size: 20px;
`
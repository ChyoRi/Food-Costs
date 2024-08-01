import { useState } from "react";
import styled from "styled-components";

const Default = (props) => {
  const [ priceValue, setPriceValue ] = useState('');

  // MaxPrice Input Value 함수
  const priceValueInput = e => {
    setPriceValue(e.target.value);
  }

  // 저장하기 버튼을 클릭했을 때 MaxPrice를 부모 컴포넌트에게 Props를 전달하는 함수
  const saveMaxPrice = () => {
    props.setMaxPrice(parseInt(priceValue));
  }

  return (
    <>
      <MaxInput onChange={priceValueInput} value={priceValue} />
      <MaxPriceBtn type="button" onClick={saveMaxPrice}>저장하기</MaxPriceBtn>
    </>
  )
}

export default Default;

const MaxInput = styled.input`
  margin: 10px;
  height: 27px;
`;

const MaxPriceBtn = styled.button`
  padding: 3px;
  border: 1px solid #000;
`;
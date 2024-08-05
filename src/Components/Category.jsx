import styled from "styled-components";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

// 유저가 점심,저녁,간식으로 식비를 썼는지에 대한 셀렉트 박스 컴포넌트
const Category = () => {

  const [ isActive, setIsActive ] = useState(false);
  const [ selectCategory, setSelectCategory ] = useState('분류');

  const onActive = () => {
    setIsActive(!isActive);
  }

  const categorySelect = (categoryName) => {
    setSelectCategory(categoryName)
    setIsActive(false);
  }

  const categoryArr = [
    { id: 1, categoryName: '점심'},
    { id: 2, categoryName: '저녁'},
    { id: 3, categoryName: '간식'}
  ];

  return(
    <CategoryFrame>
      <CategoryBtn type="button" onClick={onActive}>
        <CategoryText>{selectCategory}</CategoryText>
        {isActive ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </CategoryBtn>
      <CategoryList isActive={isActive}>
        {categoryArr.map(item => (
          <CategoryItem 
            key={item.id}
            onClick={() => categorySelect(item.categoryName)}
          >
            {item.categoryName}
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryFrame>
  )
}

export default Category;

const CategoryFrame = styled.div`
  position: relative;
  width: 100px;
`;

const CategoryBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  padding: 0 10px;
`;

const CategoryText = styled.span`
  font-size: 16px;
`;

const ArrowDownIcon = styled(MdOutlineKeyboardArrowDown)`

`;

const ArrowUpIcon = styled(MdKeyboardArrowUp)`
  
`;

const CategoryList = styled.ul`
  position: absolute;
  top: 100%;
  display: ${props => (props.isActive ? 'blcok' : 'none')};
  width: 100%;
  border: 1px solid #000;
  border-top: none;
`;

const CategoryItem = styled.li`
  padding: 3px 10px;

  &:hover {
    background-color: #eee;
  }
`;
import styled from 'styled-components';
import icon from '../assets/images/cost.png';

const Header = () => {
  return (
    <Container>
      <Icon src={icon} alt="식비 아이콘" />
      <Title>식비 계산기</Title>
    </Container>
  )
}

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 80px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-left: 20px;
`;

{/* <header>
  <img src={icon} alt="헤더 아이콘" />
  <h1>식비계산기</h1>
</header> */}
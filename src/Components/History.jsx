import styled from "styled-components";

const History = () => {
  
  const calendar = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
  }

  return (
    <Container>
      <HistoryTitle>{}월 식비 사용 내역</HistoryTitle>
    </Container>
  )
}

export default History;

const Container = styled.div`
  
`

const HistoryTitle = styled.h2`

`;
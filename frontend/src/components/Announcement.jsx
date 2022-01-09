import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #a4ce3a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over ر.ق200</Container>;
};

export default Announcement;

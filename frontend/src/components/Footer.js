import React from "react";
import { Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import logo from "../img/logo.jpg";
import { mobile } from "./responsive";

// const Footer = () => {
//   return (
//     <footer>
//       <Container>
{
  /* <Row>
  <Col className="text-center py-3">Copyright &copy; 8Senses </Col>
</Row>; */
}
//       </Container>
//     </footer>
//   )
// }

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: #0e97d1
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.p`
  width: 50%;
  font-weight: 600;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>
            <img
              src={logo}
              width="80"
              height="45"
              className="d-inline-block align-top"
            />
          </Logo>
          <Desc>
            8senses eshop is a one stop solution for all educational, sensory
            and therapeutic needs. We not only provide you with the product, but
            are also available to answer your queries and help you pick what is
            best for your child.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <LinkContainer to="/">
              <ListItem>Home</ListItem>
            </LinkContainer>
            <LinkContainer to="/cart">
              <ListItem>Cart</ListItem>
            </LinkContainer>
            <LinkContainer to="/profile">
              <ListItem>My Account</ListItem>
            </LinkContainer>
            <LinkContainer to="/about-us">
              <ListItem>About Us</ListItem>
            </LinkContainer>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          {/* <ContactItem>
            <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
            Tobinchester 98336
          </ContactItem> */}
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +(974)66178767
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            info@8senseseshop.com
          </ContactItem>
          <Payment>Cash On delivery available!!</Payment>
        </Right>
      </Container>
      <Row className="text-center py-3 copyright">Copyright &copy; 8Senses</Row>
    </>
  );
};

export default Footer;

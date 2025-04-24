import React from 'react';
import styled from 'styled-components';
import Shoes from '../../assets/71OEQwAu0-L._AC_UF1000_1000_QL80_-removebg-preview.png';

const cartItems = [
  {
  id: 1,
     title: "ASIAN Men's Cosco-13 Sports Running Shoe",
     image: `${Shoes}`,
     size: '6 UK',
     color: 'Multicolor2',
     price: 679,
     quantity: 1,
     warning: true,
  },
  {
    id: 1,
       title: "ASIAN Men's Cosco-13 Sports Running Shoe",
       image: `${Shoes}`,
       size: '6 UK',
       color: 'Multicolor2',
       price: 679,
       quantity: 1,
       warning: true,
  }
];

const ShoppingCart = () => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const delivery = 20;
  const discount = 10;
  const total = subtotal + delivery - discount;

  return (
    <Wrapper>
      <Heading>Shopping Cart</Heading>
      <CartContainer>
        <Left>
          <Section>
            <StepLabel>A LOGIN ✓</StepLabel>
            <UserDetails>
              <strong>Michael Smith</strong> <span>+806 - 445 - 4453</span>
              <ChangeBtn>CHANGE</ChangeBtn>
            </UserDetails>
          </Section>

          <Section>
            <StepLabel>B SHIPPING ADDRESS</StepLabel>
            <Form>
              <Row>
                <Input placeholder="First Name" defaultValue="Michael" />
                <Input placeholder="Last Name" defaultValue="Smith" />
              </Row>
              <Row>
                <Input placeholder="Address" defaultValue="234 HK , Avenue Lake city, Uttah" />
                <Input placeholder="Apt, Suite" defaultValue="23H - UN3" />
              </Row>
              <Row>
                <Input placeholder="City" defaultValue="Lake city, Uttah" />
                <Input placeholder="Country" defaultValue="United States" />
              </Row>
              <Row>
                <Input placeholder="Postal Code" defaultValue="230" />
              </Row>
              <Row>
                <label><input type="radio" name="addressType" /> Home (All Day Delivery)</label>
                <label><input type="radio" name="addressType" defaultChecked /> Office (10 AM - 5 PM)</label>
              </Row>
              <Row>
                <PrimaryBtn>Save And Deliver Here</PrimaryBtn>
                <CancelBtn>Cancel</CancelBtn>
              </Row>
            </Form>
          </Section>
        </Left>

        <Right>
          <OrderTitle>Your Order</OrderTitle>
          {cartItems.map(item => (
            <OrderItem key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <small>Size: {item.size} | Color: {item.color}</small>
                <strong>${item.price.toFixed(2)} x {item.quantity}</strong>
              </div>
            </OrderItem>
          ))}
          <Summary>
            <p>Delivery: <span>${delivery}</span></p>
            <p>Discount: <span>-${discount}</span></p>
            <Total>Total: <strong>${total}</strong></Total>
          </Summary>
        </Right>
      </CartContainer>
    </Wrapper>
  );
};

export default ShoppingCart;

const Wrapper = styled.div`
  padding: 40px;
  background: #f4f4f4;
  min-height: 90vh;
  margin-top: 60px;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom:10px;
`;

const CartContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 2;
  background: white;
  padding: 24px;
  border-radius: 12px;
`;

const Right = styled.div`
  flex: 1;
  background: white;
  padding: 24px;
  border-radius: 12px;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const StepLabel = styled.h4`
  margin-bottom: 16px;
  font-weight: 600;
`;

const UserDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

const ChangeBtn = styled.button`
  background: transparent;
  color: #000;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 14px;
  margin: 8px 0;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const PrimaryBtn = styled.button`
  background: #000;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const CancelBtn = styled.button`
  background: transparent;
  color: #000;
  padding: 12px 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
`;

const OrderTitle = styled.h3`
  margin-bottom: 16px;
`;

const OrderItem = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 8px;
    background: #eee;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 17px;
  }
`;

const Summary = styled.div`
  margin-top: 16px;

  p {
    font-size:15px ;
    display: flex;
    justify-content: space-between;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-top: 12px;
`;

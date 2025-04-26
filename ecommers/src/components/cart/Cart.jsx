import React, { useState } from 'react';
import styled from 'styled-components';
import { Trash2 } from 'lucide-react';
import Shoes from '../../assets/71OEQwAu0-L._AC_UF1000_1000_QL80_-removebg-preview.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 70px;
`;

const CartSection = styled.div`
  flex: 0 0 70%;
`;

const SummarySection = styled.div`
  flex: 0 0 25%;
  border: 1px solid #ddd;
  padding: 20px;
  height: fit-content;
`;

const CartItem = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
  align-items: center;
  flex-wrap: wrap;
`;

const ItemImage = styled.img`
  width: 150px;
  height: auto;
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled.h4`
  font-size: 16px;
  margin-bottom: 6px;
`;

const Details = styled.p`
  font-size: 14px;
  color: #555;
  margin: 2px 0;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  button {
    padding: 4px 8px;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
  }
`;

const Total = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #474747;
  color: white;
  border-radius: 10px;
  padding: 10px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
    &:hover {
        background-color: #333;
        color: #fff;
    }
`;

const cartData = [
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
    id: 2,
    title: 'DOCTOR EXTRA SOFT Mens Running Shoe with Memory Foam',
    image: `${Shoes}`,

    size: '7 UK',
    color: 'Coffee',
    price: 1699,
    quantity: 1,
    warning: false,
  }
];

export default function ShoppingCart() {
  const [cart, setCart] = useState(cartData);

  const updateQuantity = (id, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container>
      <CartSection>
        <h2>Shopping Cart</h2>
        {cart.map(item => (
          <CartItem key={item.id}>
            <input type="checkbox" defaultChecked />
            <ItemImage src={item.image} alt={item.title} />
            <Info>
              <Title>{item.title}</Title>
              <Details>Size: {item.size}</Details>
              <Details>Colour: {item.color}</Details>
              {item.warning && <Details style={{ color: 'orange' }}>⚠️ Frequently returned item</Details>}
              <Controls>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button onClick={() => removeItem(item.id)}><Trash2 size={16} /></button>
              </Controls>
            </Info>
            <Price>₹{item.price * item.quantity}</Price>
          </CartItem>
        ))}
      </CartSection>

      <SummarySection>
        <p style={{ fontSize: '14px', color: 'green' }}>Your order is eligible for FREE Delivery.</p>
        <Total>Subtotal ({cart.length} items): ₹{subtotal.toLocaleString()}</Total>
       <Link to='/payment'> <Button>Proceed to Buy</Button></Link>
      </SummarySection>
    </Container>
  );
}
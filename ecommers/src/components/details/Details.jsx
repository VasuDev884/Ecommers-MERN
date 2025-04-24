import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import Shoes from '../../assets/71dJyM5dPCL._AC_UF350_350_QL50_-removebg-preview.png'
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import Cart from '../cart/Cart';

const Wrapper = styled.div`
  max-width: 1200px;
  padding: 40px 24px;
  margin: auto;
  display: flex;
  gap: 40px;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 80px;
`;


const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 480px;
  height: auto;
`;

const Info = styled.div`
  flex: 1;
  min-width: 300px;
`;

const BackLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  cursor: pointer;
  font-size: 14px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 16px 0;
  color: #555;
`;

const SectionLabel = styled.p`
  font-weight: 600;
  margin: 24px 0 12px;
`;

const SizeList = styled.div`
  display: flex;
  gap: 12px;
`;

const SizeBox = styled.button`
  padding: 10px 16px;
  border-radius: 10px;
  background: ${({ selected }) => (selected ? '#e0f0e5' : '#fff')};
  border: 1px solid ${({ selected }) => (selected ? '#4caf50' : '#ccc')};
  font-size: 14px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

const Price = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 32px 0 12px;
`;

const AddToCart = styled.button`
  background: #2e4e3f;
  color: #fff;
  padding: 14px 28px;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export default function ProductDetail() {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('42.5');
  const [cart, setCart] = useState([]);
  const sizes = ['40', '41', '42', '42.5', '43'];

  // Define product object
  const product = {
    id: 1,
    name: "Puma Wmns Caven 2.0 VTG 'Black White'",
    price: 140,
    size: selectedSize,
    image: Shoes,
  };

  const addToCart = () => {
    setCart((prev) => [...prev, product]);
    
  };

  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <BackLink onClick={() => navigate(-1)}>
            <ArrowLeft size={16} />
            Back
          </BackLink>
          <ProductImage src={Shoes} alt="Puma Shoes" />
        </ImageWrapper>

        <Info>
          <Title>{product.name}</Title>
          <Description>
            The sneakers are made of synthetic leather. The Caven 2.0 VTG is designed with simplicity,
            soft, comfortable materials and a streamlined shape that nods to 80s styling.
            SOFTFOAM+ technology for maximum comfort.
          </Description>

          <SectionLabel>Select Size</SectionLabel>
          <SizeList>
            {sizes.map((size) => (
              <SizeBox
                key={size}
                selected={selectedSize === size}
                onClick={() => setSelectedSize(size)}
                disabled={size === '40'}
              >
                {size}
              </SizeBox>
            ))}
          </SizeList>

          <Price>Price: ${product.price}</Price>
          <AddToCart onClick={addToCart}>
            <ShoppingCart size={18} />
            Add to Cart
          </AddToCart>
        </Info>
      </Wrapper>

    </>
  );
}
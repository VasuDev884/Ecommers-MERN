import React from 'react';
import styled from 'styled-components';
import Header from '../../assets/pexels-photo-4065512.jpeg';
import shoes from  '../../assets/71OEQwAu0-L._AC_UF1000_1000_QL80_-removebg-preview.png';
import { Link } from 'react-router-dom';


const Container = styled.div`
  font-family: 'Helvetica Neue', sans-serif;
  color: #000;
  width: 100%;
  overflow-x: hidden;
`;

const Hero = styled.section`
  background-image: url(${ Header });
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  padding: 6rem 2rem;
  text-align: center;

  h1 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 1rem;
  }

  p {
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.125rem;
    font-weight: 300;
  }

  button {
    margin-top: 2rem;
    padding: 0.75rem 1.5rem;
    background: white;
    color: black;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0.375rem;
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ bg }) => bg || '#ffffff'};
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
`;

const ProductCard = styled.div`
  background: #e1e1e19b;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  h3 {
    font-size: 1rem;
    margin: 1rem 0 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: #555;
    margin-bottom: 1rem;
  }
  button {
    width: 120px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid gray;
    margin-bottom: 10px;
  }
  button:hover {
    background: #000;
    color: #fff;
    cursor: pointer;
  }
`;

const PromoBanner = styled.div`
  background: #111;
  color: #fff;
  text-align: center;
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  button {
    background: #fff;
    color: #000;
    border: none;
    padding: 0.5rem 1.25rem;
    font-weight: bold;
    border-radius: 0.375rem;
  }
  button:hover {
    background: #484848;
    color: #fff;
    cursor: pointer;
  }
`;

const Footer = styled.footer`
  background: #f4f4f4;
  padding: 2rem;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 0.5rem;
    width: 200px;
  }

  button {
    padding: 0.5rem 1rem;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
  }
`;

export default function BertoozPage() {
  return (
    <Container>
      <Hero>
        <h1>Bertóoz</h1>
        <p>Your ultimate destination for fashion fusion and stylish innovations.</p>
        <button>Explore More</button>
      </Hero>

      <Section>
        <Title>See What's New</Title>
        <ProductsGrid>
          {[...Array(5)].map((_, index) => (
            <ProductCard key={index}>
              <img src={shoes} alt="product" />
              <h3>Product #{index + 1}</h3>
              <p>$199.00</p>
          <button> <Link to='/details'>Show Now</Link> </button>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Section>

      <Section bg="#f1f1f1">
        <PromoBanner>
          <h3>Discover your new favorite in our Best Sellers Sale</h3>
          <button>Shop Collection</button>
        </PromoBanner>
      </Section>
    </Container>
  );
}

import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Helvetica Neue', sans-serif;
  color: #000;
  width: 100%;
`;

const Hero = styled.section`
  background-image: url('https://source.unsplash.com/1600x900/?shoes');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 6rem 2rem;
  text-align: center;

  h1 {
    font-size: 5rem;
    font-weight: bold;
    line-height: 1;
  }

  p {
    max-width: 600px;
    margin: 1rem auto;
    font-size: 1.125rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background: #fff;
    color: #000;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ bg }) => bg || '#f9f9f9'};
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
  padding: 1rem;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.125rem;
  }

  p {
    font-size: 0.9rem;
    color: gray;
  }
`;

const Footer = styled.footer`
  background: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 0.5rem;
  }

  button {
    padding: 0.5rem 1rem;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
  }
`;